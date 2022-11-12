import classNames from "classnames";
import { useState } from "react";
// import { Dialog } from "antd-mobile";
import Taro from "@tarojs/taro";
import { View, ViewProps, Image } from "@tarojs/components";
import { actionList } from "./constant";
import Float from "../Float";
import "./index.scss";

type Props = ViewProps & {};

const Content = () => (
  <View className="dialog">
    <View className="dialogTitle">功能B</View>
    <View className="dialogContent">
      {actionList.map((item) => (
        <View className="modalItem" key={item.id}>
          <Image src={item?.img} className="img" mode="aspectFit" />
          <View className="name">{item?.name}</View>
        </View>
      ))}
    </View>
  </View>
);
const Action = (props: Props) => {
  const { className, ...others } = props;
  const [isShowB, setShowB] = useState<boolean>(false);
  return (
    <>
      <View {...others} className={classNames("action", className)}>
        {actionList.map((item, index) => (
          <View
            key={item.id}
            className="item"
            onClick={() => {
              if (index === 1) {
                setShowB(true);
              } else {
                Taro.showToast({
                  title: "请点击功能B",
                  icon: "error",
                  duration: 800,
                });
              }
            }}
          >
            <Image src={item?.img} className="img" mode="aspectFit" />
            <View className="name">{item?.name}</View>
          </View>
        ))}
      </View>

      <Float visible={isShowB} onClose={()=>setShowB(false)}>{Content()}</Float>
    </>
  );
};

export default Action;
