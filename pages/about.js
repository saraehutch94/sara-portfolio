import NavPages from '../components/NavPages'
import Image from 'next/image'

function About() {
    return (
        <>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-screen grow flex flex-col justify-center items-center">
                    <div className="text-6xl text-navIconReg font-medium">about me</div>
                    <div className="flex justfy-center items-center w-10/12">
                        <div className="w-6/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className="photo">
                            <Image src="https://i.imgur.com/sNpTVEq.jpg" width="400px" height="400px" alt="photo of Sara" className="rounded-full border- border-8 border-navIconReg" responsive/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About