import ContactForm from "@/components/contact/contactfrom";
import Layout from "@/components/layouts/article";

export default function About() {
  let phrase = "Get in Touch"
  return (
    <Layout title='Contact'>
      <div className="flex mx-4 flex-col justify-center gap-20 items-center min-h-screen">
        <h1 className="text-6xl">Get in <span className="text-red-500">Touch</span></h1>
        <ContactForm />
      </div>
    </Layout>
  )
}
