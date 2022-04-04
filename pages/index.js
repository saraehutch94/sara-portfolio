import Meta from '../components/Meta'
import NavHome from '../components/NavHome'
import Computer from '../components/Computer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
        <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H> - Home'/>
        <NavHome />
        <div className={styles.flex}>
          <div className={styles.main}>
            <div className={styles.flexcontent}>
              <div className={styles.welcomecontent}>
                <div className={styles.wholeintrotext}>
                  <div className="flex flex-col space-y-2">
                    <div className={styles.introtext}>welcome</div>
                    <div className={styles.introparawrapper}>
                      <div className={styles.intropara}>I am a software developer based</div>
                      <div className={styles.intropara}>out of Boston, MA. Check out my</div>
                      <div className={styles.intropara}>work above and reach out for</div>
                      <div className={styles.intropara}>inquiries!</div>
                    </div>
                  </div>
                </div>
              </div>
              <Computer />
            </div>
          </div>
        </div>
    </>
  )
}
