import React from 'react';
import MyPlansPage from '../components/MyPlansPage/MyPlansPage';
import Title from '../components/StyledComponents/Title';

const MyPlans = ({ plans }) => {
    console.log(plans)

    return (
        <>
            <Title>My Plans</Title>
            <MyPlansPage plans={plans} />
        </>
    )
}

export default MyPlans;