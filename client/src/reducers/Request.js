// import {
//     REGISTER_SUCCESS,
//     USER_LOADED,
//     AUTH_ERROR,
//     REGISTER_FAILED,
//     LOGIN_SUCCESS,
//     LOGIN_FAILED,
//     LOGOUT

// } from "../actions/type"

// // Auth intial state
// const intialState = {
//     token:localStorage.getItem('token'),
//     isAuthenticated:null,
//     loading:false,
//     request:null
// }

// export default function(state = intialState,action) {
//     const {type,payload} =action

//     switch(type){
//         case REQUEST_LOADED:
//             return{
//                 ...state,
//                 loading:false,
//                 request:payload
//             }
//         default:
//             return state
//     }

// }
