import { Link, Stack } from 'expo-router';
import {Text, View} from 'react-native';

export default function NotFoundScreen() {
  return (
      <View>
        <Stack.Screen options={{ title: 'Oops!' }} />
        <Text>Not found </Text>
      </View>
  );
}
