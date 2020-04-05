import React from 'react';
import s from './plans.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FHF } from '../StyledComponents/404';

const MyPlansPage = ({ plans }) => {

    if(plans === null || plans.length === 0){
        return (
            <FHF>
                <h2>There is no any kind of plans</h2>
            </FHF>
        )
    }

    return (
        <div className='container'>
            
            <div className={s.myPlans}>
                {plans.map((plan, index) => (
                    <NavLink key={index} to={`/plan/${plan.id}`} className={s.plan}>
                        <p>{plan.names.groom.name}</p>
                        <p>{plan.names.bride.name}</p>
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

const mstp = state => ({
    plans: state.plans.data
})

export default connect(mstp)(MyPlansPage);