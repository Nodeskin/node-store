import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";

//Routes allow the app to register the route level components that
// will then render the component that matches the specific component

const ShopRoute = () => {
  return <h2>I AM SHOP COMP</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="shop" element={<ShopRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
