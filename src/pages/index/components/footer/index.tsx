import classNames from "classnames";
import { View, ViewProps ,Icon} from "@tarojs/components";
import "./index.scss";

type Props = ViewProps & {};
const Footer = (props: Props) => {
  const { className, ...others } = props;

  return (
    <View {...others} className={classNames("footer", className)}>
      <View className="item">
        <Icon size='20' type='info'className="icon"/>
        <View>工作</View>
      </View>
      <View className="item">
        <Icon size='20' type='waiting'className="icon"/>
        <View>助手</View>
      </View>
      <View className="item">
        <Icon size='60' type='success' className={classNames("icon","addIcon")}/>
      </View>
      <View className="item">
        <Icon size='20' type='download'className="icon"/>
        <View>分析</View>
      </View>
      <View className="item">
        <Icon size='20' type='search'className="icon"/>
        <View>我的</View>
      </View>
    </View>
  );
};

export default Footer;
