import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CardProps {
    title: string;
    desc: string;
    hasSeeAll: boolean;
}

export default function Profile() {
    const insets = useSafeAreaInsets();

    const [cards, setCards] = useState<CardProps[]>([
        {title: 'Your Order', desc: 'View your order and transaction history here', hasSeeAll: true},
        {title: 'Payment Method', desc: 'Save your preferred payment method for smoother transactions', hasSeeAll: true},
        {title: 'Coupon & Voucher', desc: 'Claim vouchers and discounts for reduced prices or free shipping', hasSeeAll: true},
        {title: 'Support Center', desc: 'Find the best answer to your question', hasSeeAll: true},
        {title: 'Settings', desc: 'View and set your account preferences', hasSeeAll: false},
    ]);

    return (
        <View className="flex-1" style={{ paddingTop: insets.top }}>
            {/* Fixed blue background for top area */}
            <View className="absolute top-0 left-0 right-0 bg-blue-500 h-80" style={{ paddingTop: insets.top }} />
            
            <ScrollView className="flex-1 bg-white">
                {/* Blue Background Layer */}
                <View className="bg-blue-500 px-4 pt-6">
                {/* User Profile Card - Floating */}
                <View className="bg-white bg-opacity-90 rounded-3xl p-6 shadow-lg z-10">
                    <View className="flex-row items-center justify-between">
                        {/* Left side - Profile Info */}
                        <View className="flex-row items-center flex-1">
                            <Image
                                source={{ uri: 'https://picsum.photos/seed/adams/200/200' }}
                                className="w-16 h-16 rounded-full mr-4"
                                resizeMode="cover"
                            />
                            <View className="flex-1">
                                <Text className="text-2xl font-bold text-gray-900 mb-1">
                                    Adams
                                </Text>
                                <Text className="text-gray-600 text-base">
                                    Edit Profile
                                </Text>
                            </View>
                        </View>
                        
                        {/* Right side - Points Card */}
                        <View className="bg-blue-500 rounded-2xl px-4 py-3 items-center min-w-[120px]">
                            <View className="flex-row items-center mb-1">
                                <Ionicons name="location-outline" size={16} color="white" />
                                <Text className="text-white text-sm ml-1">Your Points</Text>
                            </View>
                            <Text className="text-white text-2xl font-bold">6000</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* White Background Layer with Rounded Top */}
            <View className="bg-white rounded-t-3xl flex-1 px-4 pt-20 -mt-12">
                {cards.map((card, index) => (
                    <TouchableOpacity 
                        key={card.title} 
                        className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100"
                    >
                        <View className="flex-row items-center justify-between mb-2">
                            <Text className="text-xl font-semibold text-gray-900">
                                {card.title}
                            </Text>
                            {card.hasSeeAll && (
                                <Text className="text-sm text-gray-500">See all</Text>
                            )}
                        </View>
                        <Text className="text-sm text-gray-600 leading-5">
                            {card.desc}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}
