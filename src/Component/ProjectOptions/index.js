import React from 'react'
import styles from "./index.module.css"

const ProjectOptions = () => {
  return (
    <>
    <div className={styles.optionContainer}>
      <span>Edit Project Details</span>
      <span>Seats</span>
      <span>Users</span>
      <span>Chat & Tags</span>
      <span>Custom</span>
    </div>
    <div className={styles.divideline}>
    </div>
    </>
  )
}

export default ProjectOptions
