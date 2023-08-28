import Initial from "components/initial";
import style from "./home.module.scss";
import About from "components/about";
import Gallery from "components/gallery";
import Contact from "components/contact";

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
