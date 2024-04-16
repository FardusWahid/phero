"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Toaster } from 'react-hot-toast';






export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);



    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error("Access denied! account isn't valid");


            toast((t) => (
                <span>
                  <i>buy this course for 299 only&nbsp;</i>
                  <a className="font-semibold font-mono tracking-tighter nav2 px-3 py-1" href="https://www.facebook.com/free.courses.vercel/" target="_blank"> buy &nbsp; </a>
                </span>
              ), {duration:15000 } );

           
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
       <div style={{
        backgroundImage: `url('/got.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        height: '100vh', 
      }}
        
      >
<div className="flex flex-col items-center justify-center min-h-screen py-2">
         
         <h1 className="text-2xl text-white font-extrabold py-3 italic font-serif tracking-tight">{loading ? "Processing..." : "Login form "}</h1>
        
        
        <label htmlFor="email"></label>
        <input 
        className="p-2 glass  mb-4 "
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Email"
            />
        <label htmlFor="password"></label>
        <input 
        className=" p-2 mb-5 glass"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin}
            
            
            
className="active:bg-pink-500 py-1  text-white glass2  w-36 mx-24">Login</button>


<br /><br/> <br />
            
            <Toaster
  position="top-center"
  reverseOrder={false}
/>

<div className="flex justify-end">
<p className="text-sm   italic font-sans  text-white">Yet to pay your subscription fee? &nbsp; <a className="underline font-semibold " href="https://www.facebook.com/free.courses.vercel/" target="_blank">Contact here</a> </p>
 </div>
</div>       

</div>
 
)

}