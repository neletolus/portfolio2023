import TextEditor from "../components/TextEditor/TextEditor";
import mdPath from "./markdown/AboutMe.md";

const WorksDev = () => {
  const description = mdPath;
  return <TextEditor name="Works(Dev)" content={description}></TextEditor>;
};

export default WorksDev;
