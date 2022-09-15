import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
const data = [
  {
    content: 'Nạp điện thoại',
    type: 'Vbank',
    image: require('../assets/Group1245.png'),
  },
  {
    content: 'Nạp điện thoại',
    type: 'vWallet',
    image: require('../assets/Group.png'),
  },
  {
    content: 'Nạp data 3G/4G',
    type: 'Chuyển khoản',
    image: require('../assets/Group1362.png'),
  },
  {
    content: 'Nạp điện thoại',
    type: 'Thẻ tín dụng',
    image: require('../assets/Group1364.png'),
  },
];

class LichSuGiaoDichScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {data.map((item, index) => (
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("Chi tiết giao dịch",  {detail: item})}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/Viettel.png')}
                  style={{width: 66, height: 14, marginHorizontal: 20}}
                  resizeMode="contain"></Image>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto Condensed',
                        fontWeight: '700',
                        fontSize: 18,
                      }}>
                      {item.content}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Roboto Condensed',
                        fontWeight: '700',
                        fontSize: 18,
                        color: '#FF6B00',
                        marginRight: 20,
                      }}>
                      -50.000 đ
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{}}>
                      <Text
                        style={{
                          fontFamily: 'Roboto Condensed',
                          fontWeight: '400',
                          fontSize: 14,
                          color: '#7B7B7B',
                          marginVertical: 5,
                        }}>
                        12/07 08:40
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Roboto Condensed',
                          fontWeight: '400',
                          fontSize: 16,
                          color: '#000',
                        }}>
                        0984295566
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 20}}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          marginRight: 5,
                          marginTop: 5,
                        }}>
                        {item.type}
                      </Text>
                      <Image
                        source={item.image}
                        style={{width: 20, height: 20, alignSelf: 'center'}}
                        resizeMode="contain"></Image>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#B4B4B4',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginLeft: 20,
                  marginVertical: 18,
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    marginVertical: 20,
  },
});

export default LichSuGiaoDichScreen;
