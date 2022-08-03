import React from 'react'
import { ToggleMenu } from './ToggleMenu'

export const IconToggle = () => {
    return (
        <>
            <div class="icon-wrapper">
                <label class="hamburger">
                    <input class="hamburger-input" type="checkbox" />
                    <span class="hamburger-line first"></span>
                    <span class="hamburger-line second"></span>
                    <span class="hamburger-line third"></span>
                    <ToggleMenu></ToggleMenu>
                </label>
            </div>

        </>
    )
}
