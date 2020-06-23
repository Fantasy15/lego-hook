/**
 * @file index.js
 */

import { useRef, useLayoutEffect } from 'react';

const useUpdateLayoutEffect = (fn) => {
    const isMounted = useRef(false);
    useLayoutEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            fn();
        }
    })
}

export default useUpdateLayoutEffect;