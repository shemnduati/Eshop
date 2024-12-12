import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';


const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle: `Choosing the perfect smartwatch can be an exciting yet overwhelming task with so many options available. 
                    To make the right choice, it’s important to consider your lifestyle, needs, and preferences.
                     Here’s a guide to help you select the ideal smartwatch.`,
        published: "Jan 20, 2024 by Josh",
        image: Img1,
    },
    {
        title: "How to choose perfect gadget",
        subtitle: `Selecting the perfect gadget can be a daunting task, given the plethora of options available. 
                    Whether it's a smartphone, laptop, tablet, or any other device, 
                    making the right choice requires careful consideration of your needs, budget, and preferences. 
                    Here’s a step-by-step guide to help you decide.`,
        published: "Jan 20, 2024 by Mwani",
        image: Img2,
    },
    {
        title: "How to choose perfect VR headset",
        subtitle: `Virtual reality (VR) headsets are your gateway to immersive gaming, entertainment, and even productivity experiences. 
                    With numerous options on the market, choosing the perfect VR headset requires careful evaluation of
                     your needs and preferences. 
                    Here’s a guide to help you make an informed decision.`,
        published: "Jan 20, 2024 by Shem",
        image: Img3,
    }
]
const Blog = () => {
  return (
    <div className='my-12'>
        <div className='container'>
          {/* Header Secrion */}
          <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
          {/* Body Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {/* Blog Card */}
            {
                BlogData.map((data) =>(
                    <div key={data.id} className='bg-white dark:bg-gray-900'>
                        {/* Image Section */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img src={data.image} alt={data.title} 
                                className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                            />
                        </div>
                        {/* Content Section */}
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.published}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
          </div>
    </div>
    </div>
  )
}

export default Blog