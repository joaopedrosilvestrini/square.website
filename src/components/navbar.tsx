import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '~/components/dropdown'
import apia from '~/utils/api'
import apiUser from '~/utils/api/users'
import { DISCORD_OAUTH2_URL } from '~/utils/constants'

export default async function Navbar() {
  const getUser = await apia.getLoggin()
  const user = await apiUser.getLogginUser()

  return (
    <>
      <div className="w-full flex justify-center px-10 3xl:px-0">
        <nav className="hidden lg:static top-0 lg:grid grid-cols-12 justify-between items-center max-w-7xl w-full py-6">
          <div className="col-span-8 flex justify-start gap-4 items-center">
            <Link href="/">
              <div className="cursor-pointer col-span-2 flex items-center mr-6">
                <p className="pointer-events-none text-white font-semibold text-2xl">
                  Square ServerList
                </p>
              </div>
            </Link>
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
                    <div className="hover:bg-gray-400/10 rounded-lg px-7 py-2 flex items-center gap-2 transition-all duration-200">
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
        <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-[51] p-4">
          <div className="bg-[#090614] w-full rounded-xl shadow-xl">
            <div className="flex w-full justify-center">
              <div className="relative flex justify-between items-center w-full px-4">
                <Link
                  href="oi"
                  className="h-full flex flex-col justify-center items-center text-xl w-16 py-6 rounded-xl text-gray-500 relative z-[3] active:bg-transparent"
                >
                  <div className="w-8 flex justify-center items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white transition-all duration-500 relative z-[2]"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="oi"
                  className="h-full flex flex-col justify-center items-center text-xl w-16 py-6 rounded-xl text-gray-500 relative z-[3] active:bg-transparent"
                >
                  <div className="w-8 flex justify-center items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white transition-all duration-500 relative z-[2]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
