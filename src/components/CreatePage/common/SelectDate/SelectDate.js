import React from 'react';
import InputForm from '../../../StyledComponents/InputForm';
import PropTypes from 'prop-types';

const SelectDate = ({ selectDate, error }) => {
    return (
        <>
            <div style={{'marginTop': '20px'}}>
                {error 
                    ? <h3 style={{'color': 'red'}} >Date</h3>
                    : <h3 style={{'color': '#88a3e7'}} >Date</h3>
                }

                <InputForm type='date'
                            background={error}
                            onChange={e => selectDate(e.target.value)} 
                />
            </div>
        </>
    )
}

SelectDate.propTypes = {
    selectDate: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
}

export default SelectDate;