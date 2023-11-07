import React from 'react'
import heroImgOne from '../assets/heroImgOne.jpg'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'


export const HomeSale = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease', 
          once: false, 
        });
      }, []);
  return (
    <section className='flex items-center justify-center bg-[#FEFAF0] bg-contain pt-12 pb-12'>
        <div data-aos="fade-down-left" className="md:scale-80 sm:scale-50 relative rounded-[2rem] object-cover md:max-w-[40rem] sm:max-w-[25rem] h-[30rem] hover:opacity-75" >
            <img className=" rounded-[2rem] object-cover sm:max-w-[25rem] h-[30rem] hover:opacity-75" src={heroImgOne} alt="product-image" />
            <div key={''} className="absolute inset-0 bg-[#403F2B] opacity-50 rounded-[2rem] object-cover sm:max-w-[25rem] h-[30rem]"></div>
            <div key={''} className="absolute inset-0 top-[9rem] md:left-16 sm:left-6 align-items-center justify-center text-center rounded-[2rem] sm:max-w-[25rem] h-[30rem]">
                <p className='text-[#FFFDC3] text-[4rem] sm:max-w-[25rem] md:scale-80 sm:scale-50   md:mb-4 sm:mb-0'>Weekend Sale</p>
                <Link to='/shopall/${id}' class="md:ml-24 sm:ml-8 text-white w-[8rem] bg-[#5C5C42] hover:bg-[#FEFAF0] hover:text-[#5C5C42] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Shop Now</Link>
            </div> 

        </div>
    </section>
  )
}
