'use client'
import Link from "next/link"
import { useState } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { Toaster } from 'react-hot-toast';
import {toast} from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import Navbar from "@/components/nav"
import { IoLogInOutline } from "react-icons/io5";
import SimpleImageSlider from "react-simple-image-slider";
import MediaQuery from 'react-responsive';





export default function Home() {


  const images = [
    { url: "/pay1.png" },
    { url: "/login1.png" },
    
    { url: "/profile1.png" },
    { url: "/demo11.png" },
    { url: "/demo22.png" },
    { url: "/demo2.png" },
  ];
  

  
    const copyToClipboard = () => {
      navigator.clipboard.writeText("I wish to proceed payment of 299 for programming hero webdevelopment course")
        .then(() => toast.success('Text copied to clipboard'))
        .catch(err => console.error('Error copying text: ', err));
    };
  



  return (
<div>

  <Navbar fixed={undefined} /><br /><br /><br /><br />
  <section className="flex justify-end mx-4">
<p className="flex justify-end mx-2 font-sans font-semibold text-[16px] md:text-[18px] ">Purchased already?</p>
<a className="log font-extrabold px-2 py-1 text-blue-900 flex text-[14px]  hover:shadow-md hover:shadow-yellow-300 
md:px-5 md:text-[17px]"  href="/login">Login<IoLogInOutline size={23} color="black"/> </a>
</section>  <br />
                  


<div>
  <h1 className="text-3xl font-extrabold text-center pt-3 lg:pt-0 ">Programming Hero Web Development</h1>
</div>
 




<section className="flex flex-wrap lg:flex-row-reverse lg:m-10 lg:justify-between">












<div className="flex justify-center mt-5 lg:mt-0">
  <main className=" checkout w-11/12 justify-center lg:w-[550px]">

<section className="p-2 w-full ">
  <img src="/optweb.jpg" alt="billing"
   className="rounded-md "/>

</section>

<div className="flex justify-center w-full">
  <button className="py-3 flex justify-center text-black font-sans font-bold text-[14px] lg:text-[20px] items-center" onClick={copyToClipboard}>I am ready to proceed payment of 299&nbsp;<FaCopy size={20} color="black" /></button>
  </div>

<p className="text-shadow text-center text-[12px] text-blue-950 font-sans italic ">copy & send it to inbox now</p>
<div className="flex justify-center">
<a className="checkout py-2 my-3 w-2/3 flex justify-center font-extrabold tracking-wider mb-14  " href="https://www.facebook.com/free.courses.vercel/" target="_blank">Inbox now</a></div>
</main>
</div>


<div className="mt-16 m-3 lg:w-[720px] lg:mt-5">
  <h1 className="text-[24px] font-bold font-sans">Description:</h1>
 
 To Continue this course: 
 <ol className="font-semibold italic tracking-wide">
  <li>1. Click you copy</li>
  <li>2. Go to inbox now</li>
  <li>3. send the message you copied</li>
  <li>&.we only accept payment through Bkash</li>

 </ol><br />

 <p className=" font-bold">We have dedicated webapp support for all of our courses & all these classes are originally rooted to YouTube, that means you can Download them and watch it Offline! <br /><br />
  <span>This course comes with a dedicated Facebook Support Group where u can post all potential problems you might have. <br />
    </span> </p>
 
 



</div>

</section>
<br /> <br /><br />
<h1 className="font-extrabold text-xl mx-3 md:mx-56">Demo <span className="font-semibold text-sm">[mobile view]</span></h1>
<div className="flex justify-center">

<MediaQuery maxWidth={768}>
      {(matches) => (
        <SimpleImageSlider
        
  width={matches ? 340 : 360} 
  height={matches ? 600 : 800} 
  images={images}
  showBullets={true}
  showNavs={true}
  loop={true}
  autoPlay={true}
/>
      )}
    </MediaQuery>
    </div>




    
<br /><br />



   <br /><br /><br /> <br /><br /><br />
    <p>Follow us on:</p><br />  
    <div className="flex"> 
    <a className="mx-5 flex  w-[60px]" href="https://www.facebook.com/free.courses.vercel/" target="_blank"><FaSquareFacebook size={50} color="blue"/></a>


<a className="mx-5 flex  w-[60px]" href="https://www.youtube.com/channel/UCtAJJtWtY3Lsd3pVAgVxsfw" target="_blank"><ImYoutube2 size={70} color="red" />  </a>            
    
      
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <footer className= " bottom-0 w-full  text-black p-4 flex justify-center">
      <p className="text-sm">&copy; 2024 Apple Courses.</p>
  </footer> 

    <Toaster
  position="top-center"
  reverseOrder={false}
/>            
</div>
  )
}
