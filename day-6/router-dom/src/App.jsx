import {Link, Routes, Route } from "react-router-dom";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
function App(){
  return(
    <>
    <button>
      <Link to='/a'> A</Link>
    </button>
    <button>
    <Link to='/b'> B</Link>
    </button>
    <button>
    <Link to='/c'> C</Link>
    </button>

    <Routes>
      <Route exact path="/" element={<h1>Default pages</h1>} />
      <Route exact path="/a" element={<A />} />
      <Route exact path="/b" element={<B />} />
      <Route exact path="/c" element={<C />} />
    </Routes>

    </> 
  );
}
export default App; 