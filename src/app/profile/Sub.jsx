import Link from "next/link"

export default function Sub(props){
    return(

        <div className="flex justify-center h-full">

<section className="w-4/5 p-1 ring-1 mt-5 rounded-[20px] shadow-lg shadow-blue-950 text-center h-1/3 lg:w-3/4 lg:h-fit ">
        <h1 className="mt-2  font-bold text-2xl text-shadow">{props.subject}</h1>
        <Link href={props.road}>
        <img src={props.image}
         alt={props.alt} 
         className="rounded-lg  p-3 w-full h-[180px]"/></Link> 
     
        </section>
   
        </div>
    )
}