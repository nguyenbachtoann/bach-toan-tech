import React, { Component } from "react";
import { Row, Col, Checkbox, Badge, Button, Divider } from "antd";
import style from "./dynamicStyle";

class TaskBox extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data: data,
      tasksCount: undefined,
      tasksList: data.list
    };
  }

  UNSAFE_componentWillMount() {
    this.handleCountTasks();
  }

  handleDeleteTaskBox = () => {
    console.log("DDD: ");
  };

  handleCountTasks = () => {
    const { tasksList } = this.state;
    const tasksCount = tasksList.length;
    this.setState({
      tasksCount
    });
  };
  handleRenderPriority = priority => {
    switch (priority) {
      case "Low":
        return (
          <div
            className="color-props priority"
            style={style.priorityLow}
            title={priority}
          />
        );
      case "Medium":
        return (
          <div
            className="color-props priority"
            style={style.priorityMedium}
            title={priority}
          />
        );
      case "High":
        return (
          <div
            className="color-props priority"
            style={style.priorityHigh}
            title={priority}
          />
        );

      default:
        break;
    }
  };

  render() {
    const { data, tasksCount, tasksList } = this.state;
    return (
      <div className="list-item">
        <div onClick={this.handleDeleteTaskBox} id="btn-task-box-cancel">
          <Badge count="X"></Badge>
        </div>
        <div className="list-item-title">
          <span className="item-title text-title-thin">{data.title}</span>
        </div>
        <div className="list-description ">
          <span className="item-content content-span">{data.description}</span>
        </div>
        <div className="list-tasks-count ">
          <span className="item-content content-span">
            <span className="font-bold">{tasksCount}</span> tasks
          </span>
        </div>
        <div className="list-tasks-count ">
          <span className="item-content date-time">{data.createdTime}</span>
        </div>
        <Row type="flex" justify="center">
          <Col span={14}>
            <div className="list-tasks-options">
              <Row type="flex" justify="space-around">
                <Col span={4}>
                  <Button className="btn-tasks-option" type="primary">
                    Add
                  </Button>
                </Col>
                <Col span={4}>
                  <Button className="btn-tasks-option" type="default">
                    Edit
                  </Button>
                </Col>
                <Col span={4}>
                  <Button className="btn-tasks-option" type="danger">
                    Delete
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={16}>
            <Divider className="todos-divider" />
          </Col>
        </Row>

        <div id="hidden-item">
          <Row type="flex" justify="center">
            <Col span={16}>
              {tasksList.map((task, i) => {
                return (
                  <Row key={i} type="flex" justify="start">
                    <Col span={24} className="todos-col">
                      {this.handleRenderPriority(task.priority)}
                      <Checkbox value={task.id} className="todos-checkbox" />

                      <span className="content-span">{task.title}</span>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TaskBox;
