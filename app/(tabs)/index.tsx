import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const popular_nearby = [
        {
            id: 1,
            name: "Semeru Mountain",
            location: "Malang, East Java",
            rating: 4.5,
            category: "Hiking"
        },
        {
            id: 2,
            name: "Raja Ampat",
            location: "Raja Ampat, West Papua",
            rating: 4.8,
            category: "Travel"
        },
        {
            id: 3,
            name: "Mount Bromo",
            location: "Probolinggo, East Java",
            rating: 4.7,
            category: "Hiking"
        }
    ];

    const recommended = [
        {
            id: 1,
            name: "Kerinci Mountain",
            location: "Solok, Jambi",
            rating: 4.3,
            category: "Hiking"
        },
        {
            id: 2,
            name: "Karimun Jawa Island",
            location: "Jepara, Central Java",
            rating: 4.6,
            category: "Travel"
        },
        {
            id: 3,
            name: "Dieng Plateau",
            location: "Wonosobo, Central Java",
            rating: 4.4,
            category: "Travel"
        }
    ];

    const articles = [
        {
            id: 1,
            title: "Merapi Mountain erupts again",
            author: "Adams",
            date: "9 Dec 2023",
            image: "merapi_article"
        },
        {
            id: 2,
            title: "Fun vacation in Bromo",
            author: "Adams",
            date: "15 Dec 2023",
            image: "bromo_article"
        },
        {
            id: 3,
            title: "A guide to hiking Semeru",
            author: "Jane Doe",
            date: "18 Dec 2023",
            image: "semeru_article"
        }
    ];

    return (
        <View className="flex-1 bg-gray-50" style={{paddingTop: insets.top}}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                <View className="p-6">
                    {/* Header */}
                    <View className="flex-row justify-between items-center mb-6">
                        <View>
                            <Text className="text-gray-500">Your Location</Text>
                            <Text className="text-xl font-bold">Tangerang, Kab.</Text>
                        </View>
                        <View className="flex-row items-center gap-2 space-x-4">
                            <TouchableOpacity className="relative">
                                <AntDesign name="message1" size={22} color="black" />
                                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 justify-center items-center">
                                    <Text className="text-white text-xs font-bold">2</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="settings-outline" size={28} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Search Bar */}
                    <View className="flex-row items-center bg-white rounded-full p-3 mb-6" style={{ elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 }}}>
                        <Ionicons name="search" size={20} color="gray" />
                        <TextInput placeholder="Search" className="flex-1 ml-2 text-base" />
                    </View>

                    {/* Popular Nearby */}
                    <View className="mb-6">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-xl font-bold">Popular Nearby</Text>
                            <TouchableOpacity>
                                <Text className="text-blue-500">See all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-ml-6">
                            <View className="flex-row pl-6 gap-2 space-x-4">
                                {popular_nearby.map(item => (
                                    <TouchableOpacity 
                                        key={item.id} 
                                        className="w-64 h-80 rounded-3xl overflow-hidden"
                                        onPress={() => router.push({ pathname: '/detail_trip', params: { name: item.name, location: item.location, rating: item.rating, category: item.category }})}
                                    >
                                        <Image source={{ uri: `https://picsum.photos/seed/${item.name}/400/600` }} className="w-full h-full absolute" />
                                        <View className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1">
                                            <Text className="font-semibold">{item.category}</Text>
                                        </View>
                                        <View className="absolute bottom-0 p-4 bg-black/40 w-full">
                                            <Text className="text-white text-lg font-bold">{item.name}</Text>
                                            <View className="flex-row justify-between items-end">
                                                <View className="flex-row items-center">
                                                    <Ionicons name="location-sharp" size={16} color="white" />
                                                    <Text className="text-white ml-1 max-w-[60%]">{item.location}</Text>
                                                </View>
                                                <View className="flex-row items-center bg-white/20 rounded-full px-2 py-1">
                                                    <Ionicons name="star" size={14} color="#FFD700" />
                                                    <Text className="text-white ml-1 font-bold">{item.rating}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </View>

                    {/* Recommended */}
                    <View className="mb-6">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-xl font-bold">Recommended</Text>
                            <TouchableOpacity>
                                <Text className="text-blue-500">See all</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="space-y-4 gap-2">
                            {recommended.map(item => (
                                <TouchableOpacity 
                                    key={item.id} 
                                    className="flex-row bg-white rounded-3xl p-3 items-center" 
                                    style={{ elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 }}}
                                    onPress={() => router.push({ pathname: '/detail_trip', params: { name: item.name, location: item.location, rating: item.rating, category: item.category }})}
                                >
                                    <Image source={{ uri: `https://picsum.photos/seed/${item.name}/200/200` }} className="w-24 h-24 rounded-2xl" />
                                    <View className="flex-1 ml-4">
                                        <Text className="text-lg font-bold">{item.name}</Text>
                                        <View className="my-1">
                                            <View className="border border-gray-300 rounded-full px-3 py-1 self-start">
                                                <Text className="text-gray-600 text-xs">{item.category}</Text>
                                            </View>
                                        </View>
                                        <View className="flex-row items-center">
                                            <Ionicons name="location-sharp" size={14} color="gray" />
                                            <Text className="text-gray-500 ml-1 text-sm">{item.location}</Text>
                                        </View>
                                    </View>
                                    <View className="flex-row items-center">
                                        <Ionicons name="star" size={16} color="#FFD700" />
                                        <Text className="ml-1 font-bold">{item.rating}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Article */}
                    <View className="mt-6">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-xl font-bold">Article</Text>
                            <TouchableOpacity>
                                <Text className="text-blue-500">See all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-ml-6">
                            <View className="flex-row pl-6 gap-4">
                                {articles.map(article => (
                                    <TouchableOpacity 
                                        key={article.id} 
                                        className="bg-white rounded-3xl p-3 w-64 mb-4" 
                                        style={{ 
                                            elevation: 3, 
                                            shadowColor: '#000000',
                                            shadowOpacity: 0.1, 
                                            shadowRadius: 10, 
                                            shadowOffset: { width: 0, height: 5 }
                                        }}
                                    >
                                        <Image source={{ uri: `https://picsum.photos/seed/${article.image}/400/300` }} className="w-full h-32 rounded-lg bg-gray-200" />
                                        <View className="mt-3">
                                            <Text className="text-lg font-bold" numberOfLines={2}>{article.title}</Text>
                                            <Text className="text-gray-500 mt-1">{article.author}</Text>
                                            <Text className="text-gray-400 text-xs mt-2">{article.date}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
