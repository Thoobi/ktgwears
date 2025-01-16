import ktglogo from '../../../assets/ktg-logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="w-full bg-white h-14 border-b-[1px] border-b-black flex items-center px-10 absolute top-0 z-10 justify-between">
        <Link href={"/"} className='flex gap-2 items-center'>
        <span className='h-6 w-6 hover:animate-spin-slow'>
          <img src={ktglogo} alt="The logo of the brand KTG wears" />
        </span>
          <h3 className='text-base font-medium'>KTG</h3>
        </Link>
      
      <div>
        <ul className='flex gap-5 text-sm'>
          <Link className=''>SHOP</Link>
          <Link>COLLECTIONS</Link>
          <Link>ABOUT</Link>
        </ul>
      </div>
      <div>
        <ul className='text-sm'>
          <li>CART</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar