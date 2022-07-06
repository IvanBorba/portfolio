import { Toaster } from "react-hot-toast";
import Router from "./pages";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Router />
    </div>
  );
};

export default App;
