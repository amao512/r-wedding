import React from 'react';
import s from './couple.module.scss';
import img from '../../../../assets/images/profile/bride.jpg';
import PropTypes from 'prop-types';

const Couple = ({ groom, bride }) => {
    return (
        <div className={s.couple}>
            <div className={s.coupleProfile}>
                <div className={s.heart}>
                    <span className="material-icons">favorite</span>
                </div>

                <div className={s.groom}>
                    <h3>{groom.name} {groom.lastName}</h3>
                    <div className={s.photo}>
                        <img src={img} alt='groom' />
                    </div>
                </div>

                <div className={s.bride}>
                    <div className={s.photo}>
                        <img src={img} alt='bride' />
                    </div>
                    <h3>{bride.name} {bride.lastName}</h3>
                    </div>                    
            </div>
        </div>
    )
}

Couple.propTypes = {
    groom: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }),
    bride: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }),
}

export default Couple;