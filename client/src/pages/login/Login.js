import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@material-ui/core/TextField';
import SnapShot from '../../images/snapshot.jpg'

const LoginContainer = {
width: '100%', 


}

const LoginCard = {
width: '90%', 
margin: '100px auto', 
height: '600px', 

}

const LoginCardImage = {
    height: '600px',

}

const LoginCardContent = {


}


const HelloMoments = {
    marginTop: '50px'
}

const LoginCardActions = {
textAlign: 'center', 
justifyContent: 'space-evenly'

}

const loginTab = {
borderBottom: '2px solid grey'


}

const loginTitle = {
marginBottom: '20px'

}


const loginForm = {
    marginTop: '50px'
}


const forminputHeader = {
    fontSize: '50px'
}



const loginFormButton = {
    marginTop: '50px'
}


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  



const Login = () => {

    const formik = useFormik({
        initialValues: {
          email: 'foobar@example.com',
          password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });




  return (
    <>
    <Box>
    <Container sx={LoginContainer}>
    

    <Card sx={LoginCard}>
    <Row>
    <Col>
      <CardMedia
        component="img"
        alt="snapshot"
        image={SnapShot} 
        sx={LoginCardImage}
      />
      </Col>
      <Col>
      <CardContent sx={LoginCardContent}>
        <Typography 
        gutterBottom variant="h5" 
        component="div"
        sx={HelloMoments}>
          HelloMoments
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Share moments around the world with loved ones today. 
        </Typography>
      </CardContent>
      <CardActions sx={LoginCardActions}>
        <Typography size="small"
        sx={loginTab}>LOGIN</Typography>
        <Typography size="small">CREATE ACCOUNT</Typography>
      </CardActions>
      <CardContent sx={LoginCardContent}>
        <Typography 
        gutterBottom variant="h5" 
        component="div"
        sx={loginTitle}>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}
        sx={loginForm}
        >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={forminputHeader}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={forminputHeader}
        />
        <Button 
        color="primary" 
        variant="contained" 
        fullWidth type="submit"
        sx={loginFormButton}
        >
          Submit
        </Button>
      </form>

      </CardContent>
      </Col>
      </Row>
    </Card>
    
    </Container>
    </Box>
    </>
  )
}

export default Login