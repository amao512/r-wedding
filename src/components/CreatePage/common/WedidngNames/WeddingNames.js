import React from 'react';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const WeddingNames = props  => {

    const {
        error, setGroomName,
        setGroomLastName, setBrideName,
        setBrideLastName
    } = props

    return (
        <>
            <div>
                <Input type='text' placeholder='Groom Name'
                        func={setGroomName} error={error}
                />

                <Input type='text' placeholder='Groom Last Name'
                        func={setGroomLastName} error={error}
                />
            </div>

            <div>
                <Input type='text' placeholder='Bride Name' 
                        func={setBrideName} error={error}
                />

                <Input type='text' placeholder='Last Name' 
                        func={setBrideLastName} error={error}
                />
            </div>
        </>
    )
}

WeddingNames.propTypes = {
    error: PropTypes.bool.isRequired,
    setGroomLastName: PropTypes.func.isRequired,
    setGroomName: PropTypes.func.isRequired,
    setBrideName: PropTypes.func.isRequired,
    setBrideLastName: PropTypes.func.isRequired
}

export default WeddingNames;