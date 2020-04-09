import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const Invite = ({ setInvite, error }) => {

    const [text, setText] = useState();

    useEffect(() => {
        setInvite(text)
    }, [setInvite, text])

    return (
        <div>
            <Input type='text' placeholder='Invitation'
                    error={error}
                    func={setText}
            />
        </div>
    )
}

Invite.propTypes = {
    setInvite: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
}

export default Invite;