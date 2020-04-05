import React, { useState, useEffect } from 'react';
import s from './desc.module.scss';
import Input from '../Input/Input';

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

export default Desc;