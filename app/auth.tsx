import {View, Text, Button, Image, TouchableOpacity, TextInput} from "react-native";

import { useRouter } from "expo-router";
import {useState} from "react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const handlePress = async () => {

    }
    return (
        <View className="relative flex-1 bg-blue-500">
            <View className="flex items-center justify-center">
                <Image className="size-[400px] " source={require("../assets/auth/sign_in.png")} resizeMode={"contain"} />
            </View>
            <View className="absolute bg-white rounded-t-[30px] bottom-0 w-full h-[60%] py-8 px-8 flex items-center ">
                <View className="w-full ">
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
    );
}
