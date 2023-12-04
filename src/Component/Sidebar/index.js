import React from 'react'
import styles from "./index.module.css"
import logo from "../../assests/images/logo.svg"
import projectIcon from "../../assests/icons/projectIcon.svg"
import userIcon from "../../assests/icons/userIcon.svg"
import chatIcon from "../../assests/icons/chatsIcon.svg"

const Sidebar = () => {
  return (
    <div className={styles.sideContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logoIcon'/>
      </div>
      <div className={styles.tabsOptions}> 
          <div className={styles.project}>
            <img src={projectIcon} alt='projectIcon'/>
            <span>Projects</span>
          </div>
          <div className={styles.user}>
            <img src={userIcon} alt='userIcon'/>
            <span>Users</span>
          </div>
          <div className={styles.chats}>
            <img src={chatIcon} alt='chatIcon'/>
            <span>Chats & Tags</span>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
