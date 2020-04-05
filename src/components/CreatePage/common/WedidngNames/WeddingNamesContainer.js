import React, { useState, useEffect } from 'react';
import WeddingNames from './WeddingNames';

const WeddingNamesContainer = ({ setNames, error }) => {

    const [groomName, setGroomName] = useState();
    const [groomLastName, setGroomLastName] = useState();

    const [brideName, setBrideName] = useState();
    const [brideLastName, setBrideLastName] = useState();

    useEffect(() => {
        setNames({
            groom: {name: groomName, lastName: groomLastName},
            bride: {name: brideName, lastName: brideLastName}
        })
    }, [setNames, groomName, groomLastName, brideName, brideLastName])

    const nextProps = {
        error, setGroomName,
        setGroomLastName, setBrideName,
        setBrideLastName
    }

    return <WeddingNames {...nextProps} />
}

export default WeddingNamesContainer;