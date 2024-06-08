import styles from './Home.module.css'
import backGroundImg from './assets/backgroundImg.jpg'

function Home() {

    return(
        <section className={styles.homeSection} id='home'>
            <h2 className={styles.engagingHeadline}>
                <span id={styles.noPain}>No Pain!</span> 
                <br /> <span id={styles.noGain}>No Gain!</span> 
                <br /> <span id={styles.shutUp}>Shut Up!</span>
                <br /> <span id={styles.andTrain}>and train!</span> 
            </h2>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis esse aliquam porro ipsa? Soluta omnis aut eligendi ipsam id molestiae nobis, inventore, officia tempore hic at magnam sapiente ipsa libero.</p>
                <a>Join Now</a>
            </div>
        </section>
    );
}

export default Home