import React, { Component } from 'react';
import { List, Avatar } from 'antd';

const data = [
    {
        src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Ant Design Title 1',
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
    },
    {
        src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Ant Design Title 2',
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
    },
    {
        src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Ant Design Title 3',
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
    },
    {
        src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Ant Design Title 4',
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
    },
];

export default class ListSimPle extends Component {
    render() {
        return (
            <List
                dataSource={data}
                renderItem={
                    item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.src} />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )
                }
            >
            </List>
        )
    }
}
