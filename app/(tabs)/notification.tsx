import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, View } from 'react-native';

const notificationData = {
  today: [
    {
      id: 1,
      type: 'Promo',
      date: '19 Jan 2024',
      title: 'Discount 20% from GOPAY!',
      description: 'By using GOPAY payment during your transaction, you get up to 20% discount!',
      bannerText: 'Discount 20%!',
      bannerSubtext: 'using GOPAY payment method transaction',
      bannerImage: { uri: 'https://picsum.photos/seed/gopay/400/200' }
    }
  ],
  yesterday: [
    {
      id: 2,
      type: 'Promo',
      date: '18 Jan 2024',
      title: 'Cashback 20% from DANA!',
      description: 'Get 20% DANA Cashback, if you spend more than $50 on anything.',
      bannerText: 'Cashback 20%!',
      bannerSubtext: 'using DANA payment method transaction',
      bannerImage: { uri: 'https://picsum.photos/seed/dana/400/200' }
    }
  ]
};

export default function NotificationScreen() {
  const renderNotificationCard = (notification: any) => (
    <View key={notification.id} className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <View className="bg-gray-100 rounded-full p-2 mr-3">
            <Ionicons name="pricetag-outline" size={20} color="#6B7280" />
          </View>
          <Text className="text-gray-800 font-medium">{notification.type}</Text>
        </View>
        <Text className="text-gray-500 text-sm">{notification.date}</Text>
      </View>
      
      <View className="mb-4">
        <Text className="text-gray-900 text-lg font-bold mb-2">
          {notification.title}
        </Text>
        <Text className="text-gray-600 text-sm leading-5">
          {notification.description}
        </Text>
      </View>
      
      <View className="relative rounded-xl overflow-hidden">
        <View className="bg-blue-500 h-24 flex-row items-center justify-between px-4">
          <View className="flex-1">
            <Text className="text-white text-xl font-bold mb-1">
              {notification.bannerText}
            </Text>
            <Text className="text-white opacity-90 text-sm">
              {notification.bannerSubtext}
            </Text>
          </View>
          <Image
            source={notification.bannerImage}
            className="w-20 h-16 rounded-lg"
            resizeMode="cover"
          />
        </View>
        <View className="absolute top-2 left-4 opacity-60">
          <Ionicons name="wallet-outline" size={16} color="white" />
        </View>
        <View className="absolute bottom-2 right-4 opacity-60">
          <Ionicons name="card-outline" size={16} color="white" />
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView className="flex-1 bg-gray-50 pt-8">
      <View className="px-4 pt-12 pb-6">
        {/* Today Section */}
        <View className="mb-8">
          <Text className="text-gray-900 text-3xl font-bold mb-6">Today</Text>
          {notificationData.today.map(renderNotificationCard)}
        </View>
        
        {/* Yesterday Section */}
        <View className="mb-8">
          <Text className="text-gray-900 text-3xl font-bold mb-6">Yesterday</Text>
          {notificationData.yesterday.map(renderNotificationCard)}
        </View>
      </View>
    </ScrollView>
  );
} 