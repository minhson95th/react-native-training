import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const data = [
  {
    title: 'Thanh toán bằng vBank (ngân hàng số)',
    money: 'Số tiền: 1,000,000 VND',
    image: require('../assets/Group1245.png')
  },
  {
    title: 'Thanh toán bằng ví điểm thưởng - vWallet',
    money: 'Số tiền: 1,000,000 VND',
    blance: 'Số dư 12,000,000 VND',
    image: require('../assets/Group.png')

  },
  {
    title: 'Thanh toán bằng chuyển khoản ngân hàng',
    money: 'Số tiền: 1,000,000 VND',
    image: require('../assets/Group1362.png')

  },
  {
    title: 'Thanh toán bằng thẻ tín dụng',
    money: 'Số tiền: 1,000,000 VND',
    image: require('../assets/Group1364.png')

  },
];
class ThanhToanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        {data.map((item, index) => (
          <View key = {index} style={[styles.contain]}>
            <Image
              source={item.image}
              style={{width: 51, height: 48, margin: 20}}
              resizeMode="contain"></Image>
            <View style={{width: '70%'}}>
              <Text style={styles.title}>{item.title}</Text>
              {index == 1 ? (
                <Text style={[styles.content, {color: '#0500FF'}]}>
                  Số dư: 12,000,000 VND
                </Text>
              ) : null}

              <Text style={[styles.content, {color: '#FF6B00'}]}>
                Số tiền: 1,000,000 VND{' '}
              </Text>
              <Text style={[styles.content, {color: '#0070FF'}]}>
                Hoàn tiền vào vWallet: 100,000 VND
              </Text>
            </View>
            <Image
              style={{alignItems: 'center'}}
              source={require('./../assets/Vector.png')}
            />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    height: 102,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    marginHorizontal: 8,
  },
  title: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    size: 18,
  },
  content: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    size: 16,
  },
});

export default ThanhToanScreen;
