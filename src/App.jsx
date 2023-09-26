import React, { useState } from 'react';
import Form from './form'
import Cards from './card'
import Confirmation from './confirmation';



function App() {
  const initialData = {card_name: "", card_number: "", exp_mnth: '', exp_yr: '', cvc: ''};

  // state values 
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const [isConfirm, setIsConfirm] = useState(false);
  
  
// function that moves Form-data into useState variable
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
    

  }

  // function that submits entire Form-values after checking them
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsConfirm(true);
      }

  
  // function that checks Form-values to ensure compliance with required parameters
  const validate = (values) => {
    
    const errors = {};
    const regEx_number = /\D/;
    const regEx_alphabet = /[^a-zA-Z ]/;
    
    
    
      if (!values.card_number) {
      errors.card_number = 'Card Number is Required';
      } else if (values.card_number.match(regEx_number)){
      errors.card_number = 'wrong format, numbers only!';
      } else if ((values.card_number).length < 16){
        errors.card_number = 'must not be less than 16 digits';
      } else if ((values.card_number).length > 16){
        errors.card_number = 'must not be more than 16 digits';
      }
    
      
      if (!values.card_name) {
      errors.card_name = 'Card Name is Required';
      } else if (values.card_name.match(regEx_alphabet)){
      errors.card_name = 'wrong format, alphabets only';
      }  else if ((values.card_name).length < 5) {
      errors.card_name = 'must not be less than five characters';
      }
     
      

     if (!values.exp_mnth) {
      errors.exp_mnth = `MM/YY can't be blank`;
     } else if ((values.exp_mnth) < 1 || (values.exp_mnth) > 12 ){
      errors.exp_mnth = `use arrow keys`;
     } 

     if (!values.exp_yr) {
      errors.exp_mnth = `MM/YY can't be blank`;
     } else if ((values.exp_yr) < 22 || (values.exp_yr) > 26){
      errors.exp_mnth = `use arrow keys`;
     }
     if (!values.cvc) {
      errors.cvc = 'CVC cant be blank';
     } else if (values.cvc.match(regEx_number)){
      errors.cvc = 'wrong format, numbers only!';
     } else if ((values.cvc) < 1 && (values.cvc).length < 3){
      errors.cvc = 'must be 3 digits';
     } else if ((values.cvc) < 1){
      errors.cvc = '000 is invalid';
     }else if ((values.cvc).length < 3 || (values.cvc).length > 3){
        errors.cvc = 'must be 3 digits';
     }
  

     return errors;

// function that resets page after confirmation
  }
  const handleConfirm = (e) => {
    e.preventDefault();
      setIsConfirm(false);
      setFormData({})
  };


  return (
    <div className='main_section'>
    <Cards formData={ formData } />
     {Object.keys(formErrors).length === 0 && isConfirm ? <Confirmation handleConfirm={ handleConfirm }/> : 
      <Form formData = {formData} handleChange= {handleChange} handleSubmit= {handleSubmit} formErrors={formErrors}/>}
    </div>
  );
}

export default App;
