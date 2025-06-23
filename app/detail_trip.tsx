import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type FacilityIcon = keyof typeof Ionicons.glyphMap;

export default function DetailTrip() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const insets = useSafeAreaInsets();

    const facilities: { name: string; icon: FacilityIcon }[] = [
        { name: 'Transport', icon: 'bus-outline' },
        { name: 'Simaksi', icon: 'document-text-outline' },
        { name: 'Coffee Break', icon: 'cafe-outline' },
        { name: 'Meals during trekking', icon: 'restaurant-outline' },
        { name: 'Camping tents', icon: 'home-outline' }, // Placeholder icon
        { name: 'Officially recognized mountain guide', icon: 'shield-checkmark-outline' },
        { name: 'Guide during trekking', icon: 'walk-outline' },
        { name: 'P3K', icon: 'medkit-outline' },
    ];

    return (
        <View className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={{ uri: `https://picsum.photos/seed/${params.name}/400/600` }}
                    className="w-full h-[500px] rounded-b-3xl overflow-hidden"
                >
                    <View className="flex-row justify-between items-center p-6" style={{ paddingTop: insets.top }}>
                        <TouchableOpacity onPress={() => router.back()} className="bg-white/80 rounded-full p-2">
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-white/80 rounded-full p-2">
                            <Ionicons name="heart-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                        <View className="flex-row justify-between items-end">
                            <View className="flex-1">
                                <Text className="text-white text-3xl font-bold">{params.name}</Text>
                                <View className="flex-row items-center mt-1">
                                    <Ionicons name="location-sharp" size={18} color="white" />
                                    <Text className="text-white ml-1 text-base">{params.location}</Text>
                                </View>
                            </View>
                            <View className="flex-row h-16">
                                <Image source={{ uri: `https://picsum.photos/seed/${params.name}A/200/300` }} className="w-12 h-12 rounded-lg border-2 border-white" />
                                <View className="w-12 h-12 rounded-lg border-2 border-white bg-black/60 justify-center items-center -ml-4">
                                    <Text className="text-white font-bold">5+</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View className="p-6">
                    <View className="flex-row justify-around bg-gray-100 p-4 rounded-xl">
                        <View className="items-center">
                            <Text className="text-gray-500 text-sm">RATING</Text>
                            <View className="flex-row items-center mt-1">
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Text className="ml-1 font-bold text-base">{params.rating}</Text>
                            </View>
                        </View>
                        <View className="items-center">
                            <Text className="text-gray-500 text-sm">TYPE</Text>
                            <Text className="font-bold text-base mt-1">Open Trip</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-gray-500 text-sm">ESTIMATE</Text>
                            <Text className="font-bold text-base mt-1">3D 2N</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-gray-500 text-sm">VIA</Text>
                            <Text className="font-bold text-base mt-1">Ranupane</Text>
                        </View>
                    </View>

                    <View className="mt-6">
                        <Text className="text-xl font-bold">Description</Text>
                        <Text className="text-gray-600 mt-2 leading-6">
                            Mount Semeru or Mount Meru is a cone volcano in East Java, Indonesia. Mount Semeru is the highest mountain on the island of Java, with its peak Mahameru, 3,676 meters above sea level.
                        </Text>
                    </View>

                    <View className="mt-6">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-xl font-bold">Choose date</Text>
                            <TouchableOpacity>
                                <Ionicons name="information-circle-outline" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 -ml-6">
                            <View className="flex-row pl-6 gap-2 space-x-3">
                                <TouchableOpacity className="border border-gray-300 rounded-lg px-4 py-2">
                                    <Text>15 Dec - 20 Dec 2023</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="border border-gray-300 rounded-lg px-4 py-2">
                                    <Text>25 Dec - 30 Dec 2023</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2">
                                    <Ionicons name="calendar-outline" size={18} color="gray" />
                                    <Text className="ml-2">Choose</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <View className="mt-6">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-xl font-bold">Facilities</Text>
                            <TouchableOpacity>
                                <Ionicons name="information-circle-outline" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row flex-wrap gap-2">
                            {facilities.map((facility, index) => (
                                <View 
                                    key={index} 
                                    className="border border-gray-300 rounded-xl p-2 flex-row items-center gap-2 bg-white"
                                >
                                    <Ionicons name={facility.icon} size={24} color="gray" />
                                    <Text className="text-gray-700">{facility.name}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View className="w-[100%] h-32"></View>
                </View>
            </ScrollView>

            <View 
                className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-3xl"
                style={{
                    paddingTop: 20,
                    paddingBottom: insets.bottom,
                    paddingHorizontal: 24,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 5
                }}
            >
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text className="text-white text-2xl font-bold">
                            $80
                            <Text className="text-white/80 text-base font-normal">/person</Text>
                        </Text>
                    </View>
                    <TouchableOpacity className="bg-white rounded-full px-8 py-4">
                        <Text className="text-blue-500 text-lg font-bold">Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}