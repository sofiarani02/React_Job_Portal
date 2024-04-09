// ... (imports remain unchanged)
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Nav from './Nav';

const steps = ['Personal Info', 'Educational Info', 'Job-related Info'];

export default function Apply() {
  const footerStyle = {
    textAlign: 'center',
    color: 'white',
    width: '1415px',
    marginLeft: '-30px',
    backgroundColor: 'royalBlue',
    marginBottom: '-150px',
    padding: '5px'
  };

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '+91', // Added default country code
    gender: '',
  });
  const [educationalInfo, setEducationalInfo] = useState({
    graduationYear: '',
    college: '',
    degree: '',
    percentage: '',
  });
  const [jobRelatedInfo, setJobRelatedInfo] = useState({
    relocation: false,
    resume: null,
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    graduationYear: '',
    college: '',
    degree: '',
    percentage: '',
    resume: '',
  });

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setPersonalInfo({
      name: '',
      email: '',
      phone: '+91', // Reset to default country code
      gender: '',
    });
    setEducationalInfo({
      graduationYear: '',
      college: '',
      degree: '',
      percentage: '',
    });
    setJobRelatedInfo({
      relocation: false,
      resume: null,
    });
    setErrorMessages({
      name: '',
      email: '',
      phone: '',
      gender: '',
      graduationYear: '',
      college: '',
      degree: '',
      percentage: '',
      resume: '',
    });
  };

  const handleFinish = () => {
    // Handle the form submission logic here
    console.log('Form submitted successfully!');
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <TextField
              label="Name"
              fullWidth
              value={personalInfo.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              margin="normal"
              error={errorMessages.name !== ''}
              helperText={errorMessages.name}
            />
            <TextField
              label="Email"
              fullWidth
              value={personalInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              margin="normal"
              error={errorMessages.email !== ''}
              helperText={errorMessages.email}
            />
            <TextField
              label="Phone"
              fullWidth
              value={personalInfo.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              margin="normal"
              error={errorMessages.phone !== ''}
              helperText={errorMessages.phone}
            />
            <TextField
              label="Gender"
              fullWidth
              value={personalInfo.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              margin="normal"
              error={errorMessages.gender !== ''}
              helperText={errorMessages.gender}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <TextField
              label="Graduation Year"
              fullWidth
              value={educationalInfo.graduationYear}
              onChange={(e) => handleInputChange('graduationYear', e.target.value)}
              margin="normal"
              error={errorMessages.graduationYear !== ''}
              helperText={errorMessages.graduationYear}
            />
            <TextField
              label="College"
              fullWidth
              value={educationalInfo.college}
              onChange={(e) => handleInputChange('college', e.target.value)}
              margin="normal"
              error={errorMessages.college !== ''}
              helperText={errorMessages.college}
            />
            <TextField
              label="Degree"
              fullWidth
              value={educationalInfo.degree}
              onChange={(e) => handleInputChange('degree', e.target.value)}
              margin="normal"
              error={errorMessages.degree !== ''}
              helperText={errorMessages.degree}
            />
            <TextField
              label="Percentage"
              fullWidth
              value={educationalInfo.percentage}
              onChange={(e) => handleInputChange('percentage', e.target.value)}
              margin="normal"
              error={errorMessages.percentage !== ''}
              helperText={errorMessages.percentage}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={jobRelatedInfo.relocation}
                  onChange={(e) => handleCheckboxChange('relocation', e.target.checked)}
                />
              }
              label="Willing to relocate"
            />
            <Typography color="textPrimary" variant="subtitle2" gutterBottom>
              Upload your resume
            </Typography>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e.target.files[0])}
            />
            {jobRelatedInfo.resume === null && (
              <Typography color="error" variant="caption">
                {errorMessages.resume}
              </Typography>
            )}
          </div>
        );
      default:
        return 'Application Sent Successfully';
    }
  };

  const handleInputChange = (field, value) => {
    switch (activeStep) {
      case 0:
        setPersonalInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
        validatePersonalInfo(field, value);
        break;
      case 1:
        setEducationalInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
        validateEducationalInfo(field, value);
        break;
      case 2:
        // Handle job-related info changes if needed
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (field, checked) => {
    setJobRelatedInfo((prevInfo) => ({ ...prevInfo, [field]: checked }));
  };

  const handleFileChange = (file) => {
    setJobRelatedInfo((prevInfo) => ({ ...prevInfo, resume: file }));
    validateResume(file);
  };

  const validatePersonalInfo = (field, value) => {
    switch (field) {
      case 'name':
        setErrorMessages((prevErrors) => ({ ...prevErrors, name: validateName(value) }));
        break;
      case 'email':
        setErrorMessages((prevErrors) => ({ ...prevErrors, email: validateEmail(value) }));
        break;
      case 'phone':
        setErrorMessages((prevErrors) => ({ ...prevErrors, phone: validatePhone(value) }));
        break;
      case 'gender':
        setErrorMessages((prevErrors) => ({ ...prevErrors, gender: validateGender(value) }));
        break;
      default:
        break;
    }
  };

  const validateEducationalInfo = (field, value) => {
    switch (field) {
      case 'graduationYear':
        setErrorMessages((prevErrors) => ({ ...prevErrors, graduationYear: validateGraduationYear(value) }));
        break;
      case 'college':
        setErrorMessages((prevErrors) => ({ ...prevErrors, college: validateCollege(value) }));
        break;
      case 'degree':
        setErrorMessages((prevErrors) => ({ ...prevErrors, degree: validateDegree(value) }));
        break;
      case 'percentage':
        setErrorMessages((prevErrors) => ({ ...prevErrors, percentage: validatePercentage(value) }));
        break;
      default:
        break;
    }
  };

  const validateResume = (file) => {
    setErrorMessages((prevErrors) => ({ ...prevErrors, resume: file ? '' : 'Upload your resume (required)' }));
  };

  const validateName = (name) => {
    return name.trim() !== '' && !/^[a-zA-Z\s']{5,}$/.test(name)
      ? 'Name should be at least 5 characters with alphabets'
      : '';
  };

  const validateEmail = (email) => {
    return email.trim() !== '' && !/^\S+@\S+\.\S+$/.test(email) ? 'Invalid email address' : '';
  };

  const validatePhone = (phone) => {
    return phone.trim() !== '' && !/^\+?\d{10}$/.test(phone) ? 'Invalid phone number' : '';
  };

  const validateGender = (gender) => {
    return gender.trim() !== '' && !/^(male|female)$/i.test(gender) ? 'Gender should be either "male" or "female"' : '';
  };

  const validateGraduationYear = (year) => {
    return year.trim() !== '' && !/^\d{4}$/.test(year) ? 'Graduation year should be a 4-digit number' : '';
  };

  const validateCollege = (college) => {
    return college.trim() !== '' && !/^[a-zA-Z\s']+$/.test(college) ? 'Only alphabets are allowed for college' : '';
  };

  const validateDegree = (degree) => {
    return degree.trim() !== '' && !/^[a-zA-Z\s']+$/.test(degree) ? 'Only alphabets are allowed for degree' : '';
  };

  const validatePercentage = (percentage) => {
    return percentage.trim() !== '' && !/^\d+$/.test(percentage) ? 'Percentage should contain only numbers' : '';
  };

  React.useEffect(() => {
    // Enable/disable the "Finish" button based on form validity
    const isValid = validateForm();
    setIsSubmitDisabled(!isValid);
  }, [personalInfo, educationalInfo, jobRelatedInfo]);

  const validateForm = () => {
    switch (activeStep) {
      case 0:
        return (
          errorMessages.name === '' &&
          errorMessages.email === '' &&
          errorMessages.phone === '' &&
          errorMessages.gender === ''
        );
      case 1:
        return (
          errorMessages.graduationYear === '' &&
          errorMessages.college === '' &&
          errorMessages.degree === '' &&
          errorMessages.percentage === ''
        );
      case 2:
        return (
          jobRelatedInfo.relocation !== null &&
          jobRelatedInfo.resume !== null &&
          errorMessages.resume === ''
        );
      default:
        return false;
    }
  };

  return (
    <div>
      <Nav />
      <Box sx={{ width: '800px', color: 'royalBlue', paddingLeft: '280px', paddingTop: '5px' }}>
        <h1 style={{ color: 'royalBlue', marginTop: '-90px' }}>Application Form</h1>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} disabled={!validateForm()}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
        <Box sx={{ mt: 3 }}>{getStepContent(activeStep)}</Box>
      </Box>
      <div style={footerStyle}>
        All Rights Reserved | Copyrights 2024
      </div>
    </div>
  );
}
