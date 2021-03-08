import React, { useState, useEffect } from 'react';
import { Layout, Icon, Select } from '@whalecloud/fdx';
import { getInitLocale, setLang } from '@fishx/i18n';
import { Link } from '@fishx/router';
import { cookieUtils } from '@fishx/utils';
import Sidebar from '@/component/Sidebar';
import styles from './layout.module.less';

const { getCookie } = cookieUtils;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

const BasicLayout = props => {
  const [collapsed, setCollapsed] = useState(false);
  const [initLocale, setInitLocale] = useState('zh-CN');

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleChange = value => {
    setLang(value);
    setInitLocale(value);
  };

  const getContentStyle = () => {
    if (collapsed) {
      return { paddingLeft: '80px' };
    }
    return { paddingLeft: '200px' };
  };

  const getDefaultLocale = () => {
    const lang = getCookie('userLocale');
    if (!lang) {
      setInitLocale(getInitLocale());
    } else {
      setInitLocale(lang);
    }
  };

  useEffect(() => {
    getDefaultLocale();
  }, []);

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} className={`${styles.sider} ${styles.fixSiderbar}`}>
        <Sidebar collapsed={collapsed} />
      </Sider>
      <Layout style={getContentStyle()}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon className={styles.trigger} type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
          <div style={{ display: 'inline-block', float: 'right', marginRight: '20px' }}>
            <Select value={initLocale} style={{ width: 120, marginRight: '10px' }} onChange={handleChange}>
              <Option key="en-US" value="en-US">
                英文
              </Option>
              <Option key="zh-CN" value="zh-CN">
                中文
              </Option>
            </Select>
            <Link to="/login">登录</Link>
          </div>
        </Header>
        <Content
          className="main-layout-content"
        >
          {/* {renderRoutes(props.route.childrens, { someProp: 'these extra props are optional' })} */}
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
