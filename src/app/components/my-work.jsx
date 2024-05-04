'use client'
import { PinContainer } from '@/ui/3d-pin'

export default function MyWork() {
  return (
    <section className='py-8'>
      <h2 className='text-4xl mb-6'>
        My Work<span className='text-accent text-6xl'>.</span>
      </h2>

      <div className='h-[50rem] lg:h-[25rem] grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
        <PinContainer
          title='mvlprem/blog'
          href='https://mountain-screeching-tea.glitch.me'
        >
          <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] '>
            <h3 className='max-w-xs !pb-2 !m-0 text-lg text-accent'>Blog</h3>
            <div className='text-base !m-0 !p-0'>
              <span className='text-white'>
                Simple Blog created with Nodejs, Express & MongoDB.
              </span>
            </div>
            <div className='flex flex-1 w-full rounded-lg mt-4 bg-[url("/images/blog.png")] bg-cover bg-center' />
          </div>
        </PinContainer>

        <PinContainer
          title='mvlprem/fashion-store'
          href='https://prem-fashion-store.netlify.app'
        >
          <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] '>
            <h3 className='max-w-xs !pb-2 !m-0 text-lg text-accent'>
              Fashion Store
            </h3>
            <div className='text-base !m-0 !p-0'>
              <span className='text-white'>
                The frontend of an e-commerce website.
              </span>
            </div>
            <div className='flex flex-1 w-full rounded-lg mt-4 bg-[url("/images/fashion-store.png")] bg-cover bg-center' />
          </div>
        </PinContainer>
      </div>

      <div className='h-[50rem] lg:h-[25rem] grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
        <PinContainer
          title='mvlprem/battleship'
          href='https://mvlprem.github.io/battleship'
        >
          <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] '>
            <h3 className='max-w-xs !pb-2 !m-0 text-lg text-accent'>
              Battleship
            </h3>
            <div className='text-base !m-0 !p-0'>
              <span className='text-white'>
                A strategy type guessing game for two players.
              </span>
            </div>
            <div className='flex flex-1 w-full rounded-lg mt-4 bg-[url("/images/battleship.png")] bg-cover bg-center' />
          </div>
        </PinContainer>

        <PinContainer
          title='mvlprem/todo-list'
          href='https://mvlprem.github.io/to-do-list'
        >
          <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] '>
            <h3 className='max-w-xs !pb-2 !m-0 text-lg text-accent'>
              Todo-List
            </h3>
            <div className='text-base !m-0 !p-0'>
              <span className='text-white'>
                A simple to-do list web application.
              </span>
            </div>
            <div className='flex flex-1 w-full rounded-lg mt-4 bg-[url("/images/todo-list.png")] bg-cover bg-start' />
          </div>
        </PinContainer>
      </div>
    </section>
  )
}
