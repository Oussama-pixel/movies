import Image from 'next/image'
import React from 'react'
import styles from '../../styles/MovieItem.module.scss'


export default function MovieItem() {
  return (
    <div>
        <div className={styles.movieListItem}>
          <Image src="/images/1.jpeg" layout="fixed"   height={280} width={370} className={styles.movieListItemImg} alt="movie list item image"/>
          <span className={styles.movieListItemTitle}>Her</span>
          <p className={styles.movieListItemDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi porro illum ratione iure sint perspiciatis atque, nemo itaque quasi similique quidem corrupti necessitatibus blanditiis aliquam obcaecati excepturi quo temporibus maxime!
          </p>
          <button className={styles.movieListItemButton}>Watch</button>
        </div>
    </div>
  )
}
