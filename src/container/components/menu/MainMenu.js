import React, { Component } from "react";
import { Menu, Icon, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const MENU = [
  {
    to: "/",
    content: "Home",
    icon: "home"
  },
  {
    to: "/todo",
    content: "To Do",
    icon: "file-text"
  }
];
class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Home"
    };
  }

  handleClick = e => {
    console.log("click ", e);

    this.setState({
      current: e.key
    });
  };
  render() {
    const { current } = this.state;
    return (
      <Row>
        <Col span={8} offset={1}>
          <div className="menu-title">
            <NavLink to="/">
              <span className="menu-title font-bold">Bach Toan</span>
            </NavLink>
          </div>
        </Col>
        <Col span={6} offset={8}>
          <Menu
            id="main-menu"
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            {MENU.map((menu, i) => {
              return (
                <Menu.Item key={menu.content} className="menu-item font-bold">
                  <NavLink to={menu.to}>
                    <Icon type={menu.icon} />
                    {menu.content}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default MainMenu;
