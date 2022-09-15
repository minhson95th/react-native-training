import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import NapGanDayComponent from '../components/NapGanDayComponent';
class TraSauComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoneNumberSelected: true,
      isVGACodeSelected: false,
      telephoneNumber: '0989532988'
    };
  }

  onPressPhoneNumber = () => {
    this.setState({isPhoneNumberSelected: true, isVGACodeSelected: false, telephoneNumber: '0989532988'});
  };

  onPressVGACode = () => {
    this.setState({isVGACodeSelected: true, isPhoneNumberSelected: false, telephoneNumber: 'VGA3'});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View style={styles.titleTab}>
            <TouchableWithoutFeedback onPress={this.onPressPhoneNumber}>
              <View
                style={
                  this.state.isPhoneNumberSelected
                    ? [
                        styles.titleTabContainerSelected,
                        {borderTopLeftRadius: 10},
                      ]
                    : [styles.titleTabContainer, {borderTopLeftRadius: 10}]
                }>
                <Text
                  style={
                    this.state.isPhoneNumberSelected
                      ? styles.buttonTabSelected
                      : styles.buttonTab
                  }>
                  Số điện thoại
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.onPressVGACode}>
              <View
                style={
                  this.state.isVGACodeSelected
                    ? [
                        styles.titleTabContainerSelected,
                        {borderTopRightRadius: 10},
                      ]
                    : [styles.titleTabContainer, {borderTopRightRadius: 10}]
                }>
                <Text
                  style={
                    this.state.isVGACodeSelected
                      ? styles.buttonTabSelected
                      : styles.buttonTab
                  }>
                  Mã VGA
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <TextInput
              placeholder="Nhập số điện thoại"
              keyboardType="numeric"
              value={this.state.telephoneNumber}
              style={[{flex: 1}, styles.inputContact]}></TextInput>
            <Image
              style={{
                width: 65,
                height: 12,
                position: 'absolute',
                left: 20,
                bottom: 10,
              }}
              source={require('../assets/Viettel.png')}
            />
            <Image
              style={styles.imgInputContact}
              source={require('../assets/contact.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 30,
            }}>
            <Text
              style={{
                color: '#5A5A5A',
                fontFamily: 'Roboto Condensed',
                fontWeight: '400',
                fontSize: 18,
              }}>
              Số tiền cần thanh toán
            </Text>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Roboto Condensed',
                fontWeight: '700',
                fontSize: 22,
                
              }}>
              100,000 VNĐ
            </Text>
          </View>
        </View>
        <View style={styles.firstContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 30,
            }}>
            <Text
              style={{
                color: '#5A5A5A',
                fontFamily: 'Roboto Condensed',
                fontWeight: '400',
                fontSize: 18,
              }}>
              Số tiền cần thanh toán
            </Text>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Roboto Condensed',
                fontWeight: '700',
                fontSize: 22,
              }}>
              100,000 VNĐ
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  titleTab: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
  },
  titleTabContainer: {
    width: '50%',
    backgroundColor: 'rgba(228, 228, 228, 1)',
    justifyContent: 'center',
  },

  titleTabContainerSelected: {
    width: '50%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
  },

  buttonTab: {
    // backgroundColor: 'red',
    color: 'rgba(87, 87, 87, 1)',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'normal',
  },
  buttonTabSelected: {
    // backgroundColor: 'red',
    color: 'rgba(0, 117, 255, 1)',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 18,
    fontStyle: 'normal',
  },
  inputContact: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(180, 180, 180, 1)',
    marginTop: 39,
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 18,
    // color: 'rgba(151, 151, 151, 1)',
    // paddingRight: 12,
    paddingLeft: 95,
    paddingBottom: 5,
    marginHorizontal: 19,
    paddingRight: 30,
  },
  imgInputContact: {
    width: 16,
    height: 20,
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
});

export default TraSauComponent;
