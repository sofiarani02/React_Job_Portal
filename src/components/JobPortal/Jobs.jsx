import React from 'react';
import Nav from './Nav';
import { Typography, Grid, TextField, Card, CardContent , Button } from '@mui/material';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';



function Prepare() {
  const [jobs, setJobs] = React.useState([]); // State to store job data
  const [filter, setFilter] = React.useState('');

  // Sample job data for demonstration
  const initialJobs = [
    { 
      title: 'Software Engineer',
      category: 'Engineering',
      description: 'Develop software applications and systems.',
      salary: '$80,000 - $120,000',
      location: 'San Francisco, CA',
      company: 'Tech Co.' 
    },
    { 
      title: 'Marketing Executive',
      category: 'Marketing',
      description: 'Develop marketing strategies and campaigns.',
      salary: '$70,000 - $100,000',
      location: 'New York, NY',
      company: 'Marketing Agency' 
    },
    { 
      title: 'Accountant',
      category: 'Finance',
      description: 'Manage financial records and transactions.',
      salary: '$60,000 - $90,000',
      location: 'Chicago, IL',
      company: 'Accounting Firm' 
    },
    { 
      title: 'Graphic Designer',
      category: 'Design',
      description: 'Create visual concepts using computer software or by hand.',
      salary: '$50,000 - $80,000',
      location: 'Los Angeles, CA',
      company: 'Design Studio' 
    },
    { 
      title: 'Customer Support',
      category: 'Customer Service',
      description: 'Assist customers with inquiries, complaints,and troubleshooting.',
      salary: '$40,000 - $60,000',
      location: 'Houston, TX',
      company: 'E-commerce Company' 
    },
    { 
      title: 'Data Analyst',
      category: 'Data Analytics',
      description: 'Analyze data to provide insights and support decision-making.',
      salary: '$70,000 - $100,000',
      location: 'Seattle, WA',
      company: 'Data Analytics Firm' 
    },
    // { 
    //   title: 'Human Resources Manager',
    //   category: 'Human Resources',
    //   description: 'Oversee recruitment, training, and employee relations.',
    //   salary: '$80,000 - $110,000',
    //   location: 'Atlanta, GA',
    //   company: 'Corporation' 
    // },
    { 
      title: 'Sales Representative',
      category: 'Sales',
      description: 'Promote and sell products or services to customers.',
      salary: '$50,000 - $90,000',
      location: 'Miami, FL',
      company: 'Sales Company' 
    },
    { 
      title: 'Web Developer',
      category: 'Web Development',
      description: 'Build and maintain websites and web applications.',
      salary: '$60,000 - $100,000',
      location: 'Denver, CO',
      company: 'Web Development' 
     },
    { 
      title: 'Project Manager',
      category: 'Project Management',
      description: 'Plan and execute projects from initiation to completion.',
      salary: '$70,000 - $120,000',
      location: 'Boston, MA',
      company: 'Project Management Firm' 
    },
    // Add more job roles here
    // { 
    //   title: 'Job Title',
    //   category: 'Category',
    //   description: 'Job Description',
    //   salary: 'Salary Range',
    //   location: 'Location',
    //   company: 'Company Name' 
    // },
  ];

  React.useEffect(() => {
    // Initialize jobs with sample data
    setJobs(initialJobs);
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(filter.toLowerCase()));

  const sectionStyle = {
    padding: '40px',
    textAlign: 'center',
    color: 'black',
    paddingLeft:'100px',
  };

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px', 
  };

  return (
    <div style={sectionStyle}>
      <Nav />
    
      <div style={{ marginTop: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Jobs Portal
        </Typography>
        <TextField
          label="Filter by Job Title"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px' }}
          value={filter}
          onChange={handleFilterChange}
        />
        <Grid container spacing={3} justifyContent="center"  >
          {filteredJobs.map((job, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} >
              <Card variant="outlined" style={cardStyle}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {job.category}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {job.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Salary: {job.salary}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Location: {job.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Company: {job.company}
                  </Typography>
                  <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  <Link to="/apply" style={{ textDecoration: 'none', color: 'inherit' }} > Apply </Link>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div><br /><br />
        <div style={{marginLeft:'-290px', backgroundColor:'royalblue', width:'1405px', padding:'5px', marginBottom:'-100px', paddingLeft:'150px', color:'white'}}>All Rights Reserved | Copyrights 2024</div>
      </div>
  );
}

export default Prepare;
