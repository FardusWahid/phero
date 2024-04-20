"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import Sub from "./Sub"
import Navbar from "@/components/nav"
import { BiLogOut } from "react-icons/bi";
import { Toaster } from 'react-hot-toast';






export default function ProfilePage() {
    const today = new Date();
    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' });

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


    

return ( <div>
    
        <div >
<Navbar/>
         
<br /><br /><br /><br className="max-sm:hidden" />
        <section className="flex justify-end  mx-3 md:mx-7 ">
            <button
            onClick={logout}
            className="flex font-semibold font-mono tracking-tighter nav2 px-3 py-1"
            >logout<BiLogOut color="black" size={22} />
            </button>
        </section>
        <p className="text-sm mx-3 font-extrabold italic font-mono">{dayOfWeek}</p>
<br />

    <h1 className="text-2xl text-center md:text-3xl font-sans font-extrabold italic tracking-wider mb-4 mt-2 md:mb-5">PROGRAMMING - HERO</h1>      
<section className="flex flex-wrap justify-center gap-1 w-full">

<Sub 

module="00"
road="/m1"

/>


<Sub 

module="01"
road="/m2"

/>

<Sub 

module="02"
road="/mm2"

/>



<Sub 

module="03"
road="/physics"

/>


<Sub 

module="04"
road="/physics"

/>



<Sub 

module="05"
road="/physics"

/>



<Sub 

module="06"
road="/physics"

/>


<Sub 

module="07"
road="/physics"

/>


<Sub 

module="08"
road="/physics"

/>


<Sub 

module="09"
road="/physics"

/>


<Sub 

module="10"
road="/physics"

/>

<Sub 

module="11"
road="/physics"

/>
<Sub 

module="12"
road="/physics"

/>
<Sub 

module="13"
road="/physics"

/>
<Sub 

module="14"
road="/physics"

/>

<Sub 

module="15"
road="/physics"

/>


<Sub 

module="16"
road="/physics"

/>


<Sub 

module="17"
road="/physics"

/>
<Sub 

module="18"
road=""

/>
<Sub 

module="19"
road=""

/>
<Sub 

module="20"
road=""

/>
<Sub 

module="21"
road=""

/>
<Sub 

module="22"
road=""

/>
<Sub 

module="23"
road=""

/>
<Sub 

module="24"
road=""

/>
<Sub 

module="25"
road=""

/>
<Sub 

module="26"
road=""

/>
<Sub 

module="27"
road=""

/>
<Sub 

module="28"
road=""

/>
<Sub 

module="29"
road=""

/>
<Sub 

module="30"
road=""

/>
<Sub 

module="31"
road=""

/>
<Sub 

module="32"
road=""

/>

<Sub 

module="33"
road=""

/>
<Sub 

module="34"
road=""

/>
<Sub 

module="35"
road=""

/>
<Sub 

module="36"
road=""

/>
<Sub 

module="37"
road=""

/>
<Sub 

module="38"
road=""

/>
<Sub 

module="39"
road=""

/>
<Sub 

module="40"
road=""

/>
<Sub 

module="41"
road=""

/><Sub 

module="42"
road=""

/>
<Sub 

module="43"
road=""

/>
<Sub 

module="44"
road=""

/>
<Sub 

module="45"
road=""

/>
<Sub 

module="46"
road=""

/>
<Sub 

module="47"
road=""

/>
<Sub 

module="48"
road=""

/>
<Sub 

module="49"
road=""

/>
<Sub 

module="50"
road=""

/>
<Sub 

module="51"
road=""

/>
<Sub 

module="52"
road=""

/>
<Sub 

module="53"
road=""

/><Sub 

module="54"
road=""

/>
<Sub 

module="55"
road=""

/>
<Sub 

module="56"
road=""

/>
<Sub 

module="57"
road=""

/>
<Sub 

module="58"
road=""

/>
<Sub 

module="59"
road=""

/>
<Sub 

module="60"
road=""

/>
<Toaster
  position="top-center"
  reverseOrder={false}
/>

   
</section>


            </div>   
            
            <div>

             
            </div>
            
            
            </div>  
)
}