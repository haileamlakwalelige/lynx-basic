import { useNavigate } from "react-router";

const Product = () => {
  const nav = useNavigate();
  return (
    <view>
      <text>Products</text>
      <text bindtap={() => nav("/")} className="Title">
        App
      </text>
      <text bindtap={() => nav("/home")} className="Title">
        Home
      </text>
    </view>
  );
};

export default Product;
