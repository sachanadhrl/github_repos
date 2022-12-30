import { AiOutlineLoading } from 'react-icons/ai'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <AiOutlineLoading className='font-bold text-7xl text-gray-100 animate-spin' />
    </div>
  )
}

export default Loader