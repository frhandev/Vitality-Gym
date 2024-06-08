import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

function Header() {
    //change background color of nav bar when scrolled down
    const [scrolled, setScrolled] = useState(styles.headerScrolled);
    const Scrolling = () => {
        if(window.scrollY == 0) {
            setScrolled('');
        }else {
            setScrolled(styles.headerScrolled);
        }
    };

    window.addEventListener("scroll", Scrolling);

    //responsive navbar
    const [active, setActive] = useState(styles.navLinksContainer);
    const navToggle = () => {
        if(styles.navLinksContainer == active){
            setActive(styles.navLinksContainer + ' ' + styles.activeNavLinksContainer);
        }else {
            setActive(styles.navLinksContainer);
        }
    };


    const xMark = <FontAwesomeIcon icon={faX} />;
    const hamburgerMenu = <FontAwesomeIcon icon={faBars} />;

    return(
        <header className={scrolled}>
            <a href="#home" className={styles.logo}>Vitality Gym</a>
            <button onClick={navToggle} className={styles.hamburgerMenu}>
                {hamburgerMenu}
            </button>
            <nav className={active}>
                <a onClick={navToggle} className={styles.navElement + ' ' + styles.xMark }> {xMark} </a>
                <a href="#home" className={styles.navElement}>Home</a>
                <a href="#" className={styles.navElement}>About</a>
                <a href="#" className={styles.navElement}>Classes</a>
                <a href="#" className={styles.navElement}>Trainers</a>
                <a href="#" className={styles.navElement}>Membership</a>
                <a href="#" className={styles.navElement}>Contact</a>
            </nav>
        </header>
    );
}

export default Header