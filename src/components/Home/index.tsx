import About from "components/About";
import Contact from "components/Contact";
import Gallery from "components/Gallery";
import Initial from "components/Initial";
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
