import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Typography, Grid, Button, Drawer, Box, Paper, TextField, Snackbar } from '@mui/material';

function HiringChallenge() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [challengeDetails, setChallengeDetails] = useState({
    companyName: 'Tech Solutions Inc.',
    description: 'Exciting opportunity to join a dynamic team in the field of technology.',
    rounds: 'Technical Interview, Coding Challenge, HR Interview',
    assessmentType: 'Mixed: MCQ and Coding',
    duration: '120 minutes',
    startTime: new Date('2024-04-03T09:00:00'), // Updated to February 29, 2024
  });

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const currentTime = new Date();
    const timeDifference = challengeDetails.startTime - currentTime;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [challengeDetails.startTime]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    collegeName: '',
    degree: '',
    specialization: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    collegeName: false,
    degree: false,
    specialization: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    setFormErrors({
      ...formErrors,
      [field]: false,
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Regular expressions for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    Object.entries(formData).forEach(([field, value]) => {
      if (!value.trim()) {
        errors[field] = true;
        isValid = false;
      } else if (field === 'email' && !emailRegex.test(value)) {
        errors[field] = true;
        isValid = false;
      } else {
        errors[field] = false;
      }
    });

    setFormErrors(errors);

    return isValid;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setOpenSnackbar(true);
      handleCloseDrawer();
    } else {
      // Find the first field with an error and focus it
      const firstErrorField = Object.keys(formErrors).find((field) => formErrors[field]);
      const firstErrorElement = document.getElementById(firstErrorField);

      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    }
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const sectionStyle = {
    padding: '50px',
    textAlign: 'center',
    color: 'black',
    paddingLeft: '220px',
  };

  const drawerStyle = {
    width: '300px',
    flexShrink: 0,
  };

  const drawerPaperStyle = {
    width: '500px',
    boxSizing: 'border-box',
    padding: '20px',
    textAlign: 'center',
    color: 'black',
  };

  const footerStyle = {
    textAlign: 'center',
    color: 'white',
    width: '1390px',
    marginLeft: '-250px',
    backgroundColor: 'royalBlue',
    marginBottom: '-150px',
    padding: '5px',
  };

  return (
    <div style={sectionStyle}>
      <Nav />
      <Typography variant="h3" gutterBottom marginLeft="-80px">
        Hiring Challenge Details
      </Typography>
      <Grid container spacing={3} justifyContent="center" width="1300px" marginLeft="-200px">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              {challengeDetails.companyName} Hiring Challenge
            </Typography>
            <Typography>{challengeDetails.description}</Typography>
            <Typography>
              <strong>Rounds:</strong> {challengeDetails.rounds}
            </Typography>
            <Typography>
              <strong>Type of Assessment:</strong> {challengeDetails.assessmentType}
            </Typography>
            <Typography>
              <strong>Duration:</strong> {challengeDetails.duration}
            </Typography>
            <Typography>
              <strong>Challenge Start Time:</strong> {challengeDetails.startTime.toLocaleString()}
            </Typography>
            <Typography>
              <strong>Time Remaining:</strong>{' '}
              {`${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, ${timeRemaining.seconds} seconds`}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpenDrawer} style={{ marginTop: '20px' }}>
              Register for Challenge
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseDrawer}
        style={drawerStyle}
        PaperProps={{ style: drawerPaperStyle }}
      >
        <Typography variant="h6" gutterBottom>
          Challenge Registration
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '10px' }}
            error={formErrors.name}
            helperText={formErrors.name && 'Name is required'}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '10px' }}
            error={formErrors.email}
            helperText={formErrors.email && 'Enter a valid email address'}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <TextField
            id="collegeName"
            label="College Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '10px' }}
            error={formErrors.collegeName}
            helperText={formErrors.collegeName && 'College name is required'}
            onChange={(e) => handleInputChange('collegeName', e.target.value)}
          />
          <TextField
            id="degree"
            label="Degree"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '10px' }}
            error={formErrors.degree}
            helperText={formErrors.degree && 'Degree is required'}
            onChange={(e) => handleInputChange('degree', e.target.value)}
          />
          <TextField
            id="specialization"
            label="Specialization"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
            error={formErrors.specialization}
            helperText={formErrors.specialization && 'Specialization is required'}
            onChange={(e) => handleInputChange('specialization', e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </Drawer>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Registration submitted successfully!"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={footerStyle}>All Rights Reserved | Copyrights 2024</div>
    </div>
  );
}

export default HiringChallenge;
