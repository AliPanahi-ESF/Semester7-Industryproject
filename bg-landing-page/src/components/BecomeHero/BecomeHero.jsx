import React, { useState } from 'react';
import './BecomeHero.css';
import $ from 'jquery';

const BecomeHero = () => {
  const [modifiedImage, setModifiedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsComplete(false);
  };

  const handleImageUpload = () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    setIsLoading(true);
    setIsComplete(false);

    $.ajax({
      url: 'http://localhost:5006/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        setModifiedImage(response.image);
        setIsLoading(false);
        setIsComplete(true);
      },
      error: function(error) {
        console.error('Error uploading image:', error);
        setIsLoading(false);
      }
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = modifiedImage;
    link.download = 'modified-image.png';
    link.click();
  };

  return (
    <div className='become-hero'>
      <h2 className='section-title'>Become a <br />Bierens Hero</h2>
      <div className='hero-section'>
        <div className='hero-image'>
          <img src='src/assets/BecomHeroPic.png' alt='Hero' />
        </div>
        <div className='upload-section'>
          {!modifiedImage && !isLoading ? (
            <div className='upload-box'>
              <h3 className='upload-title'>Upload Your Picture</h3>
              <p className='upload-description'>Become part of the Bierens Heroes by uploading your photo to receive a custom hero art style.
                Stand out as one of the heroes in our community!</p>
              <input type='file' accept='image/*' onChange={handleFileChange} />
              <button className='upload-button' onClick={handleImageUpload}>Upload</button>
            </div>
          ) : isLoading ? (
            <div className='upload-box'>
              <div className='loading-spinner'></div>
              <p className='upload-description'>Generating your hero image...</p>
            </div>
          ) : (
            <div className='uploaded-box'>
              <img src={modifiedImage} alt='Modified' />
              <button className='download-button' onClick={handleDownload}>Download</button>
              {isComplete && <p className='completion-message'>Your hero image is ready!</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BecomeHero;
