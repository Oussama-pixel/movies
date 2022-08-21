import Image from 'next/image'
import React from 'react'
import { BsFillCaretDownFill, BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import styles from '../../styles/Navbar.module.scss'


export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
              <h1 className={styles.logo}>
                Flakes
              </h1>
            </div>
            <div className={styles.menuContainer}>
              <ul className={styles.menuList}>
                <li className={`${styles.menuListItem} ${styles.active}`}>
                  Home
                </li>
                <li className={styles.menuListItem}>
                  Movies
                </li>
                <li className={styles.menuListItem}>
                  Series 
                </li>
                <li className={styles.menuListItem}>
                  Popular
                </li>
                <li className={styles.menuListItem}>
                  Trends
                </li>
              </ul>
            </div>
            <div className={styles.profileContainer}>
              <Image src="/images/profile.jpg" width={32} height={32} className={styles.profilePicture} alt=""/>
              <div className={styles.profileTextContainer}>
                <span className={styles.profileText}>Profile</span>
                <BsFillCaretDownFill/>
              </div>
              <div className={styles.darkModeToggle}>
                <BsMoonFill className={styles.toggleIcon}/>
                <BsFillSunFill className={styles.toggleIcon}/>
                <div className={styles.toggleBall}>

                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
