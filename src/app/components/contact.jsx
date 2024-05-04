'use client'
import { AnimatedTooltip } from '@/ui/animated-tooltip'

const social = [
  [
    {
      id: 1,
      name: 'Github',
      designation: 'github.com/mvlprem',
      image: '/images/github.svg',
    },
  ],
  [
    {
      id: 1,
      name: 'Linkedin',
      designation: 'linkedin.com/in/mvlprem',
      image: '/images/linkedin.svg',
    },
  ],
]

export default function Contact() {
  return (
    <section className='py-8'>
      <h2 className='text-4xl mb-6'>
        Contact<span className='text-accent text-6xl'>.</span>
      </h2>
      <p className='mb-6'>
        If you want to present a fun opportunity, have questions or just want to
        have a chat, I&apos;m always up to hearing from you.
      </p>
      <p className='mb-[6rem]'>
        You can send me a good old-fashioned email at{' '}
        <a
          href='mailto:mvl.prem@outlook.com'
          target='_blank'
          className='underline decoration-accent'
        >
          mvl.prem@outlook.com
        </a>
        , or catch me over on
      </p>

      <div className='flex flex-row gap-8 items-center justify-center mb-10 w-full'>
        <AnimatedTooltip items={social[1]} />
        <AnimatedTooltip items={social[0]} />
      </div>
    </section>
  )
}
