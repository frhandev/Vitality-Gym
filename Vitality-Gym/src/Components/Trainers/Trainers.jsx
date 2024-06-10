import styles from './Trainers.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React from 'react';
import TrainerCard from './TrainerCard'
import img1 from './imgs/trainer1.jpg'
import img2 from './imgs/trainer2.jpg'
import img3 from './imgs/trainer3.jpg'
import img4 from './imgs/trainer4.jpg'
import img5 from './imgs/trainer5.jpg'
import CustomArrow from './CustomArrow';

function Trainers() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    const cards = [
        {
          title: "John Anderson",
          description: "Certified Personal Trainer",
          imageUrl: img1,
        },
        {
          title: "Michael Harris",
          description: "Strength and Conditioning Coach",
          imageUrl: img2,
        },
        {
          title: "David Martinez",
          description: "Spin and Cardiovascular Training Expert",
          imageUrl: img3,
        },
        {
          title: "James Miller",
          description: "HIIT Specialist",
          imageUrl: img4,
        },
        {
          title: "Robert Wilson",
          description: "Pilates and Flexibility Coach",
          imageUrl: img5,
        },
      ];


    return(
        <section className={styles.trainersSection} id='trainers'>
            <h2 className={styles.title}>Trainers</h2>
            <Slider {...settings} className={styles.trainerCardContainers + ' ' + 'card-slider'}>
                {
                    cards.map((card, index) => (
                        <TrainerCard 
                            key={index} 
                            imgSource={card.imageUrl}
                            name={card.title}
                            specialize={card.description}
                        />
                    ))
                }
                
            </Slider>
        </section>
    )
}

export default Trainers