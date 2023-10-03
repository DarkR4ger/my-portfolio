
import { useState } from "react";
import Rounded from "../rounded";
import { AnimatePresence, motion } from "framer-motion";
import SlideTextUp from "../slideuptext";

export default function ContactForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmiited, setIsSubmitted] = useState(false)

  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')


  const phrases = {
    "Name": "What is your Name?",
    "Email": "What is your Email?",
    "Message": "Enter your message here"
  }

  const handleError = () => {
    if (!name) {
      setNameErr("valid Name")
      return false
    } else setNameErr('')
    if (!email) {
      setEmailErr("Email address")
      return false
    } else if (!validateEmail(email)) {
      setEmailErr("valid Email address")
      return false
    }
    else setEmailErr('')

    return true
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const valid = handleError()
    if (valid)
      setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name, email, message
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })
      return res.json();

    } catch (err) {
      console.error("Err", err)
    }
  }

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email)
  }

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col gap-6">
        <form onSubmit={onSubmit} noValidate action="" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SlideTextUp className={`${name ? 'text-gray-500' : ''} text-2xl md:text-4xl transition-colors duration-500`} phrase={phrases.Name} />
            <input
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
              type="text" placeholder="Name" className="p-2 rounded-xl dark:bg-dark bg-light md:text-3xl " />
            {nameErr && <FormError type={nameErr} />}
          </div>
          <div className="flex flex-col gap-2">
            <SlideTextUp className={`${email ? 'text-gray-500' : ''} text-2xl md:text-4xl transition-colors duration-500`} phrase={phrases.Email} />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email" placeholder="Email" className="p-2 rounded-xl dark:bg-dark bg-light md:text-3xl"
            />
            {emailErr && <FormError type={emailErr} />}
          </div>
          <div className="flex flex-col gap-2">
            <SlideTextUp className={`${message ? 'text-gray-500' : ''} text-2xl md:text-4xl transition-colors duration-500`} phrase={phrases.Message} />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="your message"
              className="p-2 rounded-xl dark:bg-dark bg-light md:text-3xl"
              maxLength="50"
            ></textarea>
          </div>
          <div>
            <Rounded>
              <button type="submit" className="z-[1] md:text-4xl text-2xl">Submit</button>
            </Rounded>
          </div>
        </form>
        <AnimatePresence mode="wait">
          {isSubmiited && <FormSubmitted />}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  )

}


function FormError({ type }) {
  return (
    <div className="text-xl flex gap-6">
      <p className="text-red-500">&#42;</p>
      <p className="text-red-500">Please Enter a {type}</p>
    </div>
  )
}

function FormSubmitted() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
      className="md:text-xl  bg-green-600 bg-opacity-50 flex p-3 border-[1px] rounded-xl justify-center">
      <p>Your Form has been submitted</p>
    </motion.div>
  )
}
