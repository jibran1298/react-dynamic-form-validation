// src/App.js
import React from 'react';
import FormBuilder from './FormBuilder';

const formSchema = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    type: 'date',
    required: true,
  },
  {
    name: 'website',
    label: 'Personal Website',
    type: 'url',
  },
];

const App = () => {
  const handleSubmit = (formData) => {
    console.log('Form Submitted:', formData);
  };

  return (
    <div>
      <h1>Dynamic Form Builder Demo</h1>
      <FormBuilder formSchema={formSchema} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
