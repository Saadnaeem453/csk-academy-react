import React, { useState, useEffect } from 'react';
import "../src/Style/Loginform.css"


function RegistrationForm({isLoggedIn,setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    description: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [users, setUsers] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);

  useEffect(() => {
    // Load user data from localStorage on component mount
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
   
   
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
  // agar formdata.email ki value fasle ho jati ha means formdata wala object mn agar email ki value khali hui tu condition true ho gi nai tu false ho jay gii..
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
  
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
  
    if (!isLoginMode) {
      // Validate username only in signup mode
      if (!formData.username.trim()) {
        newErrors.username = "Username is required";
      } else if (formData.username.length <= 6) {
        newErrors.username = "Username is at least 6 words";
      }
  
      // Check confirmPassword in signup mode
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
  
    setErrors(newErrors);
    return newErrors;
  };
  
  const isEmailExists = (email,username) => {
    // some is the built in array method that check the vlaue of the array if any value exit it return the true otherwise it gives the false
    return users.some((user) => user.email === email && user.username === username);
  };

  const isUserRegistered = () => {
    
    return users.some((user) => user.email === formData.email && user.password === formData.password);
  };

  const handleToggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setErrors({}); // Clear any previous errors
    setShowLoginError(false); // Hide login error message
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
  
    const validationErrors = validateForm();
    console.log("the function is called ");
  
    if (isLoginMode && !Object.keys(validationErrors).length) {
      if (isUserRegistered()) {
        // Login successful, set isLoggedIn to true
        setIsLoggedIn(true);
        setShowLoginError(false); // Hide any previous login error message
        console.log("Login successful");
      } else {
        // Login failed, show login error message
        setShowLoginError(true);
      }
    } else if (!isLoginMode && !Object.keys(validationErrors).length) {
      // Signup successful
      // agar isEmailExis false then this condition true and run the fucntioin of the signupsucessfull 
      if (!isEmailExists(formData.email,formData.username)) {
        // Email doesn't exist, proceed with signup
        handleSignupSuccess();
        setIsLoginMode(true);
      } else {
        // Email already exists, show an error message
        setErrors({
          ...validationErrors,
          email: "This account alredy exist plz go to the login your account.",
          username: "username is already exist plz choose another username"
        });
      }
    }
  };

  const handleSignupSuccess = () => {
    // Save user data to localStorage
    const updatedUsers = [...users, formData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    // Clear form data after successful signup
    setFormData({
      username: '',
      email: '',
      description: '',
      password: '',
      confirmPassword: '',
    });
    console.log('Signup successful');
  };
  return (

    <div className='my-5' align="center">
      <h1 className='mt-4'>{isLoginMode ? 'Login' : 'Sign Up'}</h1>
      { isLoggedIn ?(
        <p className='text-success fs-5' >You are logged in the websitet and  move to see your  carts</p>
      ):(
        <form className='form' onSubmit={handleLogin}>
          {!isLoginMode && (
            <div>
              <label htmlFor="username">Username</label>
              <input className='forminput'
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && <div className="error">{errors.username}</div>}
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
            className='forminput'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
            className='forminput'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          {!isLoginMode && (
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
              className='forminput'
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
            </div>
          )}
          {showLoginError && (
            <div className="error">Your data is not matched. Please sign up or check your login details.</div>
          )}

          <button type="button" className='formbtn' onClick={handleLogin}>
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>
          <button className='formbtn' type="button" onClick={handleToggleMode}>
            {isLoginMode ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
        </form>
      )}
    </div>
  );
          }
export default RegistrationForm;