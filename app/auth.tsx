import { Image, Keyboard, KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

export default function Auth() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlePress = async () => {
        Keyboard.dismiss();
    }
    return (
        <View
            className="flex-1"
        >
            <StatusBar barStyle="light-content" />
            <View className="flex-1">
                <View className="h-[30%] bg-blue-500">
                    <Image
                        className="w-full h-full"
                        source={require("../assets/auth/sign_in.png")}
                        resizeMode="contain"
                    />
                </View>

                {/* Bottom white section */}
                <View className="flex-1 bg-white rounded-t-[24px] -mt-5 py-8 px-8">
                    <View className="w-full">
                        <Text className="text-3xl font-bold">Login</Text>
                        <Text className="pt-4 pb-8">Please enter a valid account</Text>
                    </View>
                    <View className="w-full">
                        <Text className="text-base mb-2 font-medium">Email</Text>
                        <TextInput
                            className="h-12 border border-gray-300 w-full mb-6 px-4 rounded-full"
                            placeholder="youremails@yahoo.com"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text className="text-base mb-2 font-medium">Password</Text>
                        <TextInput
                            className="h-12 border border-gray-300 w-full px-4 rounded-full"
                            placeholder="********"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={handlePress}
                        className="bg-blue-500 rounded-full mt-8 py-4 px-8 self-center w-full"
                    >
                        <Text className="text-white text-center font-semibold">
                            {isLogin ? "Login" : "Register"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
