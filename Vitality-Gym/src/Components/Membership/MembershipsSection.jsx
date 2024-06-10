import styles from './Membership.module.css'
import Membership from './Membership';

function Memberships() {
    const membershipPlans = [
        {
          name: 'Basic Plan',
          price: '$20/month',
          features: ['Access to gym', '1 free training session', 'Free Wi-Fi'],
        },
        {
          name: 'Standard Plan',
          price: '$40/month',
          features: ['Access to gym', '5 free training sessions', 'Free Wi-Fi', 'Access to pool'],
        },
        {
          name: 'Premium Plan',
          price: '$60/month',
          features: ['Access to gym', 'Unlimited training sessions', 'Free Wi-Fi', 'Access to pool', 'Sauna access'],
        },
      ];

    return(
        <section className={styles.membershipsSection} id='membership'>
            <h2 className={styles.title}>Memberships</h2>
            <div className={styles.planContainers}>
            {membershipPlans.map((plan, index) => (
                <Membership key={index} {...plan} />
                ))}
            </div>
        </section>
    );
}

export default Memberships