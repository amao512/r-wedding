import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';

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

export default Invite;