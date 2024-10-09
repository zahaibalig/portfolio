// src/components/Contact.js
import React from 'react';
import { ContactSection, ContactTitle, ContactForm, Input, Textarea, SubmitButton } from '../styles/ContactStyles';

const Huldra = () => {
  return (
    <ContactSection id="Huldra">
      <ContactTitle>Huldra</ContactTitle>
      <ContactForm>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message"></Textarea>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Huldra;
