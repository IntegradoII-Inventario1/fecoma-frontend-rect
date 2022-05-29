import TimeClock from '../utils/TimeClock'

const HeadComponent = ({titulo="Sin titulo"}) => {
  return (
    <>
    <header className='mt-4 md:mt-0'>

        <h1 className="text-3xl font-semibold leading-loose text-gray-600 dark:text-white">
          {titulo}
        </h1>
        <h1 className="font-semibold text-gray-700 dark:text-gray-200">
          <TimeClock />
        </h1>
      </header>
      <hr className="border-gray-200 dark:border-gray-700" />

    </>
  )
}

export default HeadComponent