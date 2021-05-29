import React  from 'react'
import { Row } from 'antd';
import { Button } from 'antd';
import './createProject.css'
import {PlusCircleOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";


const CreateProjectButton =()=>{

   return( 
      <Row className='create-project-button'>
          <Link type="primary" to="/addProject"> <Button  type="primary" target='/addProject' shape="round" icon={<PlusCircleOutlined />}  > Create Project</Button> </Link>
      </Row>
    );
} 

export default CreateProjectButton
