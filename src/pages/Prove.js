import React from 'react';
import ProvePage from '../components/ProvePage/ProvePageContainer';
import Title from '../components/StyledComponents/Title';
import { Switch, Route } from 'react-router-dom';

const Prove = () => {
    return (
        <>
            <Title>Prove</Title>
            <Switch>
                <Route path='/prove/prove-wedding' component={() => <ProvePage />} />
            </Switch>
        </>
    )
}

export default Prove;