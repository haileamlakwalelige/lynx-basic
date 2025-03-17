import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();
  return (
    <view>
      <text>Hello world!</text>
      <text bindtap={() => nav("/")} className="Title ">
        App
      </text>
      <text bindtap={() => nav("/product")} className="Title">
        Product
      </text>
    </view>
  );
};

export default Home;
