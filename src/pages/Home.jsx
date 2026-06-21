import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import AcademicSection from '../components/sections/AcademicSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import CodingProfilesSection from '../components/sections/CodingProfilesSection';
import JourneySection from '../components/sections/JourneySection';
import ResumeSection from '../components/sections/ResumeSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AcademicSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <CodingProfilesSection />
      <JourneySection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
};

export default Home;
