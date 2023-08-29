import AboutHouses from "components/AboutHouses";
import Contact from "components/ContactWithUs";
import Gallery from "components/GalleryHouses";
import Initial from "components/Initial";

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
