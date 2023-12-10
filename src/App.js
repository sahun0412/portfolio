import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';




import { Footer } from "./Components/footer/footer";
import { Projects } from './Components/Projects/projects';
import { About } from './Components/About/about';
import { Interests } from './Components/Interests/interests';
import { Education } from './Components/education/education';
import { SideBar }  from "./Components/sideBar/sideBar";
import { MCarousel } from './Components/carousel/carousel';
import { Reveal } from 'react-reveal';











function App() {
  return (
    <div className="App">
      <BrowserRouter>



        <div className='side'>
        <nav class="navbar navbar-expand-lg navigation-wrap">
  <div class="container-fluid">
    
    <button class="navbar-toggler  bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon  bg-warning"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <SideBar />
    </div>
  </div>
</nav>
        </div>




        <div className="main">
          <MCarousel />
         
         <Reveal effect="fadeInUp">
         <Projects path="/projects" />
         <About path="/about"/>
         <Interests path="/interests"/>


         <Education path="/education"/>
         </Reveal>
        
            
            
            
          
          
          <Footer />
        </div>



      </BrowserRouter>

    </div>
  );
}

export default App;
