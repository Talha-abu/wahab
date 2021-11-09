import React, { useState } from "react";
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const Home = () => {
    const [ light, setLight ] = useState(false);
    

    const theme = () => {
        if (light === true) {
            setLight("bg-warning");
        } else {
            setLight("bg-success");
        }
    };

    const handleClick = () => {
        setClick(true);
        
    };

    

    return(
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <button onClick={handleClick}>Button</button>
                <Menu className={theme}  mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
            </Layout>
        </div>
    );
};




export default Home;