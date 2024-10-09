import React, { useState } from 'react';
import { ContactSection, ContactTitle, ContactForm, Input, Textarea, SubmitButton } from '../styles/ContactStyles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle sending the form data to the backend
  const handleSendMessage = async (e) => {
    e.preventDefault();  // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5001/api/post/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Send form data as JSON
      });
      
      if (response.ok) {
        console.log('Message sent successfully');
        // Optionally clear the form after successful submission
        setFormData({ name: '', email: '', message: '' });
        alert("Message Received");
      } else {
        console.log('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm onSubmit={handleSendMessage}>
        <Input 
          type="text" 
          name="name"
          value={formData.name}
          placeholder="Your Name" 
          onChange={handleChange}  // Update state on input change
        />
        <Input 
          type="email" 
          name="email"
          value={formData.email}
          placeholder="Your Email" 
          onChange={handleChange}
        />
        <Textarea 
          name="message" 
          value={formData.message}
          placeholder="Your Message" 
          onChange={handleChange}
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;