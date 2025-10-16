import React from 'react';
import { Text, type TextStyle } from 'react-native';
import { buildAnnotatedString } from './buildAnnotatedString';
import type { BuilderFn, TextSegment } from './types';

interface AnnotatedTextProps {
    build: BuilderFn;
    containerStyle?: TextStyle;
}

const AnnotatedText: React.FC<AnnotatedTextProps> = ({ build, containerStyle }) => {
    const parts: TextSegment[] = buildAnnotatedString(build);

    return (
        <Text style={containerStyle}>
            {parts.map((part, index) => (
                <Text key={index} style={part.style}>
                    {part.text}
                </Text>
            ))}
        </Text>
    );
};

export { AnnotatedText };
