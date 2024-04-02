import { Outlet } from "react-router-dom";
import Diretory from "../../components/directory/diretory.component";

//Outlet allows us to leverage the pattern matching in the nesting structure 
//in other to dynamically change portion of our codes based on the routes and nested route

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <div>
    <Diretory categories = {categories} />
    <Outlet/>
    </div>
  );
};

export default Home;