import React from 'react';
import styles from './Trainers.module.css'
import img1 from './imgs/trainer1.jpg'

function TrainerCard({
    imgSource = img1,
    name = 'John Anderson',
    specialize = 'Certified Personal Trainer'
}) {

    return(
        <div draggable='false' className={styles.trainerCard}>
            <img draggable='false' src={imgSource} alt="Trainer Profile Picture" />
            <h3 draggable='false' >{name}</h3>
            <h4 draggable='false' >{specialize}</h4>
            <p draggable='false' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum harum provident numquam? Debitis perferendis omnis eos alias. Ullam cumque maiores eum nostrum earum? Nemo repudiandae doloribus facere itaque omnis cumque.</p>
        </div>
    )
}

export default TrainerCard