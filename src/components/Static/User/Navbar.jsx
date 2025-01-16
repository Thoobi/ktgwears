import { useEffect, useState } from 'react';
import ktglogo from '../../../assets/ktg-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { navcomponent } from '../../../lib/navbar'
import { IoAddOutline } from "react-icons/io5";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  useEffect(()=>{

  })
  return (
    <nav className="w-full bg-white h-14 border-b-[1px] border-b-black flex items-center px-10 absolute top-0 z-10 justify-between">
        <Link href={"/"} className='flex gap-2 items-center'>
        <span className='h-6 w-6 hover:animate-spin-slow'>
          <img src={ktglogo} alt="The logo of the brand KTG wears" />
        </span>
          <h3 className='text-base font-medium'>KTG</h3>
        </Link>
      
      <NavLink className='flex flex-row gap-10'>
        {navcomponent.map((items, index)=>(
          <ul key={index} className={`${isActive === items.title ? "border-b-2 border-b-black" : ""} text-sm text-black p-1 `}>
            <Link className='p-1' onClick={()=>{
              setIsActive(items.title)
            }}>{items.title}</Link>
          </ul>
        ))}
      </NavLink>
      <div className='text-sm flex items-center gap-3'>
          <Link>CART</Link>
          <span className='h-4 w-4 text-black font-medium cursor-pointer'><IoAddOutline className='h-full w-full' /></span>
      </div>
    </nav>
  )
}

export default Navbar