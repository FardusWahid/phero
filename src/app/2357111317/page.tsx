"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length == 10 && user.username.length < 4 && user.username.length>2){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2" style={{
        backgroundImage: `url('/got.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Adjust this property as needed
        height: '100vh', 
      }}>
        <h1 className="text-2xl my-3 text-white font-extrabold font-sans ">{loading ? "Processing.." : "Signup"}</h1>
        <hr />
        <label htmlFor="username"></label>
        <input 
        className="p-2 border glass  mb-4 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email"></label>
        <input 
        className="p-2  glass  mb-4 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password"></label>
        <input 
        className="p-2 glass mb-4 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            className=" glass2 text-white  px-3 py-1">{buttonDisabled ? "Not valid" : "Signup"}</button>
            <br /><Link className="italic font-semibold text-[14px] tracking-widest text-white" href="/login">Visit login page</Link>
        </div>
    )

}