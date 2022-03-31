import styles from '../styles/Computer.module.css'
import Logo from './Logo'

function Computer() {
    return (
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
                    <Logo />
                </div>
                <div className={styles.monitorneck}></div>
                <div className={styles.monitorstand}></div>
                </div>
            </div>
    )
}

export default Computer