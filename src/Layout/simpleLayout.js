import React from 'react';

export default props => (
  <div style={{ textAlign: 'center', marginTop: 200 }}>
    <p>Welcome Login</p>
    {props.children}
  </div>
);
