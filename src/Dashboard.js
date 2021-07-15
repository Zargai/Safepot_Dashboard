import React from 'react';
import { Layout, Menu,Modal } from 'antd';
import Routes from './Routes/Routes';
import { Link, useHistory, useLocation } from "react-router-dom";
import { ExclamationCircleOutlined, LogoutOutlined, } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { confirm } = Modal;

function Dashboard() {
      const history = useHistory();
      const location = useLocation();
    // Logout function define here
    function showConfirm() {
        confirm({
          title: "Are you sure ?", icon: <ExclamationCircleOutlined />,
           okText: "Log out",
           content: "Do You Want to Log Out",
          onOk() {
            try {
                console.log("Logout");
            } catch (error) {
              console.log(error);
            }
          },
          onCancel() {
            // history.push(`${location.pathname}`);
            console.log("cancel");
          },
        });
      }

  return (
    <React.Fragment>
     
     {/* ****************** Page started Here *****************/}
     <Layout className="Dashboard_Layout">
    <Sider className="Dashboard_Sidebar" width='auto' breakpoint="lg" collapsedWidth="0"  onBreakpoint={broken => {  console.log(broken);  }}
      onCollapse={(collapsed, type) => {  console.log(collapsed, type);  }} 
      >
      <div className="logo text-white text-center py-3">Logo Here</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
           {/*  Menue item started here */}
            {/*  Sub-Menue 1*/}
           <SubMenu key="sub1" title="Independent Component">
                    <Menu.Item key="1"> 
                            <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2"> 
                            <Link to="/header">Header</Link>
                    </Menu.Item>
                    <Menu.Item key="3"> 
                             <Link to="/footer">Footer</Link>
                    </Menu.Item>
            </SubMenu>
             {/*  Sub-Menue 2*/}
           <SubMenu key="sub2" title="Pages">
                    <Menu.Item key="4"> 
                            <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="5"> 
                            <Link to="/header">Header</Link>
                    </Menu.Item>
                    <Menu.Item key="6"> 
                             <Link to="/footer">Footer</Link>
                    </Menu.Item>
            </SubMenu>
             {/*  Sub-Menue 3*/}
           <SubMenu key="sub3" title="Pages">
                    <Menu.Item key="7"> 
                            <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="8"> 
                            <Link to="/header">Header</Link>
                    </Menu.Item>
                    <Menu.Item key="9"> 
                             <Link to="/footer">Footer</Link>
                    </Menu.Item>
            </SubMenu>
            
            
           {/*  LogOut */}
             <Menu.Item  key="/app/logout" danger onClick={() => showConfirm()}  defaultActiveFirst
            className  style={{  marginTop: '"15px"', fontSize: "1.2rem",  }} icon={<LogoutOutlined />} >
          <Link to="/">LogOut</Link>
        </Menu.Item>

      </Menu>
    </Sider>
    <Layout>
      {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '10px 10px', }}>
        <div className="site-layout-background" style={{ padding: 24,minHeight:"90vh",height:"auto" }}>
          <Routes/>
        </div>
      </Content>
    </Layout>
  </Layout>
     {/* ****************** Page Ended Here *******************/}
    </React.Fragment>
  );
}

export default Dashboard;
