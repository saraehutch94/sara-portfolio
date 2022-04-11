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
                <div className="1sm:w-628 00xs:w-550 w-310 1sm:h-830 00xs:h-752 h-400 mb-16">
                    <iframe src="https://drive.google.com/file/d/1RyfaPaSDzgQ8TyTFupEq_UolC_wlMSS-/preview" width="100%" height="100%" allow="autoplay"></iframe>
                </div>
                </div>
            </div>
        </>
    )
}

export default Resume