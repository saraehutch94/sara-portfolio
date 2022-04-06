import NavPages from '../components/NavPages'
import Meta from '../components/Meta'
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
    return (
        <>
            <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Projects'/>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-full grow flex flex-col justify-center items-center space-y-14 mb-20">
                    <div className="text-6xl font-medium text-navIconReg mt-20 mb-5">projects</div>
                    <div className="flex flex-col space-y-14 justify-center items-center w-full">
                        <div className="h-80 w-10/12 flex space-x-8 bg-navDarkGreen border-2 border-navIconReg transition-height-width duration-0.25 ease-out hover:h-96 hover:w-11/12 group">
                            <div className="w-401.33 h-80 relative transition-height-width duration-0.25 ease-out group-hover:h-96 group-hover:w-475">
                                <Image src="https://i.imgur.com/Ojrc9f5.png?1" layout='fill' objectFit='fill' alt="first-project-screenshot"/>
                            </div>
                            <div className="flex flex-col justify-center space-y-5">
                                <div className="text-2xl text-navIconReg transition-font-size duration-0.25 ease-out font-medium group-hover:text-3xl">Marvel Mania</div>
                                <div className="text-lg w-700 text-white transition-font-size duration-0.25 ease-out group-hover:text-lg">With this search engine application, you can find you favorite Marvel characters along with a description about them and what stories they were involved in. When searching for a character, a request is made to the Marvel API to query for that character&apos;s information. </div>
                                <div className="flex space-x-5">
                                    <i className="devicon-html5-plain text-xl text-navIconReg transition-font-size duration-0.25 ease-out group-hover:text-2xl"></i>
                                    <i className="devicon-css3-plain text-xl text-navIconReg transition-font-size duration-0.25 ease-out group-hover:text-2xl"></i>
                                    <i className="devicon-javascript-plain text-xl text-navIconReg transition-font-size duration-0.25 ease-out group-hover:text-2xl"></i>
                                    <i className="devicon-jquery-plain text-xl text-navIconReg transition-font-size duration-0.25 ease-out group-hover:text-2xl"></i>
                                </div>
                                <div className="text-lg space-x-3 hidden transition-display duration-0.25 ease-out group-hover:flex">
                                    <a href="https://marvel-mania.netlify.app/" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Live Site</a>
                                    <div className="text-navIconReg font-medium">|</div>
                                    <a href="https://github.com/saraehutch94/GA-project-1" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="h-80 w-10/12 bg-navDarkGreen">second project</div>
                        <div className="h-80 w-10/12 bg-navDarkGreen">third project</div>
                        <div className="h-80 w-10/12 bg-navDarkGreen">fourth project</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects