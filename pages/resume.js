import NavPages from '../components/NavPages'
import Meta from '../components/Meta'

function Resume() {

    return (
        <>
            <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Resume'/>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-full grow flex flex-col justify-center items-center">
                <div className="text-6xl font-medium text-navIconReg mt-20 mb-10">resume</div>
                <div className="mb-16">
                    <iframe src="https://drive.google.com/file/d/1xIhKHvHJ3xwl5DICTvMu8G-HHg4M7ilp/preview" width="640" height="830" allow="autoplay"></iframe>
                </div>
                </div>
            </div>
        </>
    )
}

export default Resume