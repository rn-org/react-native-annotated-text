import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import type { AnnotatedTextProps, TextSegment } from './types';
import { buildAnnotatedString } from './buildAnnotatedString';

const AnnotatedText: React.FC<AnnotatedTextProps> = ({ annotatedString, containerStyle }) => {
    const segments: TextSegment[] = buildAnnotatedString(annotatedString);

    return (
        <View style={[containerStyle, { flexDirection: 'row', flexWrap: 'wrap' }]}>
            {segments.map((part, index) => (
                part.gradient && part.gradient.length > 1 ? (
                    <MaskedView
                        key={index}
                        style={{ flexShrink: 0 }}
                        maskElement={<Text style={part.style}>{part.text}</Text>}
                    >
                        <LinearGradient colors={part.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <Text style={[part.style, { opacity: 0 }]}>{part.text}</Text>
                        </LinearGradient>
                    </MaskedView>
                ) : (
                    <Text key={index} style={part.style}>{part.text}</Text>
                )
            ))}
        </View>
    );
};

export { AnnotatedText };
