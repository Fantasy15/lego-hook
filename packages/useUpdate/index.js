/**
 * @file index.js
 */

import { useRef, useEffect } from 'react';

const useUpdate = (fn) => {
    const isMounted = useRef(false);
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            fn();
        }
    })
}

export default useUpdate;