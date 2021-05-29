import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Form, Input, Button  } from 'antd';
import '../css/addProject.css'
import { DatePicker} from 'antd';
import { connect } from 'react-redux';
import { getProject,createProject } from '../../actions/projectActions';
import PropTypes from "prop-types";
import './add_project.css'
import moment from 'moment';
import { LeftCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;

 class UpdateProject extends Component {

    constructor() {
        super();

        this.state = {
            id:'',
            projectName: '',
            projectId:'',
            description: '',
            startDate:'',
            endDate:'',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeX2 =this.onChangeX2.bind(this)
        this.onChangeX =this.onChangeX.bind(this);
        this.goBack =this.goBack.bind(this);
    }
  

    componentDidMount(){

        const{id} =this.props.match.params;
        this.props.getProject(id,this.props.history);
    }


    componentWillReceiveProps(nextProps) {
        
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            projectName,
            projectId,
            description,
            startDate,
            endDate,
          } = nextProps.project;
      
          this.setState({
            id,
            projectName,
            projectId,
            description,
            startDate:moment(startDate),
            endDate:moment(endDate),
          });

        

        //   this.setState({ "startDate": '2020-12-15' });
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
     
      }


  onSubmit(e) {
         console.log(e);
    e.preventDefault();
    const newProject = {
      id:this.state.id,
      projectName: this.state.projectName,
      projectId: this.state.projectId,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,

    };
    console.log(newProject);
    this.props.createProject(newProject, this.props.history);
  }
    

   onChangeX2(time, timeString) {
    this.setState({ "startDate": time });
  }

  onChangeX(time, timeString) {
    this.setState({ "endDate": time });
  }

  goBack=()=>{
    this.props.history.push("/dashboard")
  }

  resetForm = (e) => {
    this.setState({ "startDate": ''});
    this.setState({ "endDate": ''});
    this.setState({ "projectName": ''});
    this.setState({ "projectId": ''});
    this.setState({ "description": ''});
    this.setState({"errors":{}})
  }


    render() {

        const { errors } = this.state;

        return (
        
            <div className ="main-dive">

            <Row>
               <Col span={2} className='back_button' > </Col>
               <Col span={2} className='back_button'>   <Button onClick ={this.goBack} icon={<LeftCircleOutlined />} shape="round" type="primary" block> Back</Button> </Col>
               <Col span={16} > <h1>Update Project Information</h1></Col>
               <Col span={4} ></Col>
            </Row>
             
              

              <Row>
                  <Col span={4} >
                  </Col>
                  <Col span={12} >

              <form onSubmit={this.onSubmit} ref>

                  <Row className='form-row'>
                    <Col  className='form-label' xs={24} sm={12} md={12} lg={12} xl={12}><label>Project Name <span className='require'>*</span> :  </label></Col>
                    <Col className='form-input'  xs={24} sm={12} md={12} lg={12} xl={12}><Input    name="projectName" value={this.state.projectName} onChange={this.onChange} /> <span className='err_mesg'>{errors.projectName}</span></Col>
                  </Row>

                  <Row className='form-row'>
                    <Col  className='form-label' xs={24} sm={12} md={12} lg={12} xl={12}><label>Project Id <span className='require'>*</span> : </label></Col>
                    <Col className='form-input' xs={24} sm={12} md={12} lg={12} xl={12}><Input readOnly={true} name="projectId" value={this.state.projectId} onChange={this.onChange} /> <span className='err_mesg'>{errors.projectId}</span></Col>
                  </Row>

                  <Row className='form-row'>
                    <Col  className='form-label' xs={24} sm={12} md={12} lg={12} xl={12}><label>Project Description <span className='require'>*</span> : </label></Col>
                    <Col className='form-input' xs={24} sm={12} md={12} lg={12} xl={12}> <TextArea rows={4} name="description" value={this.state.description} onChange={this.onChange} /> <span className='err_mesg'>{errors.description}</span></Col>
                  </Row>

                  <Row className='form-row'>
                    <Col  className='form-label' xs={24} sm={12} md={12} lg={12} xl={12}><label>Project Start Date : </label></Col>
                    <Col className='form-input' xs={24} sm={12} md={12} lg={12} xl={12}><DatePicker name="startDate" value={this.state.startDate} onChange={this.onChangeX2}  defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></Col>
                  </Row>

                  <Row className='form-row'>
                    <Col  className='form-label' xs={24} sm={12} md={12} lg={12} xl={12}><label>Project End Date : </label></Col>
                    <Col className='form-input' xs={24} sm={12} md={12} lg={12} xl={12}><DatePicker name="endDate" value={this.state.endDate} onChange={this.onChangeX} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></Col>
                  </Row>

                  <Row className='form-row'>

                  <Col  className='form-label' xs={0} sm={0} md={8} lg={8} xl={8}>  </Col>
                  <Col  className='form-label' xs={0} sm={0} md={8} lg={8} xl={8}>  </Col>

                     <Col  className='form-label' xs={12} sm={12} md={4} lg={4} xl={4}>
                     <Button onClick ={this.onSubmit}  type="primary" block> Update </Button>
                    </Col>
                      <Col  className='form-label' xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Button type="dashed" block onClick={this.resetForm}> Reset </Button>
                    </Col>

                  </Row>


                  </form>
                  </Col>
                  <Col span={8} >

                  </Col>
              </Row>,

          </div>

            )
    }
}

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
 const mapStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
});
  

  export default connect(
    mapStateToProps,
    { getProject,createProject }
  )(UpdateProject);

// export default UpdateProject;
