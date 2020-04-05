import React from 'react';
import InputForm from '../../../StyledComponents/InputForm';

const SelectDate = ({ selectDate, error }) => {
    return (
        <>
            <div>
                {error 
                    ? <h3 style={{'color': 'red'}} >Date</h3>
                    : <h3>Date</h3>
                }

                <InputForm type='date'
                            background={error}
                            onChange={e => selectDate(e.target.value)} 
                />
            </div>
        </>
    )
}

export default SelectDate;