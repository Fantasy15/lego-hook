/**
 * @file index.js
 */

import React, { useState } from 'react';
import { useUnmount } from 'Packages';

const MyComponent = () => {
    useUnmount(() => {
        console.log('unmount');
    });

    return <div>Hello World</div>;
};

export default () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <button onClick={() => setShow(show => !show)}>{show ? 'unmount' : 'mount'}</button>
            {show && <MyComponent />}
        </>
    )
};

