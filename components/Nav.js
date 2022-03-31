import Link from 'next/link'
import Image from 'next/image'

function Nav() {
    return (
        <nav className="bg-slate-600 h-14 w-full">
            <div className="flex sm: justify-end md:justify-center items-center h-full sm: space-x-10 md:space-x-20 mr-8">
                <Link href="/" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg></Link>
                <Link href="/about" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg></Link>
                <Link href="/projects" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></Link>
                <Link href="/findme" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg></Link>
                <Link href="/contact" passHref><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-green-500 hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" /></svg></Link>
            </div>
        </nav>
    )
}

export default Nav