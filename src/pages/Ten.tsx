import TextEditorRight from "../components/TextEditor/TextEditorRight";
import mdPath from "./markdown/Ten.md";

const Ten = () => {
  const description = mdPath;
  return <TextEditorRight name="Ten" content={description}></TextEditorRight>;
};

export default Ten;
