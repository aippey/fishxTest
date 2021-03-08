import React from 'react';
import { Form, Input, Button } from '@whalecloud/fdx';

const Login = props => {
  const handleClick = () => {
    localStorage.setItem('isLogin', `${true}`);
    props.history.push('/');
  };

  return (
    <Form style={{ maxWidth: 300, margin: '0 auto' }} className="login-form">
      <Form.Item>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item>
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleClick}>Log in</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
