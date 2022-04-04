import NavPages from '../components/NavPages'
import Meta from '../components/Meta'

function Projects() {
    return (
        <>
            <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Projects'/>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-screen grow flex flex-col justify-center items-center">
                    <div className="text-6xl font-medium text-navIconReg">projects</div>
                    <div className="flex">
                        <div className="">first project</div>
                        <div className="">second project</div>
                        <div className="">third project</div>
                        <div className="">fourth project</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects