import React from 'react'
const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop"
    },
    {
        id: 3,
        name: "About",
        link: "/#about"
    },
    {
        id: 4,
        name: "Blog",
        link: "/#blog"
    },
]
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
        <div className='py-4'>
            <div className='container'>
                {/* Logo and Links Section */}
                    <div>
                        <a href='#' 
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
                                        duration-200 relative z-40'> 
                         Eshop
                        </a>
                        <div>
                           {/* Menu items */} 
                           <div>
                             <ul>
                                {MenuLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className="">{data.name}</a>
                                        </li>
                                    )) }
                             </ul>
                           </div>
                        </div>
                    </div>
                {/* Navbar Right Section */}
            </div>
        </div>
    </div>
  )
}

export default Navbar