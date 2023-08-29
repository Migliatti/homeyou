import Contact from "components/Contact";
import Gallery from "components/Gallery";
import Initial from "components/Initial";
import AboutHouses from "components/AboutHouses";

const Home = () => {
  return (
    <main>
      <Initial />
      <AboutHouses />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;
