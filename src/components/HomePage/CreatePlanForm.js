import React from 'react';
import Styled from '../StyledComponents/Button';
import s from './home.module.scss';
import { NavLink } from 'react-router-dom';
import Title from '../StyledComponents/Title';

const CreatePlanForm = () => {
    return (
        <div className='container'>
            <div className={s.start}>
                <Title>Start plan</Title>
                <div/>
                <NavLink to='/create'>
                    <Styled>Start</Styled>
                </NavLink>
            </div>
        </div>
    )
}

export default CreatePlanForm;