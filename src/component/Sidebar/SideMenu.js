import React from 'react';
import { Menu, Icon } from '@whalecloud/fdx';
import { Fishx, Link, useHistory } from 'fishx';
import { useDispatch } from 'react-redux';
import handleConfig from './handleConfig';

const { SubMenu } = Menu;

const getMenuText = item => {
  if (!item.icon) return item.name;
  return (
    <span>
      <Icon type={item.icon} />
      <span>{item.name}</span>
    </span>
  );
};

const renderMenu = data => (
  data.map(item => {
    if (item.children) {
      return (
        <SubMenu title={getMenuText(item)} key={item.path || item.name}>
          {renderMenu(item.children)}
        </SubMenu>
      );
    }

    return (
      <Menu.Item title={getMenuText(item)} key={item.path || item.name}>
        <Link
          to={item.path}
        >
          {getMenuText(item)}
        </Link>
      </Menu.Item>
    );
  })
);

const SideMenu = () => {
  // const mapState = state => ({
  //   openKeys: state.sys.openKeys,
  // });

  // 获取store中的数据
  // const { openKeys } = useSelector(mapState);
  const dispatch = useDispatch();

  const { asideMenuConfig } = Fishx.config;
  const menuConfig = handleConfig(asideMenuConfig);

  const { location: { pathname } } = useHistory();

  return (
    <Menu
      theme="dark"
      mode="inline"
      onSelect={({ key }) => {
        dispatch({ type: 'sys/save', payload: { openKeys: [key] } });
      }}
      selectedKeys={[pathname]}
    >
      {renderMenu(menuConfig)}
    </Menu>
  );
};

export default SideMenu;
