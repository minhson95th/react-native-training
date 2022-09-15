import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
class ChiTietGiaoDichSreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const detail = this.props.route.params.detail;
    return (
      <View>
        {/* <Text onPress= {() => this.props.navigation.navigate('Lịch sử giao dịch')}> ChiTietGiaoDichSreen </Text> */}
        <Text style={[styles.title]}>Nạp điện thoại</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.content}>Nạp cho số điện thoại</Text>
          <Text style={styles.value}>0984-295-566</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <Text style={styles.content}>Nhà mạng</Text>
          <Text style={styles.value}>Viettel</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.content}>Thời gian giao dịch</Text>
          <Text style={styles.value}>08:40 12/07/2022</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#B4B4B4',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginHorizontal: 24,
            marginTop: 20,
          }}
        />
        <Text style={styles.title}>Số tiền giao dịch</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.content}>Số tiền được nạp</Text>
          <Text style={styles.value}>80.000 đ</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <Text style={styles.content}>Chiết khấu</Text>
          <Text style={styles.value}>5%</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.content}>Số tiền phải trả</Text>
          <Text
            style={{
              fontFamily: 'Roboto Condensed',
              fontWeight: '700',
              fontSize: 18,
              color: '#FF6B00',
            }}>
            75.000 vnđ
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal: 20,
          }}>
          <Text style={styles.content}>Nguồn tiền</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Image
              source={detail.image}
              style={{
                width: 20,
                height: 20,
                alignSelf: 'center',
                marginRight: 5,
              }}
              resizeMode="contain"></Image>
            <Text style={styles.value}>{detail.type}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 22,
    margin: 20,
  },
  content: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 18,
    color: '#828282',
  },
  value: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
});

export default ChiTietGiaoDichSreen;
