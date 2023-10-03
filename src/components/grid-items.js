import Image from 'next/image'
import Link from 'next/link'


export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <section className='w-full text-center group '>
      <Link
        href={`/projects/${id}`}
        scroll={false}
        className=''
      >
        <div className='border group-hover:border-red-500 rounded-xl overflow-hidden transition-all duration-500'>
          <Image
            src={thumbnail}
            alt={title}
            className='rounded-xl group-hover:scale-110 transition-transform duration-500'
            placeholder='blur'
          />
        </div>
        <p className='mt-4 text-xl md:text-4xl text-red-500'>{title}</p>
        <p className='mt-2 text-xl'>{children}</p>

      </Link>

    </section>
  )
}
