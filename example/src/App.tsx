import { AnnotatedText } from '@rn-org/react-native-annotated-text';
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ padding: 40 }}>
<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle({ fontSize: 24 }, () => append('Hello '));
    withStyle(
      { fontWeight: 'bold', fontSize: 24 },
      () => append('Gradient'),
      ['#FF0000', '#0000FF']
    );
    withStyle({ fontSize: 24 }, () => append(' World!'));
  }}
/>
    </View>
  );
};

export default App;
