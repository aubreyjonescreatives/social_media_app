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
import { useHistory } from 'react-router-dom';
import { useIdentityContext } from 'react-netlify-identity-gotrue';

const createaccountContainer = {
width: '100%', 


}

const createaccountCard = {
width: '90%', 
margin: '50px auto', 
height: '700px', 

}

const createaccountCardImage = {
    height: '700px',

}

const createaccountCardContent = {


}


const HelloMoments = {
    marginTop: '50px'
}

const createaccountCardActions = {
textAlign: 'center', 
justifyContent: 'space-evenly'

}

const loginTab = {
//borderBottom: '2px solid grey'


}

const createaccountTitle = {
marginBottom: '20px'

}


const createaccountForm = {
    marginTop: '50px'
}


const forminputHeader = {
    fontSize: '50px'
}



const createaccountFormButton = {
    marginTop: '50px'
}





const createaccountTab = {
    borderBottom: '2px solid grey'
    
}




const CreateAccount = () => {

    const identity = useIdentityContext()
    const history = useHistory()
    
    const handleClose = () => {
      history.push('/Confirm')
      console.log("Should close now...")
    
    }


  return (
    <>
    <Box>
    <Container sx={createaccountContainer}>
    

    <Card sx={createaccountCard}>
    <Row>
    <Col>
      <CardMedia
        component="img"
        alt="snapshot"
        image={SnapShot} 
        sx={createaccountCardImage}
      />
      </Col>
      <Col>
      <CardContent sx={createaccountCardContent}>
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
      <CardActions sx={createaccountCardActions}>
        <Typography size="small"
        sx={loginTab}>LOGIN</Typography>
        <Typography size="small"
        sx={createaccountTab}
        >CREATE ACCOUNT</Typography>
      </CardActions>
      <CardContent sx={createaccountCardContent}>
        <Typography 
        gutterBottom variant="h5" 
        component="div"
        sx={createaccountTitle}>
          Create Account
        </Typography>
      
      
      
        <Formik 
        initialValues={{
            name: "Aubrey Jones",
            email: "example@example.com", 
            password: "Pass123", 
    
        }}
        validationSchema={
            Yup.object().shape({
              name: Yup.string()
              .min(4)
              .required('Name is required.'),
                email: Yup.string()
                .email('Must be a valid email.')
                .max(255)
                .required('Email is required.'),
                password: Yup.string()
                .min(6, 'Must include at least 6 characters.')
                .max(25, 'We KNOW your password isn' + 't more than 25 characters long.')
                .required('A password is required.')
            })}
        onSubmit={ async (value, {setErrors, setStatus, setSubmitting}) => {
        try {
           
            setStatus({success: true})
            setSubmitting(false)
            await identity.signup({
              email: value.email, password: value.password, user_metadata: {
                full_name: value.name
              }
            }).then(() => {
              handleClose()
              console.log('Submit Successful!')
            })
        } catch (err) {
            console.error(err)
            setStatus({success: false})
            setErrors({ submit: err.message })
            setSubmitting(false)
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
      error={Boolean(touched.name && errors.name)}
      fullWidth
      helperText={touched.name && errors.name}
      label="Name"
      margin="normal" 
      name="Name"
      type="text"
      variant="outlined"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.name}
      
      />
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
       <TextField
      error={Boolean(touched.password && errors.password)}
       fullWidth
       helperText={touched.password && errors.password}
       label="Confirm Password"
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
      >CREATE ACCOUNT</Button>
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

export default CreateAccount