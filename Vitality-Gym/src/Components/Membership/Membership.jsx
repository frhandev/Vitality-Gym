import styles from './Membership.module.css'

function Membership({
    name,
    price,
    features
}) {

    return(
        <div className={styles.membershipCard}>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
            </ul>
        </div>
    );
}

export default Membership