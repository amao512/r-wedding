import React from 'react';
import s from './prove.module.scss';
import { NavLink } from 'react-router-dom';
import FormButton from '../../StyledComponents/FormButton';
import { connect } from 'react-redux';
import { addPlan } from '../../../redux/plansReducer'

const Prove = ({ addPlan, children, img, data, category }) => {
    return (
        <div className={s.proveForm}>
            <div className='container'>
            
                <div className={s.prove}>
                    <div className={s.banner}
                        style={{'backgroundImage': `url(${img})`}}>
                        <h1>{category}</h1>
                    </div>

                    <div className={s.info}>
                        { children }
                    </div>

                    <div className={s.buttons}>
                        <NavLink to='/create'>
                            <FormButton background={'#44a6c6'}>Create another</FormButton>
                        </NavLink>
                        <NavLink to={`/plan/${data.id}`}>
                            <FormButton onClick={() => addPlan(data)}>Prove</FormButton>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default connect(null, { addPlan })(Prove);