import React from 'react'
import style from './Footer.module.scss'
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
        <h3>Copyright ©2024 All rights reserved | This template is made with <FaRegHeart /> by Colorlib</h3>
    </div>
  )
}

export default Footer