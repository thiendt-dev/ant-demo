import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

export default class PaginationComponent extends Component {
    onChange = page => {
        console.log(page);
    }

    render() {
        function itemRender(current, type, originalElement) {
            if (type === 'prev') {
                return <a>Previous</a>;
            }
            if (type === 'next') {
                return <a>Next</a>;
            }
            return originalElement;
        }

        return (
            <div>
                <Pagination
                    style={{ marginTop: 100 }}
                    total={85}
                    showTotal={total => `Total ${total} items`}
                    pageSize={20}
                    defaultCurrent={1}
                />
                <br />
                <Pagination
                    total={500}
                    itemRender={itemRender}
                />
                <br />
                <Pagination
                    onChange={this.onChange}
                    total={50}
                />
            </div>
        )
    }
}
