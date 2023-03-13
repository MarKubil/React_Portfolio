import React from "react";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
// import emailjs from 'emailjs-com';
// import Swal from "sweetalert2";


// const SERVICE_ID = "service_rye4slk";
// const TEMPLATE_ID = "template_egif5cf";
// const USER_ID = "Mt_6xXh2-Z7XBqn1j";

// const handleOnSubmit = (e) => {
//   e.preventDefault();
//   console.log(e.target)
//   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
//     .then((result) => {
//       console.log(result.text);
//       Swal.fire({
//         icon: "success",
//         title: "Message Sent Successfully"
//       })
//     }, (error) => {
//       console.log(error.text);
//       Swal.fire({
//         icon: "error",
//         title: "Ooops, something went wrong",
//         text: error.text,
//       })
//     });

//   e.target.reset()
// }
function Blog() {

  return (
    <div className="content">
      {/* <h1 className="text-center pt-5">Contact me</h1>
      <div className="App">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div> */}
    </div>
  );
}

export default Blog;
