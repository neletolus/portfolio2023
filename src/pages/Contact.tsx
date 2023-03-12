import TextEditor from "../components/TextEditor/TextEditor";
import mdPath from "./markdown/Contact.md";

const Contact = () => {
  const description = mdPath;
  return <TextEditor name="Contact" content={description}></TextEditor>;
};

export default Contact;
