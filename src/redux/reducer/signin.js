const initialState = {
    isLogin:""
  };
  
  export default function isLogin(state = initialState, action) {
    switch(action.type){
      case "LOGIN":
        return Object.assign({},state,{
          isLogin:true
        });
      case "LOGOUT":
        return Object.assign({},state,{
          isLogin:false
    });
    default:
      return state;
  }}