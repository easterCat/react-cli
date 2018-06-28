/**
 * Created by easterCat on 2018/6/27.
 */
import React from 'react';
import Table from 'antd/lib/Table';

class Content extends React.Component {
    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '电话号码',
            dataIndex: 'number',
            key: 'number',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }];


        const data = [];
        for (let i = 1; i < 15; i++) {
            let obj = {
                name: 'doudou',
                age: 32,
                number: 123456789,
                email: '123456789@163.com',
            };
            obj.key = i;
            data.push(obj);
        }

        return (
            <div className="content">
                <Table columns={columns} dataSource={data}/>
            </div>
        )
    }
}
export default Content;