import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
        <Meta keywords="software developer, software engineer, web developer, programming, programmer, React, Boston, S3H" description="My name is Sara Hutchinson, a full-stack software developer based out of the Greater Boston area of Massachusetts. Check out my work and reach out!" title='<S3H>'/>
        <div className={styles.flex}>
          <div className={styles.main}>
            <div className={styles.computerwrapper}>
              <div className={styles.wholecomputer}>
                <div className={styles.monitortop}>
                  <div className={styles.monitortext}>
                      <div className={styles.animation1}>const S3H = &#123;</div>
                      <div className={styles.animation2}>firstName: &quot;Sara&quot;,</div>
                      <div className={styles.animation3}>lastName: &quot;Hutchinson&quot;,</div>
                      <div className={styles.animation4}>location: &quot;Boston, MA&quot;,</div>
                      <div className={styles.animation5}>isA: &quot;Software Developer&quot;,</div>
                      <div className={styles.animation6}>message: &quot;Welcome to my Portfolio!&quot;,</div>
                      <div className={styles.animation7}>&#125;;</div>
                  </div>
              </div>
              <div className={styles.monitorbottom}>
                  <div className={styles.logo}>&lt;S3H&gt;</div>
              </div>
              <div className={styles.monitorneck}></div>
              <div className={styles.monitorstand}></div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
