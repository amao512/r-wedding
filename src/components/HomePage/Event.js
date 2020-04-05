import React from 'react';
import s from './home.module.scss';
import { connect } from 'react-redux';
import Title from '../StyledComponents/Title';

const Organizations = ({ event }) => {
    return (
        <div className='container'>
            <div className={s.organizations}>
                <Title>Plan your wedding</Title>

                {event.map((item, index) => (
                    <div key={index} className={s.single}
                         style={{'backgroundImage': 'url(' + item.img + ')'}}
                    >
                        <div className={s.text}>
                            <h3>{item.title}</h3>
                            <p>{item.info}</p>
                        </div>
                        <div className={s.shadow}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mstp = state => ({
    event: state.event.data
})

export default connect(mstp)(Organizations);