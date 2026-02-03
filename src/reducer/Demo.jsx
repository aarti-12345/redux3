const initialState={
    name:["ramu","kk"]
  
  }

  export default function Demo(state=initialState,action)
  {
     switch(action.type){
      case 'SUBMIT':
        console.log("state changes" + action.payload)
        // state.name.push(action.payload)
     return {
        ...state,
        name: [...state.name, action.payload]   // ✅ return new array
      };

        default:
        return state
    }
  }
  

//   return{
//     userName:action.payload.userName,
//    }
