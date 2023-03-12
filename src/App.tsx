import { Route, Routes } from "react-router-dom";
import Finder from "./components/Finder/Finder";
import Layout from "./components/Layout";
import AboutMe from "./pages/AboutMe";
// We will create these two pages in a moment
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <Layout>
      <Finder></Finder>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/About Me" element={<AboutMe></AboutMe>} />
      </Routes>
    </Layout>
  );
}
