import React from 'react'
import logo from './images/card-logo.svg';

const Card = ({ formData }) => {
    return (
    <div className='left_section'>
        <div className="front_page">
            <div className='front_page_details' >
            <img className="front_logo" src={logo} alt="card_logo"/>
            <p className="card_number">{formData.card_number ? (formData.card_number).replace(/.{4}/g, '$& ') : `0000 0000 0000 0000` }</p>

            <div className='firstName_Date'>

            <p className="first_name" >{formData.card_name ? (formData.card_name).toUpperCase() : `JANE APPLESEED` }</p>
            <p className="date" >{formData.exp_mnth && formData.exp_yr ? `${formData.exp_mnth}/${formData.exp_yr}` : `00/00`}</p>
            </div>

            </div>

        </div>
        <div className="back_page">
            <p className="back_detail">{formData.cvc ? formData.cvc :  `000`}</p>
        </div>
    </div>
        )
}
export default Card;