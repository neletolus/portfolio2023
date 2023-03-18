import { Route, Routes } from "react-router-dom";
import Finder from "./components/Finder/Finder";
import Layout from "./components/Layout";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Dan from "./pages/Dan";
// We will create these two pages in a moment
import HomePage from "./pages/HomePage";
import WorksDev from "./pages/WorksDev";
import WorksIllust from "./pages/WorksIllust";
import WorksMusic from "./pages/WorksMusic";
export default function App() {
  return (
    <Layout>
      <Finder></Finder>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/About Me" element={<AboutMe></AboutMe>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/Works(Dev)" element={<WorksDev></WorksDev>} />
        <Route path="/Works(Music)" element={<WorksMusic></WorksMusic>} />
        <Route path="/Works(Illust)" element={<WorksIllust></WorksIllust>} />
        <Route path="/dan" element={<Dan></Dan>}></Route>
        <Route path="/ten" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Layout>
  );
}
