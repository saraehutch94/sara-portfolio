import NavPages from '../components/NavPages'
import Meta from '../components/Meta'

function Resume() {

    return (
        <>
            <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Resume'/>
            <NavPages />
            <div className="min-h-screen flex flex-col font-sans">
                <div className="h-full grow flex flex-col justify-center items-center">
                <div className="text-6xl font-medium text-navIconReg mt-28 mb-7">resume</div>
                <div className="text-white mb-10"><a href="https://drive.google.com/file/d/1_1fok4zZuPElYNpuKLky8GDT_9Uk6qmm/view" download="sara-h-resume" target="_blank" rel="noreferrer" className="text-navIconReg hover:navIconHover">Download PDF here</a></div>
                <div className="border-2 border-white 2md:w-8/12 w-11/12 mb-20">
                    <div className="text-center text-white mb-9 mt-10">
                        <h1>Sara Hutchinson</h1>
                        <h3>Full-Stack Software Engineer</h3>
                        <h4>Greater Boston | 617-750-5143</h4>
                        <div className="mb-8">
                            <h4><a href="mailto:sarae.hutch@gmail.com" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">Email</a> | <a href="https://github.com/saraehutch94" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">GitHub</a> | <a href="https://www.linkedin.com/in/sara-hutchinson/" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">LinkedIn</a></h4>
                        </div>
                        <p className="mx-10">I am an innovative software engineer that focuses on the creation and implementation of user-friendly web applications. The meticulous person I am flourishes in any opportunity to make a user’s accessibility, navigation and experience while visiting an application as enjoyable as possible. My thought processes tend to be divergent, which allows me to offer unique perspectives and solutions.</p>
                    </div>
                    <div className="text-white mx-10">
                        <div className="mb-9">
                            <h4 className="mb-3 text-navIconReg">RELEVANT SKILLS</h4>
                            <div className="mb-1"><span className="font-semibold">Languages:</span> HTML | CSS | JavaScript | Python | NoSQL | SQL</div>
                            <div className="mb-1"><span className="font-semibold">Frameworks and Platforms:</span> Node.js | Express | MongoDB | React | Django</div>
                            <div className="mb-1"><span className="font-semibold">Libraries:</span> jQuery | Mongoose | React Router</div>
                            <div className="mb-1"><span className="font-semibold">Other:</span> AJAX | EJS | RESTful routing practices | Document Object Model (DOM) | CRUD applications | JSX | Firebase Auth | GitHub | Netlify | Heroku | Algorithms | Data Structures | Responsive Design</div>
                        </div>
                        <div className="mb-9">
                            <h4 className="mb-3 text-navIconReg">EXPERIENCE</h4>
                            <div className="mb-8">
                                <div><span className="font-semibold">General Assembly</span> | Software Engineer Immersive Fellow</div>
                                <div className="mb-2">September 2021 – April 2022</div>
                                <ul>
                                    <li className="mb-1 ml-3">Created projects and completed coding exercises using a multitude of languages, frameworks, and libraries</li>
                                    <li className="mb-1 ml-3">Created full-stack web applications using recursive algorithms and web forms</li>
                                    <li className="mb-1 ml-3">Leveraged debugging strategies to ensure program integrity</li>
                                    <li className="mb-1 ml-3">Plan, wrote, tested, and deployed full-stack applications leveraging third-party APIs, building out my personal portfolio, including:</li>
                                    <li className="mb-1 ml-8"><span className="font-semibold">Marvel Mania</span> (<a href="https://github.com/saraehutch94/GA-project-1" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">GitHub</a> | <a href="https://marvel-mania.netlify.app/" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">Netlify</a>) – Front-end web application built with HTML, CSS and JavaScript, querying the Marvel API</li>
                                    <li className="mb-1 ml-8"><span className="font-semibold">Vino Italiano</span> (<a href="https://github.com/saraehutch94/vino-italiano" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">GitHub</a> | <a href="https://vino-italiano.herokuapp.com/vino-italiano" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">Heroku</a>) – Full-CRUD back-end web application built with Node.js, MongoDB, Mongoose, Express and Bcrypt</li>
                                    <li className="mb-1 ml-8"><span className="font-semibold">Sarify</span> (Front-end: <a href="https://github.com/saraehutch94/sarify-frontend" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">GitHub</a> | <a href="https://sarify.netlify.app/" target="_blank" rel="noreferrer" className="text-navIconReg hover:navIconHover">Netlify</a> | Back-end: <a href="https://github.com/saraehutch94/sarify-backend" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">GitHub</a> | <a href="https://sarify-backend.herokuapp.com/sarify/tracks/" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">Heroku</a>) – MERN-stack web application built using MongoDB, Express, React, Node.js, and Mongoose</li>
                                    <li className="mb-1 ml-8"><span className="font-semibold">DS<sup>2</sup></span> (<a href="https://github.com/saraehutch94/DSsquared" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">GitHub</a> | <a href="https://dsquared2.herokuapp.com/" target="_blank" rel="noreferrer" className="text-navIconReg hover:text-navIconHover">Heroku</a>) – Full-stack Django application built with Django, Python and PostgreSQL, querying the LyricsGenius API</li>
                                </ul>
                            </div>
                            <div className="mb-2">
                                <div className="font-semibold">STUPEFYE, LLC.</div>
                                <div>Management Assistant</div>
                                <div className="mb-2">September 2021 – April 2022</div>
                                <ul className="mb-6">
                                    <li className="mb-1 ml-3">Work closely with artists to elevate their image and brand awareness through creating promotional material and increasing artist social media presence, resulting in an increased artist following and fanbase</li>
                                    <li className="mb-1 ml-3">Implemented social media plans curated for each individual artist by creating lists of content that will be represented in each post (music video teasers, behind the scenes clips, photo shoot content), creating captivating captions for each post to catch the user’s eye and give them more information about the content, and scheduling posts in advance by day and time</li>
                                    <li className="mb-1 ml-3">Planning and executing Live @ Series: a sequence of hip-hop and R&B shows in cities around the U.S. curated with our artist roster as well as local creatives, catered and in respect to social distancing guidelines and regulations</li>
                                    <li className="mb-1 ml-3">Planning and implementation of artist content ideas: music, videos, interviews, merchandise, and other projects</li>
                                </ul>
                                <div>Brand Relations Coordinator</div>
                                <div className="mb-2">February 2020 – November 2020 </div>
                                <ul>
                                    <li className="mb-1 ml-3">Communication and outreach to press outlets, producers, target audiences, and related organizations pertaining to each individual artist under the artist roster</li>
                                    <li className="mb-1 ml-3">Production, promotion, and marketing pertaining to curated and executed events</li>
                                    <li className="mb-1 ml-3">Assistance in coordinating and securing company gatherings for special events</li>
                                    <li className="mb-1 ml-3">Creation of relationships with online magazines, newspapers, and related media outlets</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-9">
                        <h4 className="mb-3 text-navIconReg">EDUCATION</h4>
                            <div className="mb-10">
                                <div className="font-semibold">General Assembly</div>
                                <div>September 2021 - April 2022</div>
                                <div>Certificate: Computer Software Engineering</div>
                            </div>
                            <div className="mb-8">
                                <div className="font-semibold">General Assembly</div>
                                <div>September 2013 - May 2017</div>
                                <div>Bachelor&apos;s of Health Sciences</div>
                                <div>Cumulative GPA: 3.59</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume