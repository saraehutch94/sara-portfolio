import NavPages from '../components/NavPages'
import Meta from '../components/Meta'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'

function Projects() {

    return (
        <>
            <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Projects'/>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-full grow flex flex-col justify-center items-center space-y-14  mb-20">
                    <div className="text-6xl font-medium text-navIconReg mt-20">projects</div>
                    <div className="flex flex-col space-y-14 justify-center items-center w-full">
                        <div className="h-80 w-10/12 bg-navDarkGreen border-2 border-navIconReg transition-height-width duration-0.25 ease-out hover:h-96 hover:w-11/12">
                            <Image src="https://i.imgur.com/Ojrc9f5.png?1" width="375px" height="320px" alt="first-project-screenshot"/>
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