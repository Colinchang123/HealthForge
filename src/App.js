import { Routes, Route } from 'react-router-dom';
import DoctorLogin from './DoctorLogin';
import Home from './Home.jsx';
import Generic from './Generic.jsx';
import Visualizations from './Visualizations.jsx';
import Data from './Data.jsx';
import FaceRecognition from './FaceRecognition.jsx';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<DoctorLogin />} />
          <Route path="/FaceRecognition" element={<FaceRecognition />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Generic" element={<Generic />} />
          <Route path="/Visualizations" element={<Visualizations />} />
          <Route path="/Data" element={<Data />} />
       </Routes>
    </>
 );
};

export default App;

