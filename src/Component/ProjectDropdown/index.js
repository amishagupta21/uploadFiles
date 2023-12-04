import React from 'react'
import styles from "./index.module.css"
import dropdownIcon from "../../assests/icons/dropdownIcon.svg"
import notification from "../../assests/icons/notificationIcon.svg"
import questionIcon from "../../assests/icons/questionsIcon.svg"
import powerIcon from "../../assests/icons/powerButtonIcon.svg"

const ProjectDropdown = () => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <span>project:Club Mahindra</span>
        <img src={dropdownIcon} alt='dropdown' />
      </div>
      <div className={styles.supportContainer}>
        <img src={notification} alt='notification' />
        <div className={styles.supportdropdown}>
          <span>Support</span>
          <img src={dropdownIcon} alt='dropdown' />
        </div>
        <img src={questionIcon} alt='questionIcon'/>
        <img src={powerIcon} alt='powerIcon'/>
      </div>
    </div>
  )
}

export default ProjectDropdown
