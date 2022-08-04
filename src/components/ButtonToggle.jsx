import React from 'react'

import { ToggleMenu } from './ToggleMenu'

export const ButtonToggle = ({props}) => {
    
  
    return (
        <>

            <label className="menu-button-wrapper">
                <input id='input' type="checkbox" className="menu-button" />
                <div className="icon-wrapper">
                    <label className="hamburger">
                        <input className="hamburger-input" type="checkbox"/>
                            <span className="hamburger-line first"></span>
                            <span className="hamburger-line second"></span>
                            <span className="hamburger-line third"></span>
                    </label>
                </div>
             <ToggleMenu props={props}></ToggleMenu>
            </label>
        </>
    )
}
