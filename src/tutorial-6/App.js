import Article from "./components/article/article";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import About from "./components/about/about";

export default function App() {
  const { pathname } = window.location;

  return (
    <div className="App">
      <Header />
      {pathname === "/" && <Main />}
      {(pathname.startsWith('/post')) && <Article id={pathname.slice(6)}/>}
      {pathname === "/about" && <About />}
      <Footer />
    </div>
  );
}
