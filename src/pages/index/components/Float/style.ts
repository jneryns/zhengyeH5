import { CSSProperties } from 'react';

export const hump = (name: string): string => {
  return name.replace(/-([a-z])/g, m => m.toUpperCase()).replace('-', '');
};

export const mergeStyle = (
  style: string | CSSProperties | undefined,
  extra: CSSProperties,
): CSSProperties => {
  const styles: CSSProperties = {};
  if (typeof style === 'string') {
    style.split(';').forEach(s => {
      const [k, v] = s.split(':');
      if (k && v) {
        styles[hump(k.trim())] = `${v.trim()}`;
      }
    });
  } else if (typeof style === 'object') {
    Object.assign(styles, style);
  }
  Object.assign(styles, extra);
  return styles;
};
