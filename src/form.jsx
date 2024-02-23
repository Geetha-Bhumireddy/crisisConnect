// DisasterReportForm.jsx
import React, { useState } from 'react';
import i18n from './inialiazer.jsx'; 
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  InputAdornment,
} from '@mui/material';

const DisasterReportForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    photos: null,
    photoURL: '',
    name: '',
    disasterType: '',
    mobileNumber: '',
    location: '',
    primaryNeeds: '',
    timeOfHit: '',
    peopleAffected: '',
  });

  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photos: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dojr7jo0k/image/upload';
    const formDataCloudinary = new FormData();
    formDataCloudinary.append('file', formData.photos);
    formDataCloudinary.append('upload_preset', 'ml_default');

    try {
      const cloudinaryResponse = await fetch(cloudinaryURL, {
        method: 'POST',
        body: formDataCloudinary,
      });

      const cloudinaryData = await cloudinaryResponse.json();

      const updatedFormData = {
        ...formData,
        photoURL: cloudinaryData.secure_url,
      };

      setFormData(updatedFormData);

      // Log the updated FormData along with the image URL
      console.log('Form Data with Image URL:', updatedFormData);

      // If you want to return the result
      return updatedFormData;

    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setCurrentLanguage(selectedLanguage);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={2}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="language-select-label">{t('language')}</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={currentLanguage}
            onChange={handleLanguageChange}
          >
            <MenuItem value="en">{t('english')}</MenuItem>
            <MenuItem value="hi">{t('hindi')}</MenuItem>
            <MenuItem value="te">{t('telugu')}</MenuItem>
            <MenuItem value="ta">{t('tamil')}</MenuItem>
            <MenuItem value="bn">{t('bengali')}</MenuItem> 
          </Select>
        </FormControl>
      </Box>
      <Box mt={2} p={3} boxShadow={3}>
        <Typography variant="h5" gutterBottom>
          {t('disasterReportTitle')}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t('name')}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label={t('disasterType')}
            type="text"
            name="disasterType"
            value={formData.disasterType}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label={t('mobileNumber')}
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
            InputProps={{
              inputProps: {
                pattern: "[0-9]*",
              },
            }}
          />
          <TextField
            label={t('location')}
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label={t('primaryNeeds')}
            multiline
            name="primaryNeeds"
            value={formData.primaryNeeds}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label={t('timeOfHit')}
            type="datetime-local"
            name="timeOfHit"
            value={formData.timeOfHit}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="text" color="primary" size="small">
                    {t('currentTime')}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={t('peopleAffected')}
            type="number"
            name="peopleAffected"
            value={formData.peopleAffected}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <label htmlFor="file-upload">
            <Input
              accept="image/*"
              id="file-upload"
              type="file"
              name="photos"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              required
            />
            <Button
              component="span"
              variant="contained"
              style={{ backgroundColor: 'green', marginTop: '10px', width: '100%' }}
            >
              {t('chooseFile')}
            </Button>
          </label>
          <Button type="submit" variant="contained" style={{ backgroundColor: 'green', marginTop: '10px', width: '100%' }}>
            {t('submitReport')}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default DisasterReportForm;
