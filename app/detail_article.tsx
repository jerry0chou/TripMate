import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const articleContent: {
  [key: string]: {
    location: string;
    author: string;
    date: string;
    content: string[];
    readAlso: { text: string; url: string };
    moreArticles: { id: number; title: string; author: string; date: string; image: string }[];
  };
} = {
  'Merapi Mountain erupts again': {
    location: 'Sleman, Yogyakarta',
    author: 'Adams',
    date: '9 Dec 2023',
    content: [
      'Mount Merapi spewed hot clouds this afternoon. The Center for the Investigation and Development of Geological Disaster Technology (BPPTKG) said the wind direction during the eruption was to the north.',
      'BPPTKG urged the public not to do activities in the danger area. Because, Agus said the direction of the launch and the distance of the hot clouds could not be observed.',
      'BPPTKG urges people not to do activities in the danger area. Because, Agus said the direction of the launch and the distance of the hot clouds could not be observed.'
    ],
    readAlso: {
      text: 'Here it is, the seven summits in East Java!',
      url: 'https://example.com/east-java-summits'
    },
    moreArticles: [
      {
        id: 1,
        title: 'Here it is, the seven summits in Central Java!',
        author: 'Adams',
        date: '13 Dec 2023',
        image: 'https://picsum.photos/seed/centraljava/200/100'
      },
      {
        id: 2,
        title: 'Mount Marapi Erupts, And claimed 23 lives',
        author: 'Adams',
        date: '3 Dec 2023',
        image: 'https://picsum.photos/seed/marapi/200/100'
      },
      {
        id: 3,
        title: 'Here it is, the seven summits in West Java!',
        author: 'Adams',
        date: '19 Nov 2023',
        image: 'https://picsum.photos/seed/westjava/200/100'
      },
      {
        id: 4,
        title: 'Here it is, the seven summits in Java Island!',
        author: 'Adams',
        date: '29 Oct 2023',
        image: 'https://picsum.photos/seed/javaisland/200/100'
      }
    ]
  }
};

export default function DetailArticle() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  // 只做 Merapi Mountain 这篇，其他可扩展
  const article = articleContent[params.title as string] || articleContent['Merapi Mountain erupts again'];

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{ uri: `https://picsum.photos/seed/merapi_article/600/400` }}
          className="w-full h-[260px] rounded-b-3xl overflow-hidden"
        >
          <View className="flex-row items-center p-6" style={{ paddingTop: insets.top }}>
            <TouchableOpacity onPress={() => router.back()} className="bg-white/80 rounded-full p-2">
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View className="p-6 pt-2">
          <Text className="text-2xl font-bold mb-2">{params.title}</Text>
          <View className="flex-row items-center mb-2">
            <Ionicons name="location-sharp" size={16} color="gray" />
            <Text className="text-gray-500 ml-1 text-base">{article.location}</Text>
          </View>
          <View className="flex-row items-center mb-4">
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} className="w-7 h-7 rounded-full mr-2" />
            <Text className="font-medium mr-2">{article.author}</Text>
            <Text className="text-gray-400 text-sm mr-2">{article.date}</Text>
            <View className="bg-blue-100 px-2 py-1 rounded-full ml-2">
              <Text className="text-blue-500 text-xs">Article</Text>
            </View>
            <View className="flex-row ml-auto gap-2">
              <TouchableOpacity>
                <Ionicons name="share-social-outline" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mb-4">
            {article.content.map((p: string, idx: number) => (
              <Text key={idx} className="text-gray-700 mb-2 leading-6">{p}</Text>
            ))}
          </View>
          <View className="mb-4">
            <Text className="font-bold">Read also: <Text className="text-blue-500" onPress={() => Linking.openURL(article.readAlso.url)}>{article.readAlso.text}</Text></Text>
          </View>
          <View className="border-b border-gray-200 my-4" />
          <Text className="text-lg font-bold mb-2">More Articles</Text>
          {article.moreArticles.map((item: { id: number; title: string; author: string; date: string; image: string }) => (
            <TouchableOpacity key={item.id} className="flex-row bg-white rounded-2xl p-3 mb-3 items-center" style={{ elevation: 1 }}>
              <Image source={{ uri: item.image }} className="w-20 h-16 rounded-xl mr-3" />
              <View className="flex-1">
                <Text className="font-bold text-base" numberOfLines={2}>{item.title}</Text>
                <View className="flex-row items-center mt-1">
                  <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} className="w-5 h-5 rounded-full mr-1" />
                  <Text className="text-gray-500 text-xs mr-2">{item.author}</Text>
                  <Text className="text-gray-400 text-xs">{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}