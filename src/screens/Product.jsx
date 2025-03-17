import { useNavigate, useParams } from "react-router";
import data from "../constant/data.json";

const Product = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const item = data.find((item) => item.id === parseInt(id));
  return (
    <view className="black">
      <text bindtap={() => nav(-1)} className="text">
        back
      </text>
      <text className="Title">Product</text>
      <view className="container">
        <image src={item.image} className="big_image" />
        <view className="flex">
          <view>
            <text className="big_text">{item.name}</text>
            <text className="big_white">${item.price}</text>
          </view>
          <view className="button">
            <text className="buy">Buy Now</text>
          </view>
        </view>
      </view>
    </view>
  );
};

export default Product;
