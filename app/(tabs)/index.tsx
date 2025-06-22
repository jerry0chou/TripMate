import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Home() {
    const insets = useSafeAreaInsets();

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

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home Page</Text>
            <Button title="Go to intro" onPress={() => router.replace("/intro")} />
        </View>
    );
}
