'use client'
import { PinContainer } from '@/ui/3d-pin'
import Image from 'next/image'

export default function OpenSourceProjects() {
  return (
    <section className='py-8'>
      <h2 className='text-4xl mb-6'>
        Open Source Projects<span className='text-accent text-6xl'>.</span>
      </h2>
      <p>
        Below are some of the open source projects I have been contributing to.
      </p>

      <div className='h-[25rem] w-full grid grid-cols-1 lg:grid-cols-2'>
        <PinContainer title='Simple Icons' href='https://www.simpleicons.org'>
          <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] '>
            <h3 className='max-w-xs !pb-2 !m-0 text-lg text-accent'>
              Simple Icons
            </h3>
            <div className='text-base !m-0 !p-0'>
              <span className='text-white'>
                Free SVG icons for popular brands.
              </span>
            </div>
            <div className='flex flex-1 w-full rounded-lg mt-4 bg-[url("/images/simple-icons.png")] bg-cover bg-center' />
          </div>
        </PinContainer>
      </div>
    </section>
  )
}
