import About from "components/about";
import Contact from "components/contact";
import Gallery from "components/gallery";
import Initial from "components/initial";
import style from "./home.module.scss";

const Home = () => {
  return (
    <main className={style.main}>
      <Initial />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;
