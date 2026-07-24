// components
import Header from './components/Header';
// import Hero  from './components/Hero';
import About from './components/About';
import AboutSecion from  './components/AboutSecion';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact  from './components/Contact';

const App = () => {
  return (
     <>
    <Header />
    <main>
      {/* <Hero/>       */}
      <About/>
      <AboutSecion/>
      <Skill/>      
      <Projects/>
      <Articles/>
      <Contact/>
      </main>
    </>
    );
};

export default App;