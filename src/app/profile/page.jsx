"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import Sub from "./Sub"



export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }


    

return (    
        <>

         
        <h1 className="text-4xl font-bold mt-5 mx-5">ACS<span className="text-sm font-normal italic tracking-tighter">Engineering</span></h1>
<br />
        <section className="flex justify-end gap-5 mx-6 ">
            <a className="text-gray-900 bg-gradient-to-r from-red-200 via-yellow-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 px-2 py-1 h-8 rounded-xl " href="">medical</a>
            <a  className="text-gray-900 bg-gradient-to-r from-red-200 via-blue-pink-300 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 px-2 py-1 h-8 rounded-xl"  href="">Varsity</a>
            <button
            onClick={logout}
            className=" text-sm italic bg-gray-900 rounded-lg p-1 text-yellow-300 shadow-inner shadow-zinc-300"
            >Logout</button>
        </section>
<br />

           
<section className="w-full lg:grid grid-cols-3">

<Sub 

subject="Physics"
image="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_22/2451826/180601-atomi-mn-1540.jpg"
road="/physics"
alt="physics"
/>


<Sub
subject="Mathematics"
image="https://w0.peakpx.com/wallpaper/131/996/HD-wallpaper-calculus-love-math-mathematics-quote-saying-sign.jpg"
road="/math"
alt=""
/>

<Sub
subject="Chemistry"
image="https://static.vecteezy.com/system/resources/thumbnails/022/807/944/small_2x/chemical-flasks-with-colored-liquids-on-a-black-background-generative-ai-photo.jpg"
road="/chemistry"
alt="chemistry"
/>
   
</section>


            </>    

)
}