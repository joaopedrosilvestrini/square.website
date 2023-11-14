import apiUser from '~/utils/api/users'
import Image from 'next/image'
import Link from 'next/link'

export default async function User({ params }: { params: { id: string } }) {
  const user = await apiUser.fetchUser(params.id)

  return (
    <>
      <section className="flex flex-1 flex-col">
        <section className="max-w-[1500px] w-screen">
          <div className="flex flex-col items-center justify-center">
            <section className="flex items-center xl:flex-col justify-center w-full xl:mt-2 mt-[30px] text-white">
              <div
                className={`bg-neutral-900 rounded-xl flex xl:flex-col xl:h-[320px] h-[120px] w-[95%] border-2 items-center justify-center`}
              >
                <Image
                  className="w-[100px] h-[100px] xl:my-2 rounded-full xl:float-none ml-2"
                  src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                  alt="avatar"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col w-full justify-center gap-2">
                  <div className="ml-6 xl:m-0 xl:my-1 text-white flex xl:flex-col xl:items-center flex-row gap-3 text-[26px]">
                    <strong>Spyei gordo</strong>
                    <span className="text-[#797979] items-center flex text-[13px]">
                      ( 123123123 )
                    </span>
                  </div>
                  <div className="flex mx-6 xl:justify-center xl:m-1 flex-row gap-1">
                    10
                  </div>
                </div>
                <div className="flex w-full justify-end ">
                  <div className="flex gap-4 items-center justify-center xl:w-screen flex-row m-4">
                    <Link
                      href="s"
                      className="border-2 border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors duration-300 p-2 rounded-md w-[120px] text-center"
                    >
                      <span>Votar</span>
                    </Link>
                    <Link
                      href="n"
                      className="border-2 border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors duration-300 p-2 rounded-md w-[120px] text-center"
                    >
                      <span>Adicionar</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  )
}
