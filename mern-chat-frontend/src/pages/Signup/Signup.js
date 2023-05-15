import React, { useState } from 'react'
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Signup.css";
import botImg from '../../assets/bot.jpeg'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  //Image upload states
  const [image, setImage] = useState("");
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // validate img (png, jpg)
  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048578) {
      return alert('Max file size is 1mb');
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage(){
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', '17bcejcu');
  }

  async function handleSignup (e) {
    e.preventDefault();
    if(!image) return alert('Please upload your profile picture');
    const url = await uploadImage(image);
    console.log(url);
  }

  return (
    <Container>
      <Row>
        <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
          {/* form signup */}
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className='text-center' >Create account</h1>

            {/* Box of image profile */}
            <div className='signup-profile-pic__container'>
              <img src={imagePreview || botImg} className="signup-profile-pic" />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              {/* change image profile */}
              <input type="file" id='image_upload' hidden accept='image/png image/jpg' onChange={validateImg} />
            </div>

            {/* name */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {/* email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {/* password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create account
            </Button>

            {/* preview login */}
            <div className='py-4'>
              <p className='text-content'>
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>

        <Col md={5} className='signup__bg'></Col>
      </Row>
    </Container >
  );
}

export default Signup;