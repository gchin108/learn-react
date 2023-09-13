import Image from 'next/image';
import React from 'react'
import logo from "@/public/assets/Images/logo512.png"
import { Codystar } from 'next/font/google';
import styles from "./reactQuiz.module.css"

const codyStar = Codystar({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header className="flex items-center gap-6 w-full justify-center mb-20 ">
      <Image src={logo} alt="React logo" width={100} height={100} className='absolute left-0'/>
      <h1 className={`${codyStar.className} text-7xl`}>The React Quiz</h1>
    </header>
  );
}

