import React from 'react';
import Forms from '../components/CreatePage/Forms';
import Title from '../components/StyledComponents/Title';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Start = () => {
    return (
        <>
            <ScrollToTop>
                <Title>Fill the form</Title>
                <Forms />
            </ScrollToTop>
        </>
    )
}

export default Start;