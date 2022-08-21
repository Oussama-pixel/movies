import React from 'react'
import {BsSearch,BsFillBookmarkCheckFill} from 'react-icons/bs'
import {ImHome} from 'react-icons/im'
import {FaUsers,FaHourglassEnd} from 'react-icons/fa'
import {CgScreen} from 'react-icons/cg'
import {MdShoppingCart} from 'react-icons/md'
import styles from '../../styles/Sidebar.module.scss'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <BsSearch className={styles.leftMenuIcon}/>
        <ImHome className={styles.leftMenuIcon}/>
        <FaUsers className={styles.leftMenuIcon}/>
        <BsFillBookmarkCheckFill className={styles.leftMenuIcon}/>
        <CgScreen className={styles.leftMenuIcon}/>
        <FaHourglassEnd className={styles.leftMenuIcon}/>
        <MdShoppingCart className={styles.leftMenuIcon}/>
    </div>
  )
}
