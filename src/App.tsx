import { Route, Routes } from "react-router-dom";
import Finder from "./components/Finder/Finder";
import Layout from "./components/Layout";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Dan from "./pages/Dan";
// We will create these two pages in a moment
import HomePage from "./pages/HomePage";
import Ten from "./pages/Ten";
import WorksDev from "./pages/WorksDev";
export default function App() {
  return (
    <Layout>
      <Finder></Finder>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/About Me" element={<AboutMe></AboutMe>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/Works(Dev)" element={<WorksDev></WorksDev>} />
        <Route path="/dan" element={<Dan></Dan>}></Route>
        <Route path="/ten" element={<Ten></Ten>}></Route>
      </Routes>
    </Layout>
  );
}
