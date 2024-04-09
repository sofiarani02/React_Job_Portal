import React from 'react';
import Nav from './Nav';
import { Typography, Grid, Button, Modal, Box, Paper, TextField, Snackbar } from '@mui/material';

function Practice() {
  const [openModal, setOpenModal] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: '',
    age: '',
    salary: '',
    phone: '+91',
  });

  const [formErrors, setFormErrors] = React.useState({
    name: '',
    age: '',
    salary: '',
    phone: '',
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    // Validate the input using regex
    switch (field) {
      case 'name':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          name: /^[a-zA-Z\s']{5,}$/.test(value) ? '' : 'Name should be at least 5 characters with alphabets',
        }));
        break;
      case 'age':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          age: /^\d{1,2}$/.test(value) ? '' : 'Invalid age',
        }));
        break;
      case 'salary':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          salary: /^\d+$/.test(value) ? '' : 'Salary should contain only numbers',
        }));
        break;
      case 'phone':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: /^\+91\d{10}$/.test(value) ? '' : 'Invalid phone number',
        }));
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    // Enable/disable the submit button based on form validity
    const isValid = Object.values(formErrors).every((error) => error === '') &&
      Object.values(formData).every(value => value !== ''); // Check for non-empty fields
    setIsSubmitDisabled(!isValid);
  }, [formErrors, formData]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate all fields
    const isValid = Object.values(formErrors).every((error) => error === '') &&
      Object.values(formData).every(value => value !== ''); // Check for non-empty fields

    if (isValid) {
      setOpenSnackbar(true);
      handleCloseModal();
    } else {
      // Handle validation errors
      console.log('Form validation failed');

      // Focus on the first field with an error
      const firstErrorField = Object.entries(formErrors).find(([key, value]) => value !== '');
      if (firstErrorField) {
        const [errorField] = firstErrorField;
        document.getElementById(errorField)?.focus();
      } else {
        // Focus on the first empty field
        const firstEmptyField = Object.entries(formData).find(([key, value]) => value === '');
        if (firstEmptyField) {
          const [emptyField] = firstEmptyField;
          document.getElementById(emptyField)?.focus();
        }
      }
    }
  };

  const sectionStyle = {
    padding: '50px',
    textAlign: 'center',
    color: 'black',
    paddingLeft: '220px',
    marginTop: '90px',
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    color: 'black',
  };

  const footerStyle = {
    textAlign: 'center',
    color: 'white',
    width: '1410px',
    marginLeft: '-250px',
    backgroundColor: 'royalBlue',
    marginBottom: '-145px',
    padding: '5px',
  };

  return (
    <div style={sectionStyle}>
      <Nav />
      <Typography variant="h3" gutterBottom>
        Practice and Improve Your Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Test Your Fluency
            </Typography>
            <Typography>
              Evaluate your language fluency with our interactive test. Practice speaking, listening, and understanding.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpenModal} style={{ marginTop: '20px' }}>
              Schedule for Fluency Test
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Mock Interviews
            </Typography>
            <Typography>
              Prepare for real job interviews by practicing with mock interviews and receiving feedback.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpenModal} style={{ marginTop: '20px' }}>
              Schedule a Session
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            Practice Session Registration
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={!!formErrors.name}
              helperText={formErrors.name}
              id="name"
            />
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleInputChange('age', e.target.value)}
              error={!!formErrors.age}
              helperText={formErrors.age}
              id="age"
            />
            <TextField
              label="Salary"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '10px' }}
              onChange={(e) => handleInputChange('salary', e.target.value)}
              error={!!formErrors.salary}
              helperText={formErrors.salary}
              id="salary"
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '20px' }}
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={!!formErrors.phone}
              helperText={formErrors.phone}
              id="phone"
            />
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitDisabled}>
              Register
            </Button>
          </form>
        </Box>
      </Modal>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Registration submitted successfully!"
      />
      <br /><br /><br /><br /><br />
      <div style={footerStyle}>
        All Rights Reserved | Copyrights 2024
      </div>
    </div>
  );
}

export default Practice;
