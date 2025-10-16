import { AnnotatedText } from '@rn-org/react-native-annotated-text';
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ padding: 40 }}>
      <AnnotatedText
        build={(append, withStyle) => {
          withStyle({ color: 'blue' }, () => append('H'));
          append('ello ');
          withStyle({ fontWeight: 'bold', color: 'red' }, () => append('W'));
          append('orld');
        }}
        containerStyle={{ marginTop: 100, fontSize: 24 }}
      />
    </View>
  );
};

export default App;
