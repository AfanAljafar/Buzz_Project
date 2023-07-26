import { Header } from "..";

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Template;
