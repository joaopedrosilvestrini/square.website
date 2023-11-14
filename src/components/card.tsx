'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ServerStructure } from '~/types'
import Image from 'next/image'
import Link from 'next/link'
import apiServer from '~/utils/api/server'

export default function Card() {
  const [data, setData] = useState<ServerStructure[]>([])

  const fetchData = async () => {
    const res = await apiServer.getAllServer()
    setData(res)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {data?.slice(0, 4).map((server, index) => (
        <>
          <Link href="oi" key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="w-full bg-[#18141c] rounded-sm overflow-hidden select-none p-4 bg-opacity-20 hover:bg-opacity-100 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-center m-2">
                  <div className="flex justify-start">
                    <Image
                      src={`https://cdn.discordapp.com/avatars/${server._id}/${server.icon}.png?size=2048`}
                      alt="img do bot"
                      className="relative w-24 h-24 ring-4 ring-dark ring-offset-0 rounded-full overflow-hidden"
                      width={24}
                      height={24}
                    />
                    <div className="text-white ml-4 mt-3 xlr:h-[50px] xl:min-h-[70px] break-before-all w-[70%]">
                      <h1 className="text-white text-lg font-semibold">
                        {server.servername}
                      </h1>
                      <p className="text-gray-400 text-sm font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </>
      ))}
    </>
  )
}
