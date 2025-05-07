import { View, Text, Image, TouchableOpacity, useWindowDimensions, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";

export default function Intro() {
    const router = useRouter();
    const scrollRef = useRef<ScrollView>(null);
    const { width } = useWindowDimensions();
    const [currentPage, setCurrentPage] = useState(0);

    const slides = [
        {
            id: 1,
            image: require("../assets/intro/plan.png"),
            title: "Plan Your Trip",
            description: "Create your dream trip with ease. Choose a destination."
        },
        {
            id: 2,
            image: require("../assets/intro/trip.png"),
            title: "Get the Best Deal",
            description: "Save time and money by finding the best travel deals."
        },
        {
            id: 3,
            image: require("../assets/intro/explore.png"),
            title: "Explore Local Attractions",
            description: "Discover the beauty of local places you may never have visited."
        }
    ];

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setCurrentPage(index);
    };

    const handleNext = () => {
        if (currentPage < slides.length - 1) {
            scrollRef.current?.scrollTo({
                x: width * (currentPage + 1),
                animated: true
            });
            setCurrentPage(currentPage + 1);
        } else {
            router.replace("/auth");
        }
    };

    return (
        <View className="flex-1 bg-blue-500">
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={0}
            >
                {slides.map((slide, index) => (
                    <View 
                        key={slide.id} 
                        style={{ width }}
                        className="flex-1"
                    >
                        <View className="flex-1 items-center justify-center bg-blue-500 py-10">
                            <Image 
                                source={slide.image} 
                                className="w-80 h-80"
                                resizeMode="contain"
                            />
                        </View>
                        <View className="bg-white rounded-t-3xl px-6 py-8 flex-1">
                            <Text className="text-3xl font-bold text-center mb-4">{slide.title}</Text>
                            <Text className="text-gray-700 text-center leading-6">{slide.description}</Text>
                            <View className="mt-auto">
                                <TouchableOpacity
                                    onPress={handleNext}
                                    className="bg-blue-500 rounded-full mt-8 py-4 px-8 self-center w-full"
                                >
                                    <Text className="text-white text-center font-semibold">
                                        {currentPage === slides.length - 1 ? "Finish" : "Next"}
                                    </Text>
                                </TouchableOpacity>

                                <View className="flex-row justify-center gap-2  mt-6">
                                    {slides.map((_, idx) => (
                                        <View
                                            key={idx}
                                            className={`h-2 w-2 rounded-full ${idx === currentPage ? "bg-blue-500" : "bg-gray-300"}`}
                                        />
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
