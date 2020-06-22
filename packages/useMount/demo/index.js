/**
 * @file index.js
 */

import React, {useState} from 'react';
import {useMount} from 'Packages';

const MyComponent = () => {
    useMount(() => {
        console.log('mount');
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

