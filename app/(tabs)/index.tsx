import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home Page</Text>
            <Button title="Go to intro" onPress={() => router.replace("/intro")} />
        </View>
    );
}
