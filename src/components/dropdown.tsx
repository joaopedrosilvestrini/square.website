'use client'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { NavbarProps } from '~/types'

export default function Dropdown({ trigger }: NavbarProps) {
  const router = useRouter()

  const restartUser = () => {
    router.push('/api/auth/logout')
    router.refresh()
  }

  return (
    <Menu as="div" className="w-48 flex gap-24 relative">
      <Menu.Button>
        {trigger || (
          <div className="w-full cursor-pointer flex justify-between select-none items-center gap-2 p-2 pl-4 rounded-md hover:bg-zinc-500/5 transition-all duration-200">
            <span>Abrir</span>
            <svg
              className="w-6 h-6 transform transition-transform duration-200 rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7.293 7.707a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"></path>
            </svg>
          </div>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col overflow-hidden absolute p-2 right-0 mt-2 border border-zinc-500/5 top-12 w-full origin-top-right rounded-xl bg-[#18141c] bg-opacity-5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none space-y-2 transform opacity-100 scale-100">
          <div>
            <Menu.Item
              as="button"
              className="hover:bg-zinc-400/5 w-full flex items-center py-2.5 p-2 transition-all duration-200 rounded-lg font-medium cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              Perfil
            </Menu.Item>
            <Menu.Item
              as="button"
              onClick={() => restartUser()}
              className="hover:bg-red-400/5 w-full flex items-center py-2.5 p-2 transition-all duration-200 rounded-lg font-medium cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
              Logout
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
