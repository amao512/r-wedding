import React from 'react';
import s from './burger.module.scss';

const BurgerButton = ({ showLinks, setShowLinks }) => {

    return (
        <div className={s.burgerLinks} 
             onClick={() => setShowLinks(!showLinks)}
             >

            <div className={showLinks ? s.showBurger : s.hideBurger}>
                <span />
            </div>

        </div>
    )
}

export default BurgerButton;