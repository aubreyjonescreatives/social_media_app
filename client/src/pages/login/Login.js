import * as React from 'react';
import { Box, Button, TextField, FormHelperText } from '@mui/material'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SnapShot from '../../images/snapshot.jpg';
import { useNavigate } from 'react-router-dom';
import { useIdentityContext } from 'react-netlify-identity-gotrue';

const loginContainer = {
width: '100%', 


}

const loginCard = {
width: '90%', 
margin: '50px auto', 
height: '700px', 

}

const loginCardImage = {
    height: '700px',

}

const loginCardContent = {


}


const HelloMoments = {
    marginTop: '50px'
}

const loginCardActions = {
textAlign: 'center', 
justifyContent: 'space-evenly'

}

const loginTab = {
borderBottom: '2px solid grey'


}

const loginTitle = {
marginBottom: '20px'

}


// const loginForm = {
//     marginTop: '50px'
// }


// const forminputHeader = {
//     fontSize: '50px'
// }



// const loginFormButton = {
//     marginTop: '50px'
// }





const createaccountTab = {
 //   borderBottom: '2px solid grey'
    
}




const Login = (props) => {

    const identity = useIdentityContext()
    const navigate = useNavigate()
    
    const handleClose = () => {
      navigate('/userdashboard')
      console.log("Should close now...")
    
    }


  return (
    <>
    <Box>
    <Container sx={loginContainer}>
    

    <Card sx={loginCard}>
    <Row>
    <Col>
      <CardMedia
        component="img"
        alt="snapshot"
        image={SnapShot} 
        sx={loginCardImage}
      />
      </Col>
      <Col>
      <CardContent sx={loginCardContent}>
        <Typography 
        gutterBottom variant="h5" 
        component="div"
        sx={HelloMoments}>
          Hello Moments
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Share moments around the world with loved ones today. 
        </Typography>
      </CardContent>
      <CardActions sx={loginCardActions}>
        <Typography size="small"
        sx={loginTab}>LOGIN</Typography>
        <Typography size="small"
        sx={createaccountTab}
        >CREATE ACCOUNT</Typography>
      </CardActions>
      <CardContent sx={loginCardContent}>
        <Typography 
        gutterBottom variant="h5" 
        component="div"
        sx={loginTitle}>
          Login
        </Typography>
      
      
      
        <Formik 
        initialValues={{
            email: "example@example.com", 
            password: "Pass123", 
    
        }}
        validationSchema={
            Yup.object().shape({
                email: Yup.string()
                .email('Must be a valid email.')
                .max(255)
                .required('Email is required.'),
                password: Yup.string()
                .min(6, 'Must include at least 6 characters.')
                .max(25, 'We KNOW your password is not more than 25 characters long.')
                .required('A password is required.')
            })}
        onSubmit={ async (value, {setErrors, setStatus, setSubmitting}) => {
        try {
           
            setStatus({success: true})
            setSubmitting(false)
            await identity.login({
              email: value.email, 
              password: value.password
            }).then(() => {
              handleClose()
              console.log('Submit Successful!')
            })
        } catch (err) {
            console.error(err)
            setStatus({success: false})
            setErrors({ submit: err.message })
            setSubmitting(false)
        } finally {
          handleClose()
        }
        }}
        >
        {({errors, 
            values, 
            handleSubmit, 
            handleBlur, 
            handleChange, 
            isSubmitting, 
            touched,
            }) => (
    <form noValidate onSubmit={handleSubmit}>
    

      <TextField
      error={Boolean(touched.email && errors.email)}
      fullWidth
      helperText={touched.email && errors.email}
      label="Email"
      margin="normal" 
      name="email"
      type="email"
      variant="outlined"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.email}
      
      />
      <TextField
      error={Boolean(touched.password && errors.password)}
       fullWidth
       helperText={touched.password && errors.password}
       label="Password"
       margin="normal" 
       name="password"
       type="password"
       variant="outlined"
       onBlur={handleBlur}
       onChange={handleChange}
       value={values.password}
      
      
      />
       
      {errors.submit && (
          <Box sx={{
              mt: 3
          }}>
        <FormHelperText error>
          {errors.submit}
        </FormHelperText>
        </Box>
      )}
      <Button
      fullWidth 
      size="large"
      color="primary"
      bgcolor="primary"
      disabled={isSubmitting}
      type="submit"
      >LOGIN</Button>
      </form>
        )}
      </Formik>
    
    
    
    
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