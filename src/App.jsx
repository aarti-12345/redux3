import { Route, Routes} from 'react-router-dom';



import PageFirst from './component/pageOne';
import PageTwo from './component/pageTwo';
import PageThree from './component/pageThree';

function App() {
  return (
     <div>
 
<Routes>
  <Route exact path="/" element={<PageFirst/>} />
  <Route  path="/pagetwo" element={<PageTwo/>} /> 
<Route  path="/pagethree" element={<PageThree/>} />

</Routes>

    </div>
  );
}

export default App;
