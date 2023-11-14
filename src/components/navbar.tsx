import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '~/components/dropdown'
import apiUser from '~/utils/api/users'
import apia from '~/utils/api'
import { DISCORD_OAUTH2_URL } from '~/utils/constants'

export default async function Navbar() {
  const getUser = await apia.getLoggin()
  const user = await apiUser.getLogginUser()

  const items = [
    { label: 'Home', link: '/' },
    { label: 'Team', link: '/team' },
  ]

  return (
    <>
      <div className="w-full flex justify-center px-10 3xl:px-0">
        <nav className="static top-0 grid grid-cols-12 justify-between items-center max-w-7xl w-full py-6">
          <div className="col-span-8 flex justify-start gap-4 items-center">
            <Link href="/">
              <div className="cursor-pointer col-span-2 flex items-center mr-6">
                <p className="pointer-events-none text-white font-semibold text-2xl">
                  Square ServerList
                </p>
              </div>
            </Link>
            <div className="hidden relative lg:flex items-center gap-4 group">
              {items.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="relative text-zinc-400 font-medium hover:text-white transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="pb-2 col-span-4 space-x-2 hidden lg:flex justify-end">
            {getUser === undefined ? (
              <>
                <Link href={DISCORD_OAUTH2_URL}>Logar</Link>
              </>
            ) : (
              <>
                <Dropdown
                  trigger={
                    <div className="hover:bg-gray-400/10 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-200">
                      <Image
                        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`}
                        className="w-8 h-8 rounded-full"
                        alt="user image"
                        width={8}
                        height={8}
                      />
                      <h1 className="font-medium text-black dark:text-white ml-2">
                        {user.username}
                      </h1>
                      <svg
                        className="w-6 h-6 transform transition-transform duration-200 rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7.293 7.707a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"></path>
                      </svg>
                    </div>
                  }
                ></Dropdown>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  )
}
