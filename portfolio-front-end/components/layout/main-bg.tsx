'use client'

import Image from 'next/image'

export default function MainBg() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full">
        <Image
          src="/images/main-bg.webp"
          alt="Main Background"
          width={5467}
          height={6000}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 z-20 shadow-xl">
        <Image
          src="/images/main-bg-leftside.webp"
          alt="Left Background"
          width={3116}
          height={2633}
          className="object-contain"
          priority
          style={{ width: '45%', height: 'auto' }}
        />
      </div>

      <div className="absolute right-0 z-20 flex justify-end bottom-0 shadow-xl">
        <Image
          src="/images/main-bg-rightside.webp"
          alt="Right Background"
          width={2509}
          height={4308}
          sizes="100%"
          className="object-contain"
          priority
          style={{ width: '35%', height: 'auto' }}
        />
      </div>
    </div>
  )
}
