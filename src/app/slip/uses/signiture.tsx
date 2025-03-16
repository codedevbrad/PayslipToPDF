'use client'

import Image from "next/image"

export default function Signiture ( ) {
    return (
        <div className="w-full max-w-w[600px] my-10 flex justify-center">
            <Image
                src="/signiture.png"         // or an imported image module
                alt="A descriptive alt text"
                width={700}                 // Next.js still needs these numeric values for layout/optimization
                height={600} 
            />
      </div>
    )
}