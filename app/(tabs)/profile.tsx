import {View, Text, Button} from "react-native";
import {router} from "expo-router";

export default function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile Page</Text>
            <Button title="Go to auth" onPress={() => router.replace("/auth")} />
        </View>
    );
}
