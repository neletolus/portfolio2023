import TextEditor from "../components/TextEditor/TextEditor";
import mdPath from "./markdown/WorksIllust.md";

const WorksIllust = () => {
  const description = mdPath;
  return <TextEditor name="Works(Illust)" content={description}></TextEditor>;
};

export default WorksIllust;
