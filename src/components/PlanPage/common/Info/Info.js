import React from 'react';
import s from './info.module.scss';
import img from '../../../../assets/images/gallery-9.jpg';
import PropTypes from 'prop-types';

const Info = ({ category, date, city, capacity, inviting, desc}) => {
    return (
        <div className={s.info} style={{'backgroundImage': `url(${img})`}}>
            <h1>{category}</h1>
            
            <div className={s.boxes}>
                <div className={s.inviteBox}>
                    <h2>{inviting}</h2>
                    <p>{desc}</p>
                </div>

                <div className={s.infoBox}>
                    <h2>Information</h2>

                    <div className={s.data}>
                        <div className={s.city}>
                            <span className="material-icons">location_city</span>
                            <p>{city}</p>
                        </div>

                        <div className={s.date}>
                            <span className="material-icons">event_note</span>
                            <p>{date}</p>
                        </div>

                        <div className={s.time}>
                            <span className="material-icons">schedule</span>
                            <p>7:00 PM</p>
                        </div>

                        <div className={s.guests}>
                            <span className="material-icons">supervisor_account</span>
                            <p>Guests: {capacity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Info.propTypes = {
    category: PropTypes.string,
    date: PropTypes.string,
    city: PropTypes.string,
    capacity: PropTypes.string,
    inviting: PropTypes.string,
    desc: PropTypes.string
}

export default Info;