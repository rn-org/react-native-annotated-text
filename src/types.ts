import { type TextStyle } from 'react-native';

export interface TextSegment {
  text: string;
  style?: TextStyle;
  gradient?: string[];
}

export type AppendFn = (text: string) => void;
export type WithStyleFn = (style: TextStyle, fn: () => void) => void;
export type BuilderFn = (append: AppendFn, withStyle: WithStyleFn) => void;

export interface AnnotatedTextProps {
  annotatedString: (append: (text: string) => void, withStyle: (style: TextStyle, fn: () => void, gradient?: string[]) => void) => void;
  containerStyle?: TextStyle;
}