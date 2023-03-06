import MenuItem from './MenuItem';
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
  return (
    // this div for all header
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      {/* this div for menu on the --> left side */}
      <div className='flex'>
        <MenuItem 
          title="HOME" 
          address="/" 
          Icon={AiFillHome}
        />
        <MenuItem 
          title="ABOUT" 
          address="/about" 
          Icon={AiFillInfoCircle}
        />
      </div>
      {/* this div for logo on the --> right side */}
      <div className=''>
        <Link href="/">
          <h2 className="text-2xl">
            {/* I am using two span because they have diffrent style */}
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
            <span className='text-xl hidden sm:inline'>clone</span>  
          </h2> 
        </Link>
      </div> 
    </div>
  );
}


// in NextJs13 all components and pages are serverside by ddefault
// if I need client side, I should use client keyword**

