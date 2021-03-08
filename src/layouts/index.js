import React from 'react';
import BasicLayout from '@/Layout/layout';
import SimpleLayout from '@/Layout/simpleLayout';
import { useHistory } from 'fishx';

export default props => {
  const { location: { pathname } } = useHistory();
  return (
    pathname === '/login' ? <SimpleLayout>{props.children}</SimpleLayout> :
    <BasicLayout>{props.children}</BasicLayout>
  );
};
