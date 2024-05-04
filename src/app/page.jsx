import MouseScroll from '@/ui/mouse-scroll'
import AboutMe from '@/components/about-me'
import MyWork from '@/components/my-work'
import Contact from '@/components/contact'
import OpenSourceProjects from '@/components/open-source-projects'

export default function Home() {
  return (
    <>
      <main className='mx-5vw xs:mx-10vw sm:mx-15vw text-xl'>
        <section className='h-svh grid grid-cols-1 items-end'>
          <h1 className='text-6xl'>
            Hi<span className='text-accent'>,</span>
            <br />
            I&apos;m Prem
          </h1>

          {/* MouseScroll Indicator */}
          <MouseScroll />
        </section>
      </main>

      <main className='mt-8 mx-4 sm:mx-15vw text-xl'>
        <AboutMe />
        <OpenSourceProjects />
        <MyWork />
        <Contact />
      </main>
      <p className='p-2 text-center'>
        Copyright &copy; {new Date().getFullYear()} Mvlprem
      </p>
    </>
  )
}
