import classNames from 'classnames';
import {
  CSSProperties,
  PropsWithChildren,
  useLayoutEffect,
  useState,
} from 'react';
import { nextTick } from '@tarojs/taro';
import { Image, ITouchEvent, View, ViewProps } from '@tarojs/components';
import { mergeStyle } from './style';
import './index.scss';

export type YCFloatProps = ViewProps &
  PropsWithChildren<{
    mask?: boolean;
    closeable?: boolean;
    visible?: boolean;
    onClose?: (auto?: boolean) => void;
  }>;

const Float = (props: YCFloatProps) => {
  const {
    className,
    children,
    closeable,
    visible,
    style,
    mask,
    onClose,
    ...others
  } = props;

  const [show, setShow] = useState(visible);
  const [animShow, setAnimShow] = useState(false);

  useLayoutEffect(() => {
    if (show !== visible) {
      visible ? startAnimShow() : startAnimHide();
    }
  }, [visible]);

  useLayoutEffect(() => {
    if (visible) {
      startAnimShow();
    }
  }, []);

  const onHide = () => {
    setShow(false);
    nextTick(() => {
      onClose?.();
    });
  };

  const startAnimShow = () => {
    setShow(true);
    setAnimShow(true);
  };

  const startAnimHide = () => {
    setAnimShow(false);
    setTimeout(() => {
      onHide();
    }, 200);
  };

  if (!show) return <View />;

  const onDismiss = (e: ITouchEvent) => {
    e.stopPropagation();
    if (closeable) {
      startAnimHide();
    }
  };

  const maskStyle: CSSProperties = {
    display: mask ? 'block' : 'none',
    opacity: show ? 1 : 0,
  };

  const contentStyle = mergeStyle(style, {
    transition: animShow
      ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
      : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
  });

  const contentClass = classNames(
    'yc-float__content',
    {
      'yc-float__content--active': animShow,
    },
    className,
  );

  return (
    <View className="yc-float">
      <View className="yc-float__mask" onClick={onDismiss} style={maskStyle} />
      <View className={contentClass} style={contentStyle} {...others}>
        {children}
      </View>
    </View>
  );
};

Float.defaultProps = {
  mask: true,
  closeable: true,
};

export default Float;
