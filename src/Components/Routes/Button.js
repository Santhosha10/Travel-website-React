import React from "react";
import '../Styles/Button.css'
import { Link } from "react-router-dom";

const btnStyles = ['btn--primary','btn--outline'];
const btnSizes = ['btn--medium','btn--large']

export const Button = ({
    children, 
    type,
     onclick ,
     buttonStyle , 
     buttonSize
})=>{

    const checkButtonStyle = btnStyles.includes(buttonStyle)? buttonStyle : btnStyles[0];

    const checkButtonSize = btnSizes.includes(buttonSize) ? buttonSize :btnSizes[0]

    return(
        <Link to = '/sign-up' className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onclick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}