import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      console.log("Form Data:", formData);
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.firstName}</p>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.lastName}</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.subject}</p>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.message}</p>
        <button type="submit" style={{gap:"10px",margin:"10px",color:"red",border:"none",backgroundColor:"white"}}>Submit</button>
       
      </form>
    </div>
  );
};

export default FormValidation;
