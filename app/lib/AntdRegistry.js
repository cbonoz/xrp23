'use client';

import React, {useMemo} from 'react';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

const StyledComponentsRegistry = ({ children }) => {
  
  const cache = useMemo(() => createCache(), [createCache]);

  useServerInsertedHTML(() => {
    return (
        <script dangerouslySetInnerHTML={{
            __html: `</script>${extractStyle(cache)}<script>`
        }}/>
    )
});
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;