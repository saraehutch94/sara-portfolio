import NavPages from '../components/NavPages'
import Link from 'next/link'
import Image from 'next/image'

function About() {
    return (
        <>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-screen grow flex flex-col justify-center items-center">
                    <div className="flex justfy-center items-center">
                        <div className="w-8/12 space-y-3.5">
                            <div className="text-6xl text-navIconReg font-medium">about me</div>
                            <div className="text-white text-3xl">I am a Software Developer from Boston, MA</div>
                            <div className="text-white text-xl">I enjoy the challenges and brain-stimulation of coding. <br/>Being a part of an industry that is ever-changing and constantly evolving<br />blesses me with frequent opportunities to grow and learn new programming <br />skills. I wake up every day with new knowledge I hadn&apos;t known about the <br />previous day. I am very fond of front-end development, especially <span className="text-navIconReg">React</span>.</div>
                            <div className="text-white text-xl">I would also consider myself a music connoisseur (check out my <br/><span className="text-navIconReg">Sarify</span> project). Other pastimes of mine are cooking and enjoying nature.</div>
                            <div className="text-white text-xl">Connect with me on <span className="text-navIconReg">LinkedIn</span> and check out my code on <span className="text-navIconReg">GitHub</span> below!</div>
                            <div className="flex">
                                <a href="https://www.linkedin.com/in/sara-hutchinson/" target="_blank" rel="noreferrer"><div className="cursor-pointer"><Image src="https://i.imgur.com/ptiNN7E.png" height="44px" width="54px" alt="linkedin logo"/></div></a>
                                <a href="https://github.com/saraehutch94" target="_blank" rel="noreferrer"><div className="cursor-pointer"><Image src="https://i.imgur.com/4STVaVZ.png" height="44px" width="54px" alt="github logo"/></div></a>
                            </div>
                        </div>
                        <div className="photo">
                            <Image src="https://i.imgur.com/sNpTVEq.jpg" width="500px" height="500px" alt="photo of Sara" className="rounded-full" responsive/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About