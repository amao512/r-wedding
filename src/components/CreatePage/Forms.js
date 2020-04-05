import React from 'react';
import s from './forms.module.scss';
import WeddingContainer from './Wedding/WeddingContainer';
import Banner from './common/Banner/Banner';


const Forms = () => {
    return (
        <div className={s.formsSection}>
            <div className='container'>

                <div className={s.forms}>
                    <Banner />
                    <WeddingContainer />
                </div>
                
            </div>
        </div>
    )
}

export default Forms;