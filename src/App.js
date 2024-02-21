import './index.css' 
import Nav from './components/Nav'
import Content from './components/Content'
import ServiceContent from './components/Services/ServiceContent'
import ServiceBody from './components/Services/ServiceBody'
import HeroImage from './components/HeroImage';
import Intro from './components/Testimonials/Intro'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="Main">
      <Nav /> 
      
      <div className='Hero_section flex py-[100px] bg-[#f1f5f9]'>
        <Content /> 
        <HeroImage /> 
      </div>

      <div className='service_section flex items-center py-[100] bg-[#e2e8f0]'>
        <ServiceContent /> 
        <ServiceBody /> 
      </div> 

      <div className='service_section py-[100]'>
        <Intro /> 
        <Testimonials /> 
      </div> 

      <div className='contact_section relative flex justify-center items-center h-[60vh]'>

        <div className='absolute top-[110px] w-[100%] h-[30vh] bg-green-700 -z-100'>
          frgtf
        </div>

        <Contact /> 
      </div>
    </div> 
  );
} 

export default App;
