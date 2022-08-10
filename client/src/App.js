import Nav from "./components/Nav";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Nav />
      {element}
    </>
  );
}

export default App;
