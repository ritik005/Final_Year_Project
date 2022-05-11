import { combineReducers } from 'redux';
import validation from "./validation"
import register from "./auth"
import profile from "./Profile"
import mentor from "./MentorAuth"
import request from  "./Request"



export default combineReducers({
    validation,
    register,
    profile,
    mentor,
    request
});


