import React, { Component } from 'react'
import { Icon } from "@blueprintjs/core";
import './dashbord.css';
import { Row, Col } from 'antd';
import CreateProjectButton from './projects/CreateProjectButton';
import ProjectItem from './projects/ProjectItem';
import { connect } from 'react-redux';
import { getAllProjects } from '../actions/projectActions';
import PropTypes from "prop-types";


 class Dashboard extends Component {


    componentDidMount(){
        this.props.getAllProjects();
    }


    render() {



        const { projects } = this.props.project;
    

        return (

            <Row className ='main-div'>
            <Col span={2}></Col>
            <Col span={20}>

            <Row>
                <CreateProjectButton  />
            </Row> 

            <Row>
                
                <Col span={24}>

                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
                    
                </Col>
                

            </Row>

            </Col>
            <Col span={2}></Col>
          </Row>

            	
            );
    }
}

Dashboard.propTypes = {
    project: PropTypes.object.isRequired,
    getAllProjects: PropTypes.func.isRequired
};

const mapStateToProps =state=>({
    project: state.project

});

export default connect(mapStateToProps,{getAllProjects})(Dashboard);
