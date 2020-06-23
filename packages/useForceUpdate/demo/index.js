/**
 * @file index.js
 */

import React, { useState } from 'react';
import { useForceUpdate } from 'Packages';

export default () => {
    const forceUpdate = useForceUpdate();
    return (
        <>
            {Date.now()}
            <button onClick={forceUpdate}>forceUpdate</button>
        </>
    )
};

