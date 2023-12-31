import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProvider from "./AuthProvider";

type Props = {};

const Navbar = (props: Props) => {
  const session = {};
  // const session = null;

  return ( 
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Image 
            src="/logo.svg"
            width={115}
            height={43}
            alt="Flexibble"
          />
        <ul className="xl:flex hidden text-small gap-7" >
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key} >
              {link.text}
            </Link > 
          ))}
        </ul>
      </div> 
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto

            <Link href="/create-project">
              Share your work
            </Link>
          </>
        ) : (
          <AuthProvider />
        )
        }
 
      </div>
    </nav>
  );
};

export default Navbar;
