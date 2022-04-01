import Link from 'next/link'
import LogoNav from './LogoNav'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

function Nav() {

    const [mobMenuState, setMobMenuState] = useState(false);

    const changeMobMenuState = () => {
        setMobMenuState(!mobMenuState)
    }

    return (
        <>
        <nav className={styles.navfull}>
            <div className="hidden md:flex md:justify-center items-center h-full lg:space-x-20 space-x-10">
                <Link href="/" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg></Link>
                <Link href="/about" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg></Link>
                <Link href='/tech' passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></Link>
                <Link href="/projects" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></Link>
                <Link href="/contact" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" /></svg></Link>
            </div>
            <div className="md:hidden flex h-full items-center mr-4">
                <div className="ml-4"><LogoNav /></div>
                <svg xmlns="http://www.w3.org/2000/svg"  onClick={changeMobMenuState} className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
        </nav>
        <div className={mobMenuState ? "flex flex-col w-full bg-slate-700 text-xl" : "hidden"}>
            <Link href="/" passHref><div className="flex justify-center items-center cursor-pointer text-green-500 hover:bg-slate-500 space-x-2 py-2" onClick={changeMobMenuState}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg><div>Home</div></div></Link>
            <Link href="/about" passHref><div className="flex justify-center items-center cursor-pointer text-green-500 hover:bg-slate-500 space-x-2 py-2" onClick={changeMobMenuState}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg><div>About</div></div></Link>
            <Link href='/tech' passHref><div className="flex justify-center items-center cursor-pointer text-green-500 hover:bg-slate-500 space-x-2 py-2" onClick={changeMobMenuState}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg><div>Tech Stack</div></div></Link>
            <Link href="/projects" passHref><div className="flex justify-center items-center cursor-pointer text-green-500 hover:bg-slate-500 space-x-2 py-2" onClick={changeMobMenuState}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg><div>Projects</div></div></Link>
            <Link href="/contact" passHref><div className="flex justify-center items-center cursor-pointer text-green-500 hover:bg-slate-500 space-x-2 py-2" onClick={changeMobMenuState}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" /></svg><div>Contact</div></div></Link>
        </div>
        </>
    )
}

export default Nav