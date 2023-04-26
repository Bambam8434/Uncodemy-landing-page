import Nav from "./component/Nav.js"
import Banner from "./component/Banner.js"
import PlacementStat from "./component/PlacementStat.js"
import Bootcamp from "./component/Bootcamp.js"
// import Certificate from "./component/Certificate.js"
import Creator from "./component/Creator.js"
import Curriculum from "./component/Curriculum.js"
import Project from "./component/Project.js"
import Technologies from "./component/Technologies.js"
import Advantage from "./component/Advantage.js"
import Admission from "./component/Admission.js"
// import Pricing from "./component/Pricing.js"
import Learner from "./component/Learner.js"
import "./css/style.css"
import "./css/icon.css"
import Last from "./component/Last.js"
import Footer from "./component/Footer.js"
import "./App.css";
// importing components from react-router-dom package


  

function App() {
  return (
    <div>
      
  <Nav/>
  <Banner/>
  <PlacementStat/>
  <Bootcamp/>
  <Creator/>
  <Curriculum/>
  <Project/>
  <Technologies/>
  <Advantage/>
  <Admission/>
  <Learner/>
 
  
  <Last/>
  <Footer/>
    </div>
  );
}

export default App;
