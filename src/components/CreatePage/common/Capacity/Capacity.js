import React from 'react';
import Input from '../Input/Input';

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

export default Capacity;