import React, { useEffect } from 'react';
import s from './plans.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FHF } from '../StyledComponents/404';
import { deletePlan, setPlan } from '../../redux/plansReducer';
import PropTypes from 'prop-types';

const MyPlansPage = ({ plans, deletePlan, setPlan }) => {

    useEffect(() => {
        setPlan(plans);
    }, [setPlan, plans])

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
                    <div key={index} className={s.plan}>
                        <NavLink to={`/plan/${plan.id}`} className={s.item}>
                            <p>{plan.names.groom.name}</p>
                            <p>{plan.names.bride.name}</p>
                        </NavLink>
                        <div className={s.delete}>
                            <span className="material-icons" 
                                  onClick={() => deletePlan(plan.id)}
                            >delete</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

const mstp = state => ({
    plans: state.plans.data
})

MyPlansPage.propTypes = {
    plans: PropTypes.array.isRequired,
    deletePlan: PropTypes.func.isRequired,
    setPlan: PropTypes.func.isRequired
}

export default connect(mstp, { deletePlan, setPlan })(MyPlansPage);