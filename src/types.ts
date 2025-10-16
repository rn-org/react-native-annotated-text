import { type TextStyle } from 'react-native';

export interface TextSegment {
  text: string;
  style?: TextStyle;
}

export type AppendFn = (text: string) => void;
export type WithStyleFn = (style: TextStyle, fn: () => void) => void;
export type BuilderFn = (append: AppendFn, withStyle: WithStyleFn) => void;
