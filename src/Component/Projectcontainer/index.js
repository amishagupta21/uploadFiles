import React, { useState } from 'react'
import styles from "./index.module.css"
import ProjectDropdown from '../ProjectDropdown'
import ProjectOptions from '../ProjectOptions'
import addFile from "../../assests/icons/addIcon.svg"
import search from "../../assests/icons/searchIcon.svg"
import eyeIcon from "../../assests/icons/eyeIcon.svg"
import editIcon from "../../assests/icons/editIcon.svg"
import calender from "../../assests/icons/calenderIcon.svg"
import randomImage from "../../assests/images/DummyImage.svg"

const ProjectContainer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setFileError('Only JPG and PNG file types are allowed.');
        return;
      }

      // Check file size
      const maxSize = 500 * 1024; // 500 KB
      if (file.size > maxSize) {
        setFileError('File size should not exceed 500 KB.');
        return;
      }

      setFileError('');
      setSelectedFile(file);
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };
  return (
    <div className={styles.projectContainer}>
      <ProjectDropdown />
      <ProjectOptions />
      <div className={styles.offersContainer}>
        <div className={styles.uploadContainer}>
          <span>Create a custom Offer</span>
          <div className={styles.uploadFile}>
            <img
              src={addFile}
              alt="addFile"
              onClick={() => document.getElementById('fileInput').click()}
            />
            <p>Upload a cover photo of offer</p>
            <p>Only JPG, PNG file types (Max 500kb)</p>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {fileError && <p className={styles.error}>{fileError}</p>}
          </div>
          <div className={styles.typeContainer}>
            <span>Type</span>
            <div className={styles.type}>
              <span>Package</span>
              <span>Pricing</span>
              <span>Discount</span>
            </div>
          </div>
          <div className={styles.titlebar}>
            <div className={styles.titleContainer}>
              <span>Title</span>
              <div className={styles.title}>
                <span>10% OFF</span>
              </div>
            </div>
            <div className={styles.subtitleContainer}>
              <span>Subtitle</span>
              <div className={styles.subtitle}>
                <span>Off15kFeb</span>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <span>Description</span>
            <div className={styles.descriptionBar}>
              <p>Make a small deposit of ₹500 as a confirmation and avail ₹5000 discount in final booking.</p>
            </div>
          </div>
          <button className={styles.createOrder}>Create Offer</button>
        </div>
        <div className={styles.manageOfferContainer}>
          <span>Manage Offers</span>
          <div className={styles.productInfoContainer}>
            <span>Packages (3)</span>
            <span>Pricings (2)</span>
            <span>Offers (15)</span>
          </div>
          <div className={styles.searchBar}>
            <img src={search} alt='search' />
            <span>Search for Offers...</span>
          </div>
          <div className={styles.offerResult}>
            {selectedFile ? (
              <>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="selectedImage"
                style={{ width: '100px', height: '100px' }}
              />
            
            </>
            ) : (
              <>
                <img src={randomImage} alt="randomImage" />
                <div className={styles.content}>
                  <span>win iphone 11 pro</span>
                  <p>You’ve got an Iphone 11 Pro with our membership. Make your payment now to avail the offer.</p>
                </div>
              </>
            )}

            <div className={styles.icons}>
              <img src={eyeIcon} alt="eyeIcon" style={{ width: '20px', height: '20px' }} />
              <img src={editIcon} alt="editIcon" style={{ width: '20px', height: '20px' }} />
              <img src={calender} alt="calender" style={{ width: '20px', height: '20px' }} onClick={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
