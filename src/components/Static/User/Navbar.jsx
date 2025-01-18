import { useState } from 'react';
import ktgimg from '../../../assets/ktg-text-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { navcomponent } from '../../../lib/navbar'
import { IoAddOutline } from "react-icons/io5";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  return (
      <nav className="w-full bg-white/[.98] border-b-[1px] border-b-black flex items-center px-10 py-3 fixed top-0 z-10 justify-between pt-5">
          <Link href={"/"} className='flex gap-2 items-center'>
            <span className='h-full w-full'>
              <img src={ktgimg} alt="The logo of the brand KTG wears" />
            </span>
          </Link>
        
        <NavLink className='flex flex-row gap-8'>
          {navcomponent.map((items, index)=>(
            <div key={index} className={`text-sm text-black font-medium group`}>
              <Link className='py-[2px] group relative overflow-hidden' onClick={()=>{
                setIsActive(items.title)
              }}>
                {isActive === items.title ? (`•${items.title}•`) : `${items.title}`}
                <span className="absolute bottom-0 left-0 w-0 h-[1.2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full hover:w-full"></span>
              </Link>
            </div>
          ))}
        </NavLink>
        <div className='text-sm text-black font-medium flex items-center gap-3'>
            <Link>CART</Link>
            <div className='flex gap-1 items-center cursor-pointer'>
              <span>MENU</span>
              <IoAddOutline className='text-black' size={20} />
            </div>
        </div>
      </nav>
  )
}

export default Navbar