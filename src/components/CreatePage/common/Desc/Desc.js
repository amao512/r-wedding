import React, { useState, useEffect } from 'react';
import s from './desc.module.scss';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const Desc = ({ setDesc, error }) => {

    const [text, setText] = useState();

    useEffect(() => {
        setDesc(text);
    }, [setDesc, text])

    return (
        <div className={s.desc}>
            <Input type='textarea' placeholder='Description' 
                    func={setText}
                    error={error}
            />
        </div>
    )
}

Desc.propTypes = {
    setDesc: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
}

export default Desc;