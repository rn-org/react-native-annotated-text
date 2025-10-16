import React from 'react';
import { Text, type TextStyle } from 'react-native';
import { type TextSegment } from './types';

interface AnnotatedTextProps {
    children: TextSegment[];
    containerStyle?: TextStyle;
}

const AnnotatedText: React.FC<AnnotatedTextProps> = ({ children, containerStyle }) => {
    return (
        <Text style={containerStyle}>
            {children.map((part, index) => (
                <Text key={index} style={part.style}>
                    {part.text}
                </Text>
            ))}
        </Text>
    );
};

export default AnnotatedText;
