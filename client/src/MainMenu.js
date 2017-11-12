import React, { Component } from 'react';

import { Menu, Icon, Button} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainMenu extends Component {
    render() {
        return (
         <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
              <MenuItemGroup key="g1" title="Templates">
                <Menu.Item key="1">Flip House</Menu.Item>
                <Menu.Item key="2">Rennovate Kitchen</Menu.Item>
              </MenuItemGroup>
              <Button type="primary" shape="circle" icon="plus" style={{display: 'block', margin: '10px auto'}} />

        </Menu>
        );
    }
}

export default MainMenu;