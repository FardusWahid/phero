import Link from "next/link"

export default function Sub(props){
    return(

        <div>

<section className="ring-1 ring-yellow-400 rounded-md text-center m-2 hover:opacity-70 hover:ring-opacity-100 hover:ring-2 hover:ring-blue-900">
<Link href={props.road}><p className=" text-blue-950 px-2 py-2  font-extrabold text-[16px] md:text-[18px] ts tsw font-sans tracking-wide ">Module {props.module}</p>
        
       
         
        </Link> 
     
        </section>
   
        </div>
    )
}