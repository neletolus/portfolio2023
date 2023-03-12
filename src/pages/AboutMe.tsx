import TextEditor from "../components/TextEditor/TextEditor";
import mdPath from "./markdown/AboutMe.md";

const AboutMe = () => {
  const description = mdPath;
  return <TextEditor name="About Me" content={description}></TextEditor>;
};

export default AboutMe;
