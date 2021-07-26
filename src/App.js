import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';
import 'antd/dist/antd.css';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, MoreOutlined } from '@ant-design/icons';

function App() {
  const menu = (
    <Menu>
      <Menu.Item key="1">Delete</Menu.Item>
      <Menu.Item key="2">Duplicate</Menu.Item>
      <Menu.Item key="3">Add Reminder</Menu.Item>
      <Menu.Item key="4">Add Comment</Menu.Item>
    </Menu>
  );

  const [checked, setChecked] = React.useState("");

  return (
    <div className="page">
      <header className="header-top" />
      <div className="top-div">
        <b className="main-title">To Do List</b>
        <Button className="btn1" style={{ backgroundColor: "#1a56b6", width: '8vw' }}>Add To Do</Button>
      </div>
      <div class="input-group">
        <div style={{ marginLeft: '5vw' }}>
          <input type="search" className="form-control-b" placeholder="  Search To Do" />
        </div>
        <span className="icon-span" style={{ marginLeft: '-2.5vw', marginTop: '6.4vh' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg></span>
      </div>
      <Card className="main-card" style={{ borderRadius: '1vw' }}>
        <b className="title">To Do</b><hr />
        <ul className="list">
          <li><MoreOutlined className="shift-icon" /><input type="checkbox" onChange={() => setChecked(!checked)} />
            <b style={{ textDecoration: checked ? "line-through" : "" }}> Review Journey Builder UI </b>

            <Dropdown.Button overlay={menu} style={{ marginLeft: '65.1vw' }} trigger={['click']} placement="bottomCenter" icon={<DownOutlined />}>
              Edit
            </Dropdown.Button>
          </li>
          <p class="desc">Review journey builder ui with Deepshitha, give her feedbacks and define next actionable give the <a href="#">Read More</a></p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" />
          </svg> <small style={{ color: 'grey' }}>Today at 4:30 pm</small>

          <hr className="divider" />
          <li><MoreOutlined className="shift-icon" /><input type="checkbox"/>
            <b> Weekly Scrum</b>
            <Dropdown.Button style={{ marginLeft: '70.6vw' }} overlay={menu} trigger={['click']} placement="bottomCenter" icon={<DownOutlined />}>
              Edit
            </Dropdown.Button>
          </li>
          <p class="desc">Weekly 1 hour scrum with the Tech, product and UI team. We have to discuss about the tasks we <a href="#">Read More</a></p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" />
          </svg> <small style={{ color: 'grey' }}>Tomorrow at 2:00 pm</small>
          <hr className="divider" />
          <li><MoreOutlined className="shift-icon" /><input type="checkbox"/>
            <b> User Interview</b>
            <Dropdown.Button overlay={menu} style={{ marginLeft: '70.6vw' }} trigger={['click']} placement="bottomCenter" icon={<DownOutlined />}>
              Edit
            </Dropdown.Button>
          </li>
          <p class="desc">Has to conduct user interviews understanding how can we improve our dashboard. Focus has to be <a href="#">Read More</a></p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" />
          </svg> <small style={{ color: 'grey' }}>Monday at 5:30 pm</small>
        </ul>
      </Card>
      <hr className="main-divide" />
      <Card className="main-card" style={{ borderRadius: '1vw', marginTop: '4vh' }}>
        <b className="title">Completed</b><hr />

      </Card>
    </div>
  );
}

export default App;
