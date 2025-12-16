import React from 'react'
import FormValidation from './Form Validation'

const Contact = () => {
  return (
    <div className='contact'>
        <div>
    <h5>Contact</h5>
    </div>
    <div><address style={{fontFamily:"sans-serif"}}>
CONTACT
500 Terry Francine St.<br></br>

San Francisco, CA 94158<br></br>

info@mysite.com<br></br>

Tel: 123-456-7890</address>
<FormValidation/>
</div>
<div style={{border:"none"}}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6948.007639621132!2d77.41613827367357!3d8.104635612822605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1759990598593!5m2!1sen!2sin"
        title="Example Site"
        width="600"
        height="400"
        style={{ border: "2px solid black", borderRadius: "10px" }}
      ></iframe>
    </div>
    </div>
  )
}

export default Contact
