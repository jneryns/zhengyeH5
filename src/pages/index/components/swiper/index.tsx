import classNames from "classnames";
import { View, ViewProps, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.scss";

type Props = ViewProps & {};

const imgList = [
  {
    id: 1,
    name: "正也科技",
  },
  {
    id: 2,
    name: "希望贵公司",
  },
  {
    id: 3,
    name: "给个面试机会",
  },
];

const Header = (props: Props) => {
  const { className, ...others } = props;

  return (
    <Swiper
      {...others}
      className={classNames("swiper", className)}
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      indicatorDots
      autoplay
    >
      {imgList.map((item) => (
        <SwiperItem key={item.id} >
          <View className="bg">{item.name}</View>
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default Header;
