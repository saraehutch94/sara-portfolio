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
                      <div className={styles.intropara}>I am an innovative software engineer</div>
                      <div className={styles.intropara}>that focuses on the creation and implementation</div>
                      <div className={styles.intropara}>of user-friendly web applications. The</div>
                      <div className={styles.intropara}>meticulous person I am flourishes in</div>
                      <div className={styles.intropara}>any opportunity to make a user’s accessibility,</div>
                      <div className={styles.intropara}>navigation and experience while visiting an</div>
                      <div className={styles.intropara}>application as enjoyable as possible.</div>
                      <div className={styles.intropara}>My thought processes tend to be divergent,</div>
                      <div className={styles.intropara}>which allows me to offer unique perspectives</div>
                      <div className={styles.intropara}>and solutions.</div>
                      <div className={styles.introparaend}>Check out my work and reach out!</div>
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
