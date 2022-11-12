import classNames from "classnames";
import { View, ViewProps, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.scss";

type Props = ViewProps & {};

const imgList = [
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F55402f62682e3.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670835354&t=c9d56d165af5d095dfee8c5bff77a40d",
  "https://img1.baidu.com/it/u=3009731526,373851691&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670835354&t=af37222d64daa28662a1dd2ff87fdc8f",
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
        <SwiperItem key={item}>
          <Image src={item} mode="aspectFit">1</Image>
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default Header;
