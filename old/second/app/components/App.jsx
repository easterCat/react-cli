/**
 * Created by easterCat on 2018/6/27.
 */

import React from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import {Layout} from 'antd';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        };

        this.toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed
            })
        };
    }

    render() {
        return (
            <Layout className="layout-app">
                <Layout.Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <Sidebar/>
                </Layout.Sider>
                <Layout>
                    <Layout.Header style={{background: '#fff', padding: 0}}>
                        <Header collapsed={this.state.collapsed}
                                toggle={this.toggle}
                        />
                    </Layout.Header>
                    <Layout.Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        <Content/>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default App;