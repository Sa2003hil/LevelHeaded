import Image from 'next/image'
import Section1 from '@/components/Section1'
// import Footer from '@/components/Footer'
import SubscribeNew from '@/components/Subscribe'
import Reviews from '@/components/Crousel'
import Cta from '@/components/Cta'
import Howitworks from '@/components/howitworks'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-28">
      <div id="Section-1">
        <Section1 />
      </div>
      <div className="w-full h-full">
        <Howitworks />
      </div>
      <div className="flex w-[90%]">
        <Cta />
      </div>
      <div className='h-full w-screen px-40'>
        <SubscribeNew />
      </div>

    </div>
  )
}
