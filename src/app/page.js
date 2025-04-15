import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectSection';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import Socials from './components/socials';


export default function Home() {
  return (
      <div className="page-">
        <Socials />
        <Hero />
        <SideNav />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
        <CustomCursor />
      </div>
  );
}