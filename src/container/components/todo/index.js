import React, { Component } from "react";
import { Menu, Row, Icon, Button, Col, Empty, Divider } from "antd";
import JsonFaker from "json-faker";
import jsonFile from "../../../jsons/fakeData.json";
import TaskBox from "./TaskBox";
import Constants from "../../../constants/index";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
const data = JsonFaker.process(jsonFile);
const priorites = Constants.PRIORITY;

class ToDo extends Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <div id="todo-container">
        <div id="todo-wrapper">
          <Row type="flex" justify="center">
            <Col span={24}>
              <div className="todo-title">
                <span className="title-span">TO DO LIST</span>
              </div>
            </Col>
            <Col span={24} className="todo-priorities">
              <div className="priorities-wrapper">
                {priorites.map((priority, i) => {
                  return (
                    <div key={i} className="priorities">
                      <div
                        className="color-props priority"
                        style={{ backgroundColor: priority.color }}
                        title={priority.name}
                      />
                      <span>{priority.name}</span>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col span={24}>
              <Row type="flex" justify="center">
                <Col span={4}>
                  <Row type="flex" justify="space-around">
                    <Col span={12} className="todos-list-options-menu">
                      <Button className="btn-tasks-option" type="primary">
                        Add to do
                      </Button>
                    </Col>
                    <Col span={12} className="todos-list-options-menu">
                      <Button className="btn-tasks-option" type="danger">
                        Delete to do
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col span={16}>
                  <Divider className="todos-divider" />
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Row gutter={16}>
                <OverPack id="todos-overpack">
                  <QueueAnim
                    className="todos-queue"
                    duration={1000}
                    // ease="easeOutBounce"
                    // key="hobbies-queue-title"
                    key="todos-queue"
                    // leaveReverse
                  >
                    {data.listToDo.length > 0 ? (
                      data.listToDo.map((todo, i) => {
                        return (
                          <Col
                            tabIndex={i}
                            key={i}
                            xs={{ span: 24 }}
                            md={{ span: 8 }}
                            lg={{ span: 6 }}
                            xl={{ span: 4 }}
                            className="gutter-row list-col"
                          >
                            <TaskBox data={todo} />
                          </Col>
                        );
                      })
                    ) : (
                      <Empty />
                    )}
                  </QueueAnim>
                </OverPack>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ToDo;
