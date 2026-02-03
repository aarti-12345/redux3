// import React, { useState } from "react";
// import { useDispatch,useSelector } from "react-redux";
// import { Link } from "react-router";


// function PageFirst(){
//      const[name,setName]=useState()
//      const[storeState,setStoreState] = useState(useSelector(state => state))
//     const[value , setvalue] = useState(storeState.name)
//     const dispatch= useDispatch()

    
//         function hchange(e)
//         {
//           setName(e.target.value);
//         }
//         function handleOne(){
//           alert(name)
//             dispatch( {type:'SUBMIT',payload:name});
//         }

//     return(
//         <>
//         <div>
//             <h1>Welcome to List</h1>

//             Name <input type="text" onChange={hchange} />

//             <button  onClick={handleOne}>Submit</button>

//             {value}
//                   <div>
//             <Link style={{margin:"10px"}} to="/pagethree">prev</Link>
//             <Link style={{margin:"10px"}} to="/pagetwo">Next</Link>
//             </div>
//         </div>
//         </>
//     )

// }

// export default PageFirst;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

function PageFirst() {
  const [name, setName] = useState("");
  const storeState = useSelector(state => state);   // ✅ no useState here
  const dispatch = useDispatch();

  function hchange(e) {
    setName(e.target.value);
  }

  function handleOne() {
    dispatch({ type: "SUBMIT", payload: name });
  }

  return (
    <>
      <div>
        <h1>Welcome to List</h1>
        Name <input type="text" onChange={hchange} />
        <button onClick={handleOne}>Submit</button>

        {/* render array values */}
        <ul>
          {storeState.name.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>

        <div>
          <Link style={{ margin: "10px" }} to="/pagethree">prev</Link>
          <Link style={{ margin: "10px" }} to="/pagetwo">Next</Link>
        </div>
      </div>
    </>
  );
}

export default PageFirst;