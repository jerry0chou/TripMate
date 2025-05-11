import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs 
          tabBar={(props) => <TabBar {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: 'none' }
          }}
        >
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="wishlist" options={{ title: "Wishlist" }} />
            <Tabs.Screen name="notification" options={{ title: "Notification" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        </Tabs>
    );
}
