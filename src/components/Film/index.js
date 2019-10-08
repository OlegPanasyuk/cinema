import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Row, Col, Descriptions } from 'antd';

class Film extends Component {
    state ={

    }
    
    render() {

        const { match } = this.props;
        console.log(match);
        return (
            <Row>
                <Col>
                    <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" />
                    <Descriptions>
                    
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        {match.params.id}
                    </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        );
    }
}

Film.propTypes = {

};

export default Film;