import React from 'react'
import Button from '../Shared/Button'

const ProductsCard = ({data}) => {
  return (
    <div className='mb-10'>
        {/* Card Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {
                data.map((data) => (
                    <div className='group' key={data.id}>
                        <div className='relative'>
                            <img src={data.img} alt={data.title} className='[h-180px] w-[260px] object-cover rounded-md' />
                             {/* Hover Button */}
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm'>
                            <Button text={"Add to Cart"} bgColor={"bg-primary"} textColor={"text-white"} />
                        </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>Ksh{data.price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductsCard