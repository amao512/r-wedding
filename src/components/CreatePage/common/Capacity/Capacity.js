import React from 'react';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const Capacity = ({ setNumber, error }) => {
    return (
        <div>
            <Input type='number' error={error} 
                    placeholder='Capacity'
                    func={setNumber}
            />
        </div>
    )
}

Capacity.propTypes = {
    setNumber: PropTypes.func.isRequired
}

export default Capacity;