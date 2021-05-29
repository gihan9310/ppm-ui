import React, { Component } from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import "./projectItem.css"
import { Button } from 'antd';
import { DeleteOutlined ,FormOutlined ,CheckCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { deleteProject } from '../../actions/projectActions';
import { connect } from 'react-redux';



 class ProjectItem extends Component {


    onDeleteClick = id => {
        if(window.confirm('Do you want delete this project ? ')){
            this.props.deleteProject(id);
        }else{
            console.log('No Need to delete.');
        }
        
      };
    

    render() {

        const {project}=this.props

        return (

                <Card className ='item-card'>
                    <Row>
                        <Col span={6}><label className='class-projectId'>{project.projectId}</label></Col>
                    
                        <Col span={10}>

                        <label className='project-name'>{project.projectName}</label><br></br>
                        <label className='project-description'>{project.description}</label>

                        </Col>
                        <Col span={8}>

                            <Row>
                                <Col span={24}> <Link to='#'> <Button type="primary" block icon={<FormOutlined  />} > Project Board</Button></Link></Col>
                                <Col span={24}> <Link to={`/updateProject/${project.projectId}`}> <Button block icon={<CheckCircleOutlined  />} >Update Project Information</Button ></Link></Col>
                                <Col span={24}> <Link to='#'> <Button onClick={this.onDeleteClick.bind( this, project.projectId)} type="danger" block icon={<DeleteOutlined  />} >Delete Project</Button></Link></Col>
                            </Row>

                        </Col>
                    </Row>
                    
                </Card>




        )
    }
}

ProjectItem.propTypes = {
    deleteProject: PropTypes.func.isRequired,
};

export default connect(null,{deleteProject}) (ProjectItem)
