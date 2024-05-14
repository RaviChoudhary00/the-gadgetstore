import React from 'react'

export default function LandingPage() {
    return (
        <div className=''>
            <div className="1 max-h-screen px-4  pt-20 text-gray-100 bg-gray-900">
                <div className='w-full flex md:flex-row  flex-col md:justify-around'>
                    <div className='md:w-4/12 my-auto'>
                        <h1 className='md:text-4xl w-10/12 text-2xl md:leading-10'>
                            <span className='text-yellow-400'>Unleash Your Potential:</span> Explore the Latest Mobiles & Gadgets That Elevate Your Everyday.
                        </h1>
                        <h2 className='text-sm text-gray-300 md:text-sm ml-auto md:ml-0 mt-4 w-9/12'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore velit quis quasi necessitatibus minus qui doloremque adipisci beatae quas sed cumque fugit?
                        </h2>
                    </div>
                    <div className='md:w-4/12 w-8/12'>

                        <img src="https://dlcdnwebimgs.asus.com/gain/37b31485-3c56-4135-8551-2fb93e9bcdd0/w800" alt="" />
                    </div>
                </div>
            </div>
            <div className="2  p-4   bg-gray-900 text-gray-100">

                <div className='w-full flex md:flex-row-reverse flex-col md:justify-around'>
                    <div className='md:w-4/12 my-auto'>
                        <h2 className='md:text-4xl mt-6 md:mt-0 text-2xl md:leading-10'>Discover the <span className='text-indigo-300'>Mobile</span> & Gadget Ecosystem That Fuels Your Passions.</h2>

                        <h2 className='text-xs md:text-sm mt-4 mb-4 md:mb-0 w-9/12 text-gray-300'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore velit quis quasi necessitatibus minus qui doloremque adipisci beatae quas sed cumque fugit?
                        </h2>
                    </div>
                    <div className='md:w-4/12 w-6/12 self-end'>

                        <img className='w-3/4' src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1680678352553/zip/img/iqoo9pro-wireless-img1-mb-x2.png.webp" alt="moble" />
                    </div>
                </div>
            </div>
            <div className="3  p-4 bg-gray-900  text-gray-50 px-4">
                <h2 className=' text-2xl md:text-4xl my-4'>Featured Products</h2>
                <div className="flex gap-5 md:gap-2 flex-col md:flex-row">
                    <div className='flex-1 p-4 rounded-2xl bg-blue-gray-800 hover:bg-gray-900 cursor-pointer duration-500'>
                        <img className='rounded-2xl aspect-1 object-cover' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917" />
                    </div>
                    <div className='flex-1 p-4 rounded-2xl bg-blue-gray-800 hover:bg-gray-900 cursor-pointer duration-500'>
                        <video className='rounded-2xl' autoPlay muted loop >
                            <source src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4' type="video/mp4" />
                        </video>
                    </div>
                    <div className='flex-1 p-4 rounded-2xl bg-blue-gray-800 hover:bg-gray-900 cursor-pointer duration-500'>
                        <img className='rounded-2xl' src="https://img.freepik.com/free-photo/electronic-device-surrounded-by-nature_52683-107556.jpg?t=st=1715671028~exp=1715674628~hmac=8ccf1a69f3cb97181e44afecfe69d74b579f8adbe12dd9877ddc3f8c75a08c76&w=740" alt="tablets" />
                    </div>
                </div>

                <div className="h-52">
                    <div className="flex flex-col gap-4 mt-20 items-center">
                        <button className='text-lg w-8/12 md:w-4/12 hover:rounded-none bg-indigo-700 hover:bg-indigo-900 rounded-2xl px-6 py-2 duration-500'>Shop Now</button>
                        <button className='text-lg w-8/12 md:w-4/12 px-6 py-2 hover:text-indigo-400'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
