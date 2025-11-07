import { ColorPicker, Host } from '@expo/ui/swift-ui';
import { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';

export default function Index() {
  return (
    <View>
      <Host style={{ height: 400, width: '100%' }}>
        <MyBottomSheet />
      </Host>
    </View>
  );
}

function MyBottomSheet() {
  const [color, setColor] = useState<string>('#FF0000');
  const { width } = useWindowDimensions();

  return <ColorPicker label="Select a color" selection={color} onValueChanged={setColor} />;
}
