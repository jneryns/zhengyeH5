import classNames from 'classnames';
import { View, ViewProps,Icon } from '@tarojs/components';
import './index.scss';

type Props = ViewProps & {};

const Header = (props: Props) => {
  const { className, ...others } = props;

  return (
    <View {...others} className={classNames('headers', className)}>
      <View />
      <View>早上好！张先生</View>
        <Icon size='24' type='info' />
    </View>
  );
};

export default Header;
