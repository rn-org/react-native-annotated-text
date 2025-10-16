import { type TextStyle } from 'react-native';
import { type TextSegment, type BuilderFn } from './types';

export const buildAnnotatedString = (builder: BuilderFn): TextSegment[] => {
  const parts: TextSegment[] = [];

  const append = (text: string) => {
    parts.push({ text });
  };

  const withStyle = (style: TextStyle, fn: () => void) => {
    const startIndex = parts.length;
    fn();
    const styled = parts.splice(startIndex);
    styled.forEach((part) => {
      parts.push({
        ...part,
        style: {
          ...(part.style || {}),
          ...style,
        },
      });
    });
  };

  builder(append, withStyle);
  return parts;
};
