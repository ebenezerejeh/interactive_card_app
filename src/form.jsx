import React from 'react'

const Form = ({ formData, handleChange, handleSubmit, formErrors}) => {
    return (
        <>
        <div className="right_section">
      <form>
        <div>
          <label htmlFor='fullName'>CARDHOLDER NAME</label>
          <input 
          type="text"
          name="card_name"
          id="fullName"
          placeholder='e.g. JANE APPLESEED'
          value={formData.card_name}
          onChange={handleChange}   
          />
          <p className='error'>{formErrors.card_name}</p>
        </div>
        <div>
          <label htmlFor='cardNumber'>CARD NUMBER</label>
          <input 
          type="text"
          id="cardNumber"
          name="card_number"
          placeholder="e.g 1234 5678 9123 0000"
          value={formData.card_number}
          onChange={handleChange}   
          />
          <p className='error'>{formErrors.card_number}</p>
        </div>
        <div>
          <div>
          <label htmlFor="month">EXP.DATE (MM/YY)</label>
          <label htmlFor='cvc' className="cvc">CVC</label>
          </div>
          <input 
          type="number"
          min="01"
          max="12"
          id="month"
          name="exp_mnth"
          placeholder="MM"
          value={formData.exp_mnth}
          onChange={handleChange}   
          />

          <input 
          type="number"
          min="22"
          max="26"
          id="year"
          name="exp_yr"
          placeholder="YY"
          value={formData.exp_yr}
          onChange={handleChange}   
          />
        
         <input 
          type="text"
          name="cvc"
          id="cvc"
          placeholder="e.g. 123"
          value={formData.cvc}
          onChange={handleChange}   
          />
          <div className='error_div'>
          <p className="error error2">{formErrors.exp_mnth}</p>
          <p className='error error3'>{formErrors.cvc}</p>
          </div>
          </div>
        <button type = 'submit' className="btn" onClick={handleSubmit}>confirm</button>

      </form>
    </div>
        
        </>
    )

}


export default Form;