// src/styles/ContactStyles.js
import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(18, 18, 18, 0.8);
  text-align: center;
  color: #ffffff;
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff9800;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 300px;
  border: 1px solid #444444;
  border-radius: 5px;
  background: #333333;
  color: #ffffff;
`;

export const Textarea = styled.textarea`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 300px;
  height: 100px;
  border: 1px solid #444444;
  border-radius: 5px;
  background: #333333;
  color: #ffffff;
`;

export const SubmitButton = styled.button`
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #1f1f1f;
  background: #ff9800;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #ffb74d;
  }
`;
