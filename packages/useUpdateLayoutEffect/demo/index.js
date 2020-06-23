/**
 * @file index.js
 */

import React, { useState } from 'react';
import { useUpdateLayoutEffect } from 'Packages';

export default () => {
    const [count, setCount] = useState(0)
    useUpdateLayoutEffect(() => {
        console.log('update layoutEffect');
    })
    return (
        <>
            {count}
            <button onClick={() => setCount(count => count + 1)}>click</button> to add 1
        </>
    )
};

