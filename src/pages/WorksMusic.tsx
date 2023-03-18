import TextEditor from "../components/TextEditor/TextEditor";
import mdPath from "./markdown/WorksMusic.md";

const WorksMusic = () => {
  const description = mdPath;
  return <TextEditor name="Works(Music)" content={description}></TextEditor>;
};

export default WorksMusic;
