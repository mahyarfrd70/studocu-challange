import React, {FC, PropsWithChildren} from 'react';

import Head from 'next/head';

import type {HTMLHeadWrapperProps} from './HTMLHeadWrapper.types';

const HTMLHeadWrapper: FC<PropsWithChildren<HTMLHeadWrapperProps>> = ({title, description, children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default HTMLHeadWrapper;
