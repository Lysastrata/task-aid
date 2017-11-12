import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Menu, Icon, Button} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
class MainMenu extends Component {
    addTemplate() {
        console.log('inner add');
        this.props.store.addTemplate();
    }
    selectTemplate(template) {
        console.log('select inner');
        this.props.store.selectTemplate(template);
    }
    render() {
        const store = this.props.store;
        console.log("Template list:", store.templateList.length);
        return (
         <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            selectedKeys={[store.activeTemplate.id]}
          >
              <MenuItemGroup key="g1" title="Templates">
                {store.templateList.map(template =>
                    <Menu.Item key={template.id}>
                    <div onClick={this.selectTemplate.bind(this, template)} >
                    {template.name}
                    </div>
                    </Menu.Item>
                )}
              </MenuItemGroup>
              <div>
                <Button 
                type="primary"
                shape="circle"
                icon="plus"
                style={{display: 'block', margin: '10px auto'}}
                onClick={this.addTemplate.bind(this)} 
                >
                </Button>
              </div>

        </Menu>
        );
    }
}

export default MainMenu;