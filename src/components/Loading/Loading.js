import React from 'react';
import gif from '../../assets/gif/loading.gif';
import s from './loading.module.scss';

const Loading = () => {
    return (
        <div className={s.loading}>
            <img src={gif} alt='loading' />
        </div>
    )
}

export default Loading;