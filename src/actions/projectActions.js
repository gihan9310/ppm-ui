import axios from "axios";
import { DELETE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./types";
import { message } from 'antd';

export const createProject=(project ,history) =>async dispatch =>{

    try {
        const res = await axios .post("http://localhost:8090/project/create",project);
        history.push("/dashboard")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
        
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
        
    }

}

export const getAllProjects=() =>async dispatch =>{

        const res = await axios .get("http://localhost:8090/project/all");
        console.log('res',res);
        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        });

}

export const getProject=(projectId,history) =>async dispatch =>{

    try {

        const res = await axios.get(`http://localhost:8090/project/find-by/${projectId}`);
    console.log('res',res);
    dispatch({
        type: GET_PROJECT,
        payload: res.data
    });
        
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

    

}

export const deleteProject=(projectId) =>async dispatch =>{

    try {

    const res = await axios.delete(`http://localhost:8090/project/${projectId}`);
    console.log('res',res);
    dispatch({
        type: DELETE_PROJECT,
        payload: projectId
    });
        
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

    

}

