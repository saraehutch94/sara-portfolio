import NavPages from '../components/NavPages'

function About() {
    return (
        <>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-screen grow flex flex-col justify-center items-center">
                    <div className="text-6xl text-navIconReg font-medium">about me</div>
                </div>
            </div>
        </>
    )
}

export default About