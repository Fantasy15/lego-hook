/**
 * @file index.js
 */

import React, { useState } from 'react';
import { useUpdate } from 'Packages';

export default () => {
    const [count, setCount] = useState(0)
    useUpdate(() => {
        console.log('update');
    })
    return (
        <>
            {count}
            <button onClick={() => setCount(count => count + 1)}>click</button> to add 1
        </>
    )
};

