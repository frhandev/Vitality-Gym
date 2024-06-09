import styles from './About.module.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

function About() {

    return(
        <section id='about' className={styles.about}>
            <h2 className={styles.title}>About Vitality Gym</h2>
            <div className={styles.aboutContainer + ' ' + styles.containers}>
                <div className={styles.aboutInnerContainer + ' ' + styles.innerContainers}>
                    <h3 className={styles.welcome}>Welcome to <span>Vitality Gym</span>, where your fitness journey begins!</h3>
                    <p className={styles.aboutVitalityGym}>At <span>Vitality Gym</span>, we believe in the power of a healthy lifestyle and the positive impact it has on both the body and mind. Our mission is to provide a comprehensive fitness experience that empowers our members to achieve their health and wellness goals.</p>
                </div>
                <img className={styles.stockImg} src={img1} alt="Somone Training" />
            </div>

            <div className={styles.whyChooseUsContainer + ' ' + styles.containers}>
                <img className={styles.stockImg2} src={img2} alt="Somone Training" />
                <div className={styles.whyChooseUsInnerContainer + ' ' + styles.innerContainers}>
                    <h3 className={styles.whyChooseUsTitle}>Why Choose <span>Vitality Gym</span>?</h3>
                    <ul>
                        <li><strong>State-of-the-Art Facilities:</strong> Our gym is equipped with the latest fitness technology and modern amenities to ensure a comfortable and efficient workout experience.</li>
                        <li><strong>Expert Trainers:</strong> Our team of certified trainers are dedicated to helping you reach your fitness goals. With personalized training programs and expert guidance, you are in good hands.</li>
                        <li><strong>Diverse Classes:</strong> From high-intensity interval training (HIIT) to calming yoga sessions, we offer a wide range of classes to suit all fitness levels and interests.</li>
                        <li><strong>Community Atmosphere:</strong> Join a community of like-minded individuals who are supportive and motivated to achieve their fitness goals together.</li>
                        <li><strong>Flexible Membership Plans:</strong> We offer a variety of membership plans designed to fit different needs and budgets, ensuring everyone has access to quality fitness resources.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.ourNewTrainingProgram + ' ' + styles.containers}>
                <div className={styles.ourNewTrainingProgramContainer + ' ' + styles.innerContainers}>
                    <h3 className={styles.ourNewTrainingProgram}>Our New Training Program</h3>
                    <p>We are excited to introduce our new training program, designed to push your limits and help you achieve unprecedented results. Whether you're looking to lose weight, build muscle, or improve overall fitness, our program offers:</p>
                    <ul>
                        <li><strong>Customized Workouts:</strong>Tailored to meet your specific fitness goals and preferences.</li>
                        <li><strong>Nutritional Guidance: </strong>Comprehensive advice to complement your training and support your overall health.</li>
                        <li><strong>Progress Tracking:</strong>Regular assessments to track your progress and adjust your program as needed.</li>
                    </ul>
                </div>
                <img className={styles.stockImg3} src={img3} alt="Somone Training" />
            </div>
        </section>
    );
}

export default About