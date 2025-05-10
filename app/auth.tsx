import { Image, Keyboard, KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

export default function Auth() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlePress = async () => {
        Keyboard.dismiss();
        router.replace('/(tabs)')
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
        >
            <StatusBar barStyle="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1">
                    <View className="h-[30%] bg-blue-500">
                        {isLogin? <Image
                            className="w-full h-full"
                            source={require("../assets/auth/sign_in.png")}
                            resizeMode="contain"
                        />: <Image
                            className="w-full h-full"
                            source={require("../assets/auth/sign_up.png")}
                            resizeMode="contain"
                        />
                        }
                    </View>

                    {/* Bottom white section */}
                    <View className="flex-1 bg-white rounded-t-[24px] -mt-5 py-8 px-8">
                        <View className="w-full">
                            <Text className="text-3xl font-bold">{isLogin? 'Login': 'Register'}</Text>
                            <Text className="pt-4 pb-8">{isLogin?'Please enter a valid account': 'Create an account ' }</Text>
                        </View>
                        <View className="w-full">
                            {
                                !isLogin && <>
                                        <Text className="text-base mb-2 font-medium">Name</Text>
                                        <TextInput
                                            className="h-12 border border-gray-300 w-full mb-6 px-4 rounded-full"
                                            placeholder="username"
                                            value={email}
                                            onChangeText={setEmail}
                                        />
                                    </>
                            }
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
                        <View className="flex flex-row items-center justify-center my-6">
                            <View className="h-[1px]  bg-gray-500 flex-grow"></View>
                            <Text className="mx-4 text-sm font-medium text-gray-500">OR</Text>
                            <View className="h-[1px] bg-gray-500 flex-grow"></View>
                        </View>
                        <View className="flex flex-row items-center justify-center">
                            <Text className="text-sm text-gray-500 mr-1">{isLogin ? 'Do not have an account?' : 'Have an account?'} </Text>
                            <Text className="underline" onPress={()=> setIsLogin(!isLogin)}>{isLogin ? "Register" : "Login"}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
