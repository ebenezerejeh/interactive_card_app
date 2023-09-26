import React from 'react'
import logo from './images/icon-complete.svg';

const Confirmation = ({ handleConfirm }) => {
    return (
        <div className="right_section">
        <form className=' form complete_form'>
            <img className="complete_logo" src={logo} alt="complete_logo"/>
            <h1>THANK YOU!</h1>
            <p className='complete_message'>We've added your card details</p>

            <button className="btn" onClick={ handleConfirm }>Continue</button>

        </form>
        </div>
    )
}

export default Confirmation