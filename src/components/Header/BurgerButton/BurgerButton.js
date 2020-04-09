import React from 'react';
import s from './burger.module.scss';
import PropTypes from 'prop-types';

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

BurgerButton.propTypes = {
    showLinks: PropTypes.bool.isRequired,
    setShowLinks: PropTypes.func.isRequired
}

export default BurgerButton;