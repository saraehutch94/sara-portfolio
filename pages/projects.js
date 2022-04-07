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
                        <div className="2md:h-80 2md:w-10/12 flex 2md:flex-row flex-col space-y-5 2md:space-x-8 2md:justify-start 2md:items-center justify-center items-center bg-navDarkGreen border-2 border-navIconReg 2md:transition-height-width 2md:duration-0.25 2md:ease-out 2md:hover:h-96 2md:hover:w-11/12 group 2md:pb-0 pb-10">
                            <div className="1xl:w-401.33 2md:w-375 w-386 h-80 relative 1xs:transition-height-width 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:h-96 1xl:group-hover:w-485 1xs:group-hover:w-435">
                                <Image src="https://i.imgur.com/Ojrc9f5.png?1" layout='fill' objectFit='fill' alt="first-project-screenshot"/>
                            </div>
                            <div className="flex flex-col 2md:text-left text-center justify-center space-y-5">
                                <div className="text-2xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out font-medium 1xs:group-hover:text-3xl">Marvel Mania</div>
                                <div className="text-lg 1xl:w-700 2lg:w-600 2.0lg:w-550 1lg:w-500 1.0lg:w-450 2md:w-400 w-350 text-white transition-font-size duration-0.25 ease-out group-hover:text-lg">With this search engine application, you can find you favorite Marvel characters along with a description about them and what stories they were involved in. When searching for a character, a request is made to the Marvel API to query for that character&apos;s information. </div>
                                <div className="flex 2md:justify-start justify-center space-x-5">
                                    <i className="devicon-html5-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-css3-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-javascript-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-jquery-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                </div>
                                <div className="flex 2md:text-lg text-xl 2md:justify-start justify-center space-x-3 1xs:hidden 1xs:transition-display 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:flex">
                                    <a href="https://marvel-mania.netlify.app/" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Live Site</a>
                                    <div className="text-navIconReg font-medium">|</div>
                                    <a href="https://github.com/saraehutch94/GA-project-1" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="2md:h-80 2md:w-10/12 flex 2md:flex-row flex-col space-y-5 2md:space-x-8 2md:justify-start 2md:items-center justify-center items-center bg-navDarkGreen border-2 border-navIconReg 2md:transition-height-width 2md:duration-0.25 2md:ease-out 2md:hover:h-96 2md:hover:w-11/12 group 2md:pb-0 pb-10">
                            <div className="1xl:w-401.33 2md:w-375 w-386 h-80 relative 1xs:transition-height-width 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:h-96 1xl:group-hover:w-485 1xs:group-hover:w-435">
                                <Image src="https://i.imgur.com/4FbhA7h.jpg?2" layout='fill' objectFit='fill' alt="first-project-screenshot"/>
                            </div>
                            <div className="flex flex-col 2md:text-left text-center justify-center space-y-5">
                                <div className="text-2xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out font-medium 1xs:group-hover:text-3xl">Vino Italiano</div>
                                <div className="text-lg 1xl:w-700 2lg:w-600 2.0lg:w-550 1lg:w-500 1.0lg:w-450 2md:w-400 w-350 text-white transition-font-size duration-0.25 ease-out group-hover:text-lg">Vino Italiano is a full CRUD application where you can view the most popular Italian wines on the market. This application utilizes Bcrypt for authentication, and if a user is authorized they can add favorite wines to their dashboard.</div>
                                <div className="flex 2md:justify-start justify-center space-x-5">
                                    <i className="devicon-express-original text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-nodejs-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-mongodb-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-html5-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-css3-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-javascript-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                </div>
                                <div className="flex 2md:text-lg text-xl 2md:justify-start justify-center space-x-3 1xs:hidden 1xs:transition-display 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:flex">
                                    <a href="https://vino-italiano.herokuapp.com/vino-italiano" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Live Site</a>
                                    <div className="text-navIconReg font-medium">|</div>
                                    <a href="https://github.com/saraehutch94/vino-italiano" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Repository</a>
                                </div>
                            </div>
                        </div>
                        <div className="2md:h-80 2md:w-10/12 flex 2md:flex-row flex-col space-y-5 2md:space-x-8 2md:justify-start 2md:items-center justify-center items-center bg-navDarkGreen border-2 border-navIconReg 2md:transition-height-width 2md:duration-0.25 2md:ease-out 2md:hover:h-96 2md:hover:w-11/12 group 2md:pb-0 pb-10">
                            <div className="1xl:w-401.33 2md:w-375 w-386 h-80 relative 1xs:transition-height-width 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:h-96 1xl:group-hover:w-485 1xs:group-hover:w-435">
                                <Image src="https://i.imgur.com/54TRH0F.png?1" layout='fill' objectFit='fill' alt="first-project-screenshot"/>
                            </div>
                            <div className="flex flex-col 2md:text-left text-center justify-center space-y-5">
                                <div className="text-2xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out font-medium 1xs:group-hover:text-3xl">Sarify</div>
                                <div className="text-lg 1xl:w-700 2lg:w-600 2.0lg:w-550 1lg:w-500 1.0lg:w-450 2md:w-400 w-350 text-white transition-font-size duration-0.25 ease-out group-hover:text-lg">This MERN-stack application queries from the Sarify Heroku API to source the data presented on the front-end. This application utilizes Firebase for authentication, and you cannot complete the create, update and delete portions of CRUD without being authorized.</div>
                                <div className="flex 2md:justify-start justify-center space-x-5">
                                    <i className="devicon-react-original text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-express-original text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-nodejs-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-mongodb-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-html5-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-css3-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-javascript-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex 2md:text-lg text-xl 2md:justify-start justify-center space-x-3 1xs:hidden 1xs:transition-display 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:flex">
                                        <a href="https://sarify.netlify.app/" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Live Site</a>
                                        <div className="text-navIconReg font-medium">|</div>
                                        <a href="https://github.com/saraehutch94/sarify-frontend" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Front End Repo</a>
                                    </div>
                                    <div className="flex 2md:text-lg text-xl 2md:justify-start justify-center space-x-3 1xs:hidden 1xs:transition-display 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:flex">
                                        <a href="https://sarify-backend.herokuapp.com/sarify/tracks/" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Sarify API</a>
                                        <div className="text-navIconReg font-medium">|</div>
                                        <a href="https://github.com/saraehutch94/sarify-backend" target="_blank" rel="noreferrer" className="text-navIconReg font-medium 1lg:mb-0 mb-5">Back End Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="2md:h-80 2md:w-10/12 flex 2md:flex-row flex-col space-y-5 2md:space-x-8 2md:justify-start 2md:items-center justify-center items-center bg-navDarkGreen border-2 border-navIconReg 2md:transition-height-width 2md:duration-0.25 2md:ease-out 2md:hover:h-96 2md:hover:w-11/12 group 2md:pb-0 pb-10">
                            <div className="1xl:w-401.33 2md:w-375 w-386 h-80 relative 1xs:transition-height-width 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:h-96 1xl:group-hover:w-485 1xs:group-hover:w-435">
                                <Image src="https://i.imgur.com/32dbd30.png?1" layout='fill' objectFit='fill' alt="first-project-screenshot"/>
                            </div>
                            <div className="flex flex-col 2md:text-left text-center justify-center space-y-5">
                                <div className="text-2xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out font-medium 1xs:group-hover:text-3xl">DS<sup>2</sup></div>
                                <div className="text-lg 1xl:w-700 2lg:w-600 2.0lg:w-550 1lg:w-500 1.0lg:w-450 2md:w-400 w-350 text-white transition-font-size duration-0.25 ease-out group-hover:text-lg">DS<sup>2</sup> is a full stack and full CRUD Django application that was created by myself and two other developers. We used Genius API to query for lyrics, songs and artists. You have the ability to view, add, update and delete ratings if you are authorized.</div>
                                <div className="flex 2md:justify-start justify-center space-x-5">
                                    <i className="devicon-django-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-python-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-postgresql-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-html5-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-css3-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                    <i className="devicon-javascript-plain text-2xl 1xs:text-xl text-navIconReg 1xs:transition-font-size 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:text-2xl"></i>
                                </div>
                                <div className="flex 2md:text-lg text-xl 2md:justify-start justify-center space-x-3 1xs:hidden 1xs:transition-display 1xs:duration-0.25 1xs:ease-out 1xs:group-hover:flex">
                                    <a href="https://dsquared2.herokuapp.com/" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Live Site</a>
                                    <div className="text-navIconReg font-medium">|</div>
                                    <a href="https://github.com/saraehutch94/DSsquared" target="_blank" rel="noreferrer" className="text-navIconReg font-medium">Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects