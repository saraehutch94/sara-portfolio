import NavPages from '../components/NavPages'
import Link from 'next/link'
import Image from 'next/image'

function About() {
    return (
        <>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-screen grow flex flex-col justify-center items-center">
                    <div className="flex flex-col-reverse xl:flex-row justfy-center items-center xl:mt-0 md:mt-96 xs:mt-[300px] mt-[500px]">
                        <div className="xl:w-8/12 xl:text-left text-center space-y-3.5 mt-10 xl:mb-0 mb-10">
                            <div className="md:text-6xl text-5xl text-navIconReg font-medium">about me</div>
                            <div className="text-white md:text-3xl text-2xl">I am a Software Developer from Boston, MA</div>
                            <div className="text-white md:text-xl text-lg md:block hidden">I enjoy the challenges and brain-stimulation of coding.<br/>Being a part of an industry that is ever-changing and constantly evolving<br/>blesses me with frequent opportunities to grow and learn new programming<br/>skills. I wake up every day with new knowledge I hadn&apos;t known about the<br/>previous day. I am very fond of front-end development, especially <span className="text-navIconReg">React</span>.</div>
                            <div className="text-white text-lg md:hidden">I enjoy the challenges and brain-stimulation of coding. Being a part of an industry that is ever-changing and constantly evolving blesses me with frequent opportunities to grow and learn new programming skills. I wake up every day with new knowledge I hadn&apos;t known about the previous day. I am very fond of front-end development, especially <span className="text-navIconReg">React</span>.</div>
                            <div className="text-white md:text-xl text-lg md:block hidden">I would also consider myself a music connoisseur (check out my<br/><span className="text-navIconReg">Sarify</span> project). Other pastimes of mine are cooking and enjoying nature.</div>
                            <div className="text-white text-lg md:hidden">I would also consider myself a music connoisseur (check out my <span className="text-navIconReg">Sarify</span> project). Other pastimes of mine are cooking and enjoying nature.</div>
                            <div className="text-white md:text-xl text-lg">Connect with me on <span className="text-navIconReg">LinkedIn</span> and check out my code on <span className="text-navIconReg">GitHub</span> below!</div>
                            <div className="flex xl:justify-start justify-center">
                                <a href="https://www.linkedin.com/in/sara-hutchinson/" target="_blank" rel="noreferrer"><div className="cursor-pointer"><Image src="https://i.imgur.com/ptiNN7E.png" height="44px" width="54px" alt="linkedin logo"/></div></a>
                                <a href="https://github.com/saraehutch94" target="_blank" rel="noreferrer"><div className="cursor-pointer"><Image src="https://i.imgur.com/4STVaVZ.png" height="44px" width="54px" alt="github logo"/></div></a>
                            </div>
                        </div>
                        <div className="lg:block hidden">
                            <Image src="https://i.imgur.com/sNpTVEq.jpg" width="500px" height="500px" alt="photo of Sara" className="rounded-full" responsive/>
                        </div>
                        <div className="md:block lg:hidden hidden">
                            <Image src="https://i.imgur.com/sNpTVEq.jpg" width="400px" height="400px" alt="photo of Sara" className="rounded-full" responsive/>
                        </div>
                        <div className="sm:block md:hidden">
                            <Image src="https://i.imgur.com/sNpTVEq.jpg" width="350px" height="350px" alt="photo of Sara" className="rounded-full" responsive/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About