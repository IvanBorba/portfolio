import { Toaster } from "react-hot-toast";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Header />
    </div>
  );
};

export default App;
