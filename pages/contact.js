import NavPages from '../components/NavPages'
import Meta from '../components/Meta'
import ContactForm from '../components/ContactForm'

function Contact() {
    return (
        <> 
            <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Contact'/>
            <NavPages />
            <div className="min-h-screen flex flex-col">
                <div className="h-full grow flex flex-col justify-center items-center">
                    <div className="text-6xl font-medium text-navIconReg mb-10">reach out</div>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Contact