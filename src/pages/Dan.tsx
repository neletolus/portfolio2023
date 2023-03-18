import TextEditorRight from "../components/TextEditor/TextEditorRight";
import mdPath from "./markdown/Dan.md";

const Dan = () => {
  const description = mdPath;
  return <TextEditorRight name="Dan" content={description}></TextEditorRight>;
};

export default Dan;
