import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class XacNhanGiaoDichScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const index = this.props.route.params.tabIndex;

    return (
      <View>
        <RenderItemConditionally
          index={index}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

function RenderItemConditionally(props) {
  if (props.index == 0) {
    return (
      <View>
        <Text style={[styles.title, {marginLeft: 20, marginTop: 20}]}>
          Thông tin giao dịch
        </Text>
        <View style={[styles.row, {marginVertical: 10}]}>
          <Text style={styles.content}>Nạp cho số điện thoại</Text>
          <Text style={styles.value}>0984-295-566</Text>
        </View>
        <View style={[styles.row, {}]}>
          <Text style={styles.content}>Nhà mạng</Text>
          <Text style={styles.value}>Viettel</Text>
        </View>
        <Text style={[styles.title, {marginLeft: 20, marginTop: 30}]}>
          Số tiền giao dịch
        </Text>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={styles.content}>Số tiền</Text>
          <Text style={styles.value}>50.000 đ</Text>
        </View>
        <View style={[styles.row, {marginVertical: 10}]}>
          <Text style={styles.content}>Chiết khấu</Text>
          <Text style={styles.value}>5%</Text>
        </View>
        <View style={[styles.row, {}]}>
          <Text style={styles.content}>Tổng tiền tạm tính</Text>
          <Text style={styles.value}>45.000 đ</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#B4B4B4',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginLeft: 20,
            marginVertical: 18,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text style={styles.value}>Tổng tiền: </Text>
            <Text
              style={{
                fontFamily: 'Roboto Condensed',
                fontWeight: '700',
                fontSize: 18,
                color: '#FF6B00',
              }}>
              45,000 VNĐ
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Thanh toán');
            }}
            style={styles.btn}>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Roboto Condensed',
                  fontWeight: '400',
                  fontSize: 18,
                  color: '#FFFFFF',
                }}>
                Thanh Toán
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (props.index == 1) {
    return (
      <View>
        <Text style={[styles.title, {marginLeft: 20, marginTop: 20}]}>
          Thông tin giao dịch
        </Text>
        <View style={[styles.row, {marginVertical: 10}]}>
          <Text style={styles.content}>Nạp cho số điện thoại</Text>
          <Text style={styles.value}>0984-295-566</Text>
        </View>
        <View style={[styles.row, {}]}>
          <Text style={styles.content}>Nhà mạng</Text>
          <Text style={styles.value}>Vinaphone</Text>
        </View>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={styles.content}>Dịch vụ</Text>
          <Text style={styles.value}>Di động trả sau</Text>
        </View>
        <Text style={[styles.title, {marginLeft: 20, marginTop: 30}]}>
          Số tiền giao dịch
        </Text>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={styles.content}>Số tiền</Text>
          <Text style={styles.value}>100.000 đ</Text>
        </View>
        <View style={[styles.row, {marginVertical: 10}]}>
          <Text style={styles.content}>Chiết khấu</Text>
          <Text style={styles.value}>5%</Text>
        </View>
        <View style={[styles.row, {}]}>
          <Text style={styles.content}>Tổng tiền tạm tính</Text>
          <Text style={styles.value}>95.000 đ</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#B4B4B4',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginLeft: 20,
            marginVertical: 18,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text style={styles.value}>Tổng tiền: </Text>
            <Text
              style={{
                fontFamily: 'Roboto Condensed',
                fontWeight: '700',
                fontSize: 18,
                color: '#FF6B00',
              }}>
              100,000 VNĐ
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Thanh toán');
            }}
            style={styles.btn}>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Roboto Condensed',
                  fontWeight: '400',
                  fontSize: 18,
                  color: '#FFFFFF',
                }}>
                Thanh Toán
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={[styles.title, {marginLeft: 20, marginTop: 20}]}>
          Thông tin giao dịch
        </Text>
        <View style={[styles.row, {marginVertical: 10}]}>
          <Text style={styles.content}>Nạp cho số điện thoại</Text>
          <Text style={styles.value}>0984-295-566</Text>
        </View>
        <View style={[styles.row, {}]}>
          <Text style={styles.content}>Nhà mạng</Text>
          <Text style={styles.value}>Vinaphone</Text>
        </View>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={styles.content}>Dung lượng</Text>
          <Text style={styles.value}>500 MB / Ngày</Text>
        </View>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={styles.content}>Thời gian sử dụng</Text>
          <Text style={styles.value}>30 ngày</Text>
        </View>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={styles.content}>Mô tả</Text>
          <Text style={styles.value}>Mô tả</Text>
        </View>
        <Text style={[styles.title, {marginLeft: 20, marginTop: 30}]}>
          Số tiền giao dịch
        </Text>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={styles.content}>Số tiền</Text>
          <Text style={styles.value}>80.000 đ</Text>
        </View>
        <View style={[styles.row, {marginVertical: 10}]}>
          <Text style={styles.content}>Chiết khấu</Text>
          <Text style={styles.value}>5%</Text>
        </View>
        <View style={[styles.row, {}]}>
          <Text style={styles.content}>Tổng tiền tạm tính</Text>
          <Text style={styles.value}>75.000 đ</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#B4B4B4',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginLeft: 20,
            marginVertical: 18,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text style={styles.value}>Tổng tiền: </Text>
            <Text
              style={{
                fontFamily: 'Roboto Condensed',
                fontWeight: '700',
                fontSize: 18,
                color: '#FF6B00',
              }}>
              75,000 VNĐ
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Thanh toán');
            }}
            style={styles.btn}>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Roboto Condensed',
                  fontWeight: '400',
                  fontSize: 18,
                  color: '#FFFFFF',
                }}>
                Thanh Toán
              </Text>
            </View>
          </TouchableOpacity>
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
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
  btn: {
    width: 183,
    height: 40,
    backgroundColor: '#0074FF',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 20,
  },
});

export default XacNhanGiaoDichScreen;
