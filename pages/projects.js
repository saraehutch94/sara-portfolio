import NavPages from '../components/NavPages'
import Meta from '../components/Meta'

function Projects() {
    return (
        <>
            <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Projects'/>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-full grow flex flex-col justify-center items-center space-y-14  mb-20">
                    <div className="text-6xl font-medium text-navIconReg mt-20">projects</div>
                    <div className="flex flex-col space-y-14 justify-center items-center w-full">
                        <div className="h-80 w-10/12 bg-navDarkGreen">first project</div>
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