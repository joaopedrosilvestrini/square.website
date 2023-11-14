import Card from '~/components/card'

export default async function Home() {
  return (
    <>
      <section className="flex col items-center justify-center px-10 3xl:px-0">
        <div className="max-w-7xl w-full">
          <div className="w-full flex items-center justify-center gap-36 py-24">
            <div className="lg:max-w-2xl w-full text-center">
              <h1 className="relative bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 text-4xl lg:text-5xl pb-2 leading-20 font-bold">
                Square ServerList
              </h1>
              <p className="text-lg text-gray-500 mt-4 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a
                saepe pariatur aliquid unde, tempora doloribus? Enim excepturi
                expedita quam ullam, molestiae, sequi vero dolore non repellat
                facere architecto blanditiis.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full my-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 mr-3 ml-3 gap-1 mt-5">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
