import { Routes, Route } from 'react-router-dom';
import Home from './DoctorLogin';
import Home2 from './Home.jsx';
import Generic from './Generic.jsx';
import Visualizations from './Visualizations.jsx';
import Data from './Data.jsx';
import FaceRecognition from './FaceRecognition.jsx';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FaceRecognition" element={<FaceRecognition />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Generic" element={<Generic />} />
          <Route path="/Visualizations" element={<Visualizations />} />
          <Route path="/Data" element={<Data />} />
       </Routes>
    </>
 );
};

export default App;

