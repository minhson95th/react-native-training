import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  PixelRatio,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NapTienDienThoaiScreen from '../screens/NapTienDienThoaiScreen';
import XacNhanGiaoDichScreen from '../screens/XacNhanGiaoDichScreen';
import LichSuGiaoDichScreen from '../screens/LichSuGiaoDichScreen';
import ChiTietGiaoDichSreen from '../screens/ChiTietGiaoDichSreen';
import ThanhToanScreen from '../screens/ThanhToanScreen';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useNavigation} from '@react-navigation/native';

const {width, fontScale} = Dimensions.get('window');
export const dp = (px: number) => {
  return px / PixelRatio.get();
};
const Stack = createNativeStackNavigator();
const DATA = [
  {
    id: '0',
    title: 'Chuyển tiền đến tài khoản ngân hàng',
    description: 'Chuyển 24/7 - phí 0 đồng.',
    img: require('./../assets/image1.png'),
  },
  {
    id: '1',
    title: 'Thẻ ưu tiên tại phòng giao dịch',
    description:
      'Quý Hội viên sẽ được ưu tiên giao dịch ngay khi xuất trình thẻ này tại Quầy giao dịch.',
    img: require('./../assets/image2.png'),
  },
  {
    id: '2',
    title: 'Tạo và quản lý Qr-code',
    description:
      'Tạo mã Qr-code để chấp nhận thanh toán nhanh từ người khác, thích hợp thu lệ phí thi đấu trước giải, tiết kiệm thời gian cho BTC và tránh nhầm lẫn.',
    img: require('./../assets/image3.png'),
  },
  {
    id: '3',
    title: 'Thanh toán bằng Qr-code',
    description:
      'Soi nhanh để thanh toán những mã Qr-code được tạo bằng chức năng ở trên, thích hợp cho việc đóng lệ phí thi đấu cho BTC trước giải.',
    img: require('./../assets/image4.png'),
  },
  {
    id: '4',
    title: 'Cho vay, nhắc nợ và trả nợ (2 giao dịch chờ xử lý)',
    description:
      'Chức năng giúp bạn cho vay, nhắc nợ với bạn bè hoặc trả nợ cho bạn bè.',
    img: require('./../assets/image5.png'),
  },
  {
    id: '5',
    title: 'Vay tín chấp (bạn đang có 2 khoản vay)',
    description: 'Bạn có quyền vay tín chấp không tài sản đảm bảo.',
    img: require('./../assets/image6.png'),
  },
  {
    id: '6',
    title: 'Nạp tiền điện thoại ',
    description: 'Nạp tiền điện thoại nhanh chóng.',
    img: require('./../assets/image7.png'),
  },
];

const Item = ({item, navigation}) => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate('Nạp tiền điện thoại')}>
    <View style={[styles.item, styles.shadowProp]}>
      <Image style={styles.menuIcon} source={item.img} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Image
        style={styles.menuIconVector}
        source={require('./../assets/Vector.png')}
      />
    </View>
  </TouchableWithoutFeedback>
);

function MenuScreen({props, navigation}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderItem = ({item}) => <Item item={item} navigation={navigation} />;

  return (
    <View style={styles.container}>
      <View style={styles.segmentContainer}>
        <SegmentedControl
          backgroundColor="rgba(0, 0, 0, 0.8)"
          fontStyle={{color: 'rgba(255, 255, 255, 1)', fontSize: 14}}
          activeFontStyle={{color: 'rgba(0, 0, 0, 1)', fontSize: 14}}
          style={styles.segment}
          height={27.35}
          tintColor="rgba(255, 255, 255, 1)"
          values={['Ngân hàng số', 'Thẻ tín dụng quốc tế']}
          selectedIndex={selectedIndex}
          onChange={event => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
          }}
        />
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        navigation={navigation}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0070FF',
          },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Ngân hàng số - vBank" component={MenuScreen} />
        <Stack.Screen
          name="Nạp tiền điện thoại"
          component={NapTienDienThoaiScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Lịch sử giao dịch')}>
                <Image
                  source={require('../assets/Group1136.png')}
                  resizeMode="contain"
                  style={{width: 25, height: 20}}></Image>
              </TouchableWithoutFeedback>
            ),
          })}
        />
        <Stack.Screen
          name="Xác nhận giao dịch"
          component={XacNhanGiaoDichScreen}
        />
        <Stack.Screen
          name="Lịch sử giao dịch"
          component={LichSuGiaoDichScreen}
        />
        <Stack.Screen
          name="Chi tiết giao dịch"
          component={ChiTietGiaoDichSreen}
        />
        <Stack.Screen name="Thanh toán" component={ThanhToanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const goToXacNhanGiaoDich = () => {
  navigation.navigate('Xác nhận giao dịch');
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segmentContainer: {
    height: 27.35,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25.64,
    flexDirection: 'row',
    margin: 8,
    height: 102.4,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  menuIcon: {
    width: 50,
    height: 50,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 15.8 / fontScale,
    fontFamily: 'Roboto Condensed',
    fontStyle: 'normal',
  },
  description: {
    fontWeight: '400',
    fontSize: 10.38 / fontScale,
    fontFamily: 'Roboto Condensed',
    fontStyle: 'normal',
  },
  menuIconVector: {
    width: 10,
    height: 17,
    resizeMode: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 19,
  },
});

export default App;
