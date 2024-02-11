// src/FormBuilder.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormBuilder = ({ formSchema, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateField = (field, value) => {
    const { required, type } = field;
    let error = '';

    if (required && !value) {
      error = `${field.label} is required`;
    }

    if (type === 'email' && value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }

    if (type === 'url' && value && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(value)) {
      error = 'Invalid URL';
    }

    if (type === 'password' && value && value.length < 6) {
      error = 'Password must be at least 6 characters';
    }

    return error;
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field.name]: value,
    });

    // Clear error when typing
    if (errors[field.name]) {
      setErrors({
        ...errors,
        [field.name]: '',
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    formSchema.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formSchema.map((field) => (
        <div key={field.name} style={{ marginBottom: '1rem' }}>
          <label>{field.label}</label>
          {field.type === 'text' && (
            <input
              type="text"
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              required={field.required}
            />
          )}
          {field.type === 'email' && (
            <input
              type="email"
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              required={field.required}
            />
          )}
          {field.type === 'password' && (
            <input
              type="password"
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              required={field.required}
            />
          )}
          {field.type === 'date' && (
            <input
              type="date"
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              required={field.required}
            />
          )}
          {field.type === 'url' && (
            <input
              type="url"
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              required={field.required}
            />
          )}
          {errors[field.name] && <p style={{ color: 'red' }}>{errors[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

FormBuilder.propTypes = {
  formSchema: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'email', 'password', 'date', 'url']).isRequired,
      required: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormBuilder;
