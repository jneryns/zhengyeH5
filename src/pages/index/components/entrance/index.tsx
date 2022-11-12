import classNames from "classnames";
import { View, ViewProps, Swiper, SwiperItem, Image } from "@tarojs/components";
import { entranceList } from "./constant";
import "./index.scss";

type Props = ViewProps & {};
const Entrance = (props: Props) => {
  const { className, ...others } = props;

  return (
    <View {...others} className={classNames("entrance", className)}>
      {entranceList.map((item) => (
        <View className="item" key={item.id}>
          <Image src={item?.img} className="img" mode="aspectFill" />
          <View className="name">{item?.name}</View>
        </View>
      ))}
    </View>
  );
};

export default Entrance;
