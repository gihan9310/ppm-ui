import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { PageHeader } from 'antd';
import "./header.css"

 class Header extends Component {
    render() {
        return (
            <div>
    
                <Row>
                <Col span={24}>

                <PageHeader
                        className="site-page-header header-css"
                        onBack={() => null}
                        title="Project Manage Tool"
                        subTitle="this tool for mange your projects easy"
                        // breadcrumb={{ routes }}
                    />,
                </Col>
                </Row>

            </div>
        );
    }
}

export default Header;