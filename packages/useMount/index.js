/**
 * @file index.js
 */

import {useEffect} from 'react';

const useMount = (fn) => {
    useEffect(() => {
        fn();
    }, []);
}

export default useMount;