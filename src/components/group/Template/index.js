import { Header } from "..";

const Template = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
};

export default Template;
