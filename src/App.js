import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
// import SignIn from "./routes/sign-in/sign-in.components";
import Authentication from "./routes/authetnication/authentication.components";
import Shop from "./routes/shop/shop.component";
//Routes allow the app to register the route level components that
// will then render the component that matches the specific component


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
