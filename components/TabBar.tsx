import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabBar(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const tabs = [
    { name: 'Home', icon: 'home-outline' as const, active: 'home' as const, route: '/' },
    { name: 'Wishlist', icon: 'heart-outline' as const, active: 'heart' as const, route: '/wishlist' },
    { name: 'Notification', icon: 'notifications-outline' as const, active: 'notifications' as const, route: '/notification' },
    { name: 'Profile', icon: 'person-outline' as const, active: 'person' as const, route: '/profile' },
  ];

  return (
    <View 
      className="bg-blue-500 absolute bottom-0 left-0 right-0 rounded-t-3xl" 
      style={{ 
        paddingBottom: Math.max(insets.bottom, 8),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5
      }}
    >
      <View className="flex-row items-center justify-between px-6 pt-3 pb-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.route || 
                          (pathname === '/' && tab.route === '/') ||
                          (pathname.includes(tab.route) && tab.route !== '/');
          
          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => router.push(tab.route as any)}
              className="items-center py-2"
            >
              <Ionicons
                name={isActive ? tab.active : tab.icon}
                size={24}
                color="white"
              />
              <Text className="text-white text-xs mt-1">{tab.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
} 