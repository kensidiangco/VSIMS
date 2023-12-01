import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-center justify-between p-24">
      <div className="">
        <Link href="/stock" className='p-12 border border-white rounded-md'>Stock</Link>
      </div>

      <div className="shrink-no">
        <Link href="/sales" className='p-12 border border-white rounded-md'>Sales list</Link>
      </div>

      <div className="">
        <Link href="/debt" className='p-12 border border-white rounded-md'>Dept</Link>
      </div>

      <div className="">
        <Link href="/report" className='p-12 border border-white rounded-md'>Report</Link>
      </div>
    </main>
  )
}
