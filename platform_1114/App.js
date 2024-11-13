import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const stories = [
  { id: '1', user: '구단 소식', image: 'https://i.namu.wiki/i/yct6u-hXsl3Jy3dvpltsZgUrG7vg_xoJ-cxVPF-bm_z2q28y4IlLVKfHMWinj_Me0GWFb85aiGy2i1eeV2t0O-YqN9QFgRJazhjXQEoJvaG1VEEn8VKiVyVwptViel-fnl3ayn-y7uWqxiLxfQYTEpZ2svVG8wvYItAvILtHcxM.svg' },
  { id: '2', user: '주요 선수단', image: 'https://i.namu.wiki/i/yct6u-hXsl3Jy3dvpltsZjcoMraHQhaVHcyj4WMcHwPwtCpL3jTjZoIMYyHzKk7odEi7B41SqWuQ8L3g06Hy53CSSnMtoQjEEXAqS-9YJP0enFGAsbTBRJIxedMYaEtr1GYf0UKowYMDxwayADkgofqXFTl7B3qSLjwSpfiysfc.svg' },
  { id: '3', user: '구단 순위', image: 'https://i.namu.wiki/i/yct6u-hXsl3Jy3dvpltsZrQufHpeO0a7JtMqmhTFTiXaJUZr2DAxnV1qa-HvV7_p9uGbC3ijxA-NrjHVVhFe4Gl-e6-4NBj8fe4vlgaCZi6FWQi55Pagyr7JZ4Kw_5iaDIld7xlg669KGdfbFU5TLqrG2pVp0IsRwgDNWZNvxTM.svg' },
  { id: '4', user: '대구 라이온즈 파크', image: 'https://i.namu.wiki/i/yct6u-hXsl3Jy3dvpltsZjPaquER6UFhx_Gh1HzOi2xvXYgeWTowXZAPuqWl6f_n7-ibmTyGr72pvqJbRVvtUeqDwhgqM_ApdQmH-QJLyofsNDJjNRRwKJ9gbFkMTKkNeUi3T470chKvuOfNdDL2hMR9slqfQ0Xm2uWLT8t5tuQ.svg' }
];

const posts = [
  { id: '1', user: '라이온즈 TV', image: 'https://www.samsunglions.com/upload/main_alert/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88.png', caption: '팬과 함께하는 라이온즈tv ! \n라이온즈 tv에서 다양한 콘텐츠와 덕아웃의 생생함을 느껴보세요!', link: 'https://m.youtube.com/channel/UCMWAku3a3h65QpLm63Jf2pw' },
  { id: '2', user: '라이온즈 SNS', image: 'https://www.samsunglions.com/upload/main_alert/%EB%A9%94%EC%9D%B8-%EB%B0%B0%EB%84%88.jpg', caption: '삼성 라이온즈 공식 SNS \n삼성 라이온즈 공식 인스타그램에서 소식을 바로 확인해보세요!', link: 'https://m.instagram.com/samsunglions_baseballclub/' },
  { id: '3', user: '라이온즈 온라인 쇼핑몰', image: 'https://samsunglionsmall.com/web/product/small/202408/c3e059684e0271c027ec7555fce60c7d.jpg', caption: '삼성 라이온즈 공식 쇼핑몰 ! \n삼라몰에서 유니폼부터 응원용품까지 한번에 구입해보세요!', link: 'https://m.samsunglionsmall.com/' }
];

const postsData = {
  '주요 선수단': [
    { id: '1', user: 'MANAGER \nPARK JIN MAN', image: 'https://www.samsunglions.com/upload/player/A0311_player_img_top(10).jpg', caption: '올해 팬분들께 열정적이고 \n감동적인 모습을 보여드릴 수 \n있도록 열심히 달리겠습니다.', link: 'https://ko.wikipedia.org/wiki/%EB%B0%95%EC%A7%84%EB%A7%8C' },
    { id: '2', user: 'CAPTAIN \nGOO JA WOOK', image: 'https://www.samsunglions.com/upload/player/A0033_player_img_top(9).jpg', caption: '달라진 라이온즈, \n삼성 명가 재건을 위해 \n최선을 다하겠습니다.', link: 'https://ko.wikipedia.org/wiki/%EA%B5%AC%EC%9E%90%EC%9A%B1' },
    { id: '3', user: 'BEST CATCHER KANG MIN HO', image: 'https://www.samsunglions.com/upload/player/A0354_player_img_top(8).jpg', caption: '야수 최고참이자, 팀의 주축 \n타자로서 승리를 이끌겠습니다.', link: 'https://ko.wikipedia.org/wiki/%EA%B0%95%EB%AF%BC%ED%98%B8'},
    { id: '4', user: 'BEST PITCHER \nWON TAE IN', image: 'https://www.samsunglions.com/upload/player/A0399_player_img_top(6).jpg', caption: '튼튼한 선발 투수로서, \n삼성 팬들에게 승리를 \n안겨드리겠습니다.', link: 'https://ko.wikipedia.org/wiki/%EC%9B%90%ED%83%9C%EC%9D%B8' },
  ],
  '대구 라이온즈 파크': [
    { id: '10', user: '라이온즈 파크 좌석', image: 'https://www.samsunglions.com/img/intro/seat2023_03.png', caption: '*이미지 클릭 시 원본 확인', link:'https://www.samsunglions.com/img/intro/seat2023_03.png'},
    { id: '11', user: '입장 요금표', image: 'https://www.samsunglions.com/img/intro/2024ticket_03.jpg', caption: '*이미지 클릭 시 원본 확인', link:'https://www.samsunglions.com/img/intro/2024ticket_03.jpg'},
    { id: '12', user: '매장 안내', image: 'https://www.samsunglions.com/img/intro/store2024.png', caption: '*이미지 클릭 시 원본 확인', link:'https://www.samsunglions.com/img/intro/store2024.png'}
  ],
};

const StoryFeedScreen = ({ route }) => {
  const { user } = route.params;
  const posts = postsData[user] || [];

 const renderPost = ({ item }) => (
  <View style={(user === '주요 선수단') ? styles.postGridItem : styles.post}>
    <Text style={styles.username}>{item.user}</Text>
    <TouchableOpacity onPress={() => item.link && Linking.openURL(item.link)} style={{ width: '100%' }}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
    <Text style={styles.caption}>{item.caption}</Text>
  </View>
);
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        numColumns={user === '주요 선수단' ? 2 : 1} />
    </SafeAreaView>
  );
};

const Story = ({ user, image, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.story}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={styles.storyUser}>{user}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const renderStory = ({ item }) => (
    <Story
      user={item.user}
      image={item.image}
      onPress={() => {
        if (item.user === '구단 소식') {
          Linking.openURL('https://www.samsunglions.com/m/intro/intro02.asp');
        } else if (item.user === '구단 순위') {
          Linking.openURL('https://m.sports.naver.com/kbaseball/record/index?category=kbo&year=2024');
        } else {
          navigation.navigate('StoryFeed', { user: item.user });
        }
      }}
    />
  );

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.username}>{item.user}</Text>
      <TouchableOpacity onPress={() => item.link && Linking.openURL(item.link)}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={{ padding: 5, color: 'skyblue', fontWeight: 'bold', fontSize: 30 }}>
          Samsung Lionstargram
          <Icon name="star" size={30} color="yellow" />
        </Text>
      </View>
      <View style={styles.storiesContainer}>
        <FlatList
          data={stories}
          horizontal
          renderItem={renderStory}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
        <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Feed' }} />
        <Stack.Screen
          name="StoryFeed"
          component={StoryFeedScreen}
          options={({ route }) => ({ title: route.params.user })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postGridItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: 'darkblue',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  caption: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  storyUser: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  post: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
});
