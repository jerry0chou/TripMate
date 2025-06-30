import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// 模拟数据
const tripData = [
  {
    id: 1,
    title: 'Semeru Mountain',
    date: '2 Feb 2024',
    price: '$80',
    image: { uri: 'https://picsum.photos/seed/semeru/200/200' },
    quantity: 1
  },
  {
    id: 2,
    title: 'Arjuno Mountain',
    date: '15 Apr 2024',
    price: '$65',
    image: { uri: 'https://picsum.photos/seed/arjuno/200/200' },
    quantity: 1
  },
  {
    id: 3,
    title: 'Prau Mountain',
    date: '3 Jul 2024',
    price: '$40',
    image: { uri: 'https://picsum.photos/seed/prau/200/200' },
    quantity: 1
  },
  {
    id: 4,
    title: 'Merbabu Mountain',
    date: '9 Sep 2024',
    price: '$45',
    image: { uri: 'https://picsum.photos/seed/merbabu/200/200' },
    quantity: 1
  }
];

export default function WishlistScreen() {
  return (
    <ScrollView className="flex-1 bg-blue-500">
      {/* Header */}
      <View className=" px-4 pt-20 pb-4">
        <View className="bg-white/20 rounded-t-3xl p-4">
          <Text className="text-white text-xl font-semibold mb-4">
            Wishlist (Hiking)
          </Text>
          
          {/* Search Bar */}
          <View className="bg-white rounded-full px-4 py-3 flex-row items-center mb-4">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search Wishlist"
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-3 text-gray-800"
            />
          </View>
          
          {/* Filter Buttons */}
          <View className="flex-row items-center space-x-3 gap-1">
            <Text className="text-white text-sm font-medium mr-2">Filter by</Text>
            
            <TouchableOpacity className="bg-white/30 rounded-full px-4 py-2 flex-row items-center">
              <Text className="text-white text-sm mr-1">Date</Text>
              <Ionicons name="chevron-down" size={16} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-white/30 rounded-full px-4 py-2 flex-row items-center">
              <Text className="text-white text-sm mr-1">Type Trip</Text>
              <Ionicons name="chevron-down" size={16} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-white/30 rounded-full px-4 py-2 flex-row items-center">
              <Text className="text-white text-sm mr-1">Price</Text>
              <Ionicons name="chevron-down" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Trip Cards */}
      <View className="bg-white flex-1 px-4 pt-6 pb-40 rounded-t-2xl">
        {tripData.map((trip) => (
          <View key={trip.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4">
            {/* Card Header */}
            <View className="flex-row items-center justify-between p-4 border-b border-gray-100">
              <View className="flex-row items-center">
                <View className="bg-gray-100 rounded-lg p-2 mr-3">
                  <Ionicons name="bag-outline" size={20} color="#6B7280" />
                </View>
                <View>
                  <Text className="text-gray-800 font-semibold">Open Trip</Text>
                  <Text className="text-gray-500 text-sm">{trip.date}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
            
            {/* Card Content */}
            <View className="p-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                  <Image
                    source={trip.image}
                    className="w-16 h-16 rounded-xl mr-4"
                    resizeMode="cover"
                  />
                  <View className="flex-1">
                    <Text className="text-gray-800 font-semibold text-base mb-2">
                      {trip.title}
                    </Text>
                    
                    {/* Quantity Selector */}
                    <View className="flex-row items-center mb-2">
                      <TouchableOpacity className="border border-gray-300 rounded-full w-8 h-8 items-center justify-center">
                        <Ionicons name="remove" size={16} color="#6B7280" />
                      </TouchableOpacity>
                      <Text className="mx-4 text-gray-800 font-medium">
                        {trip.quantity}
                      </Text>
                      <TouchableOpacity className="border border-gray-300 rounded-full w-8 h-8 items-center justify-center">
                        <Ionicons name="add" size={16} color="#6B7280" />
                      </TouchableOpacity>
                    </View>
                    
                    <Text className="text-gray-800 font-bold text-lg">
                      {trip.price}
                    </Text>
                  </View>
                </View>
                
                {/* Booking Button */}
                <TouchableOpacity className="bg-gray-100 rounded-full px-6 py-2 ml-4">
                  <Text className="text-gray-700 font-medium">Booking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
} 