import AboutHouses from "components/AboutHouses";
import ContactWithUs from "components/ContactWithUs";
import GalleryHouses from "components/GalleryHouses";
import Banner from "components/Banner";

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutHouses />
      <GalleryHouses />
      <ContactWithUs />
    </main>
  );
};

export default Home;
