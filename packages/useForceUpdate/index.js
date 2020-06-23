/**
 * @file index.js
 */

import { useState, useCallback } from 'react';

const useForceUpdate = () => {
   const [state, setState] = useState(0);
   return useCallback(() => setState(state => state + 1), [])
}

export default useForceUpdate;