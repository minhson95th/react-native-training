import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import GridView from '../components/GridView';
import NapGanDayComponent from '../components/NapGanDayComponent';
import TraTruocComponent from '../components/TraTruocComponent';
import TraSauComponent from '../components/TraSauComponent';
import DataComponent from '../components/DataComponent';

const {width, fontScale} = Dimensions.get('window');
const listCost = [
  {
    id: 1,
    name: '50.000',
    cost: '',
  },
  {
    id: 2,
    name: '100.000',
    cost: '',
  },
  {
    id: 3,
    name: '200.000',
    cost: '',
  },
  {
    id: 4,
    name: '500.000',
    cost: '',
  },
  {
    id: 5,
    name: '1.000.000',
    cost: '',
  },
  {
    id: 6,
    name: '2.000.000',
    cost: '',
  },
  {
    id: 7,
    name: '3.000.000',
    cost: '',
  },
  {
    id: 8,
    name: '4.000.000',
    cost: '',
  },
  {
    id: 9,
    name: '5.000.000',
    cost: '',
  },
];
export default class NapTienDienThoaiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      isPhoneNumberSelected: true,
      isVGACodeSelected: false,
      telNumber: '',
      costValue: '',
    };
  }

  changeSelectedIndex = event => {
    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
    // renderItemConditionally(event.nativeEvent.selectedSegmentIndex)
  };

  onPressContinue = () => {
    this.props.navigation.navigate("Xác nhận giao dịch", {tabIndex: this.state.selectedIndex})

  };

  updateData = data => {
    this.setState({
      costValue: data.name,
      textAlign: 'right',
    });
  };

  handleTextChange = (type, text) => {
    if (type == 'tel') {
      this.setState({telNumber: text});
    } else {
      this.setState({costValue: text});
    }
  };

  render() {
    const {selectedIndex} = this.state;

    return (
      <SafeAreaView style={{flexGrow: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View style={styles.segmentContainer}>
              <SegmentedControl
                fontStyle={{color: 'rgba(255, 255, 255, 1)', fontSize: 14}}
                activeFontStyle={{color: 'rgba(0, 0, 0, 1)', fontSize: 14}}
                style={styles.segment}
                height={27.35}
                tintColor="rgba(255, 255, 255, 1)"
                values={['Trả trước', 'Trả sau', 'Data3G/4G']}
                selectedIndex={selectedIndex}
                onChange={this.changeSelectedIndex}
              />
            </View>
            <View style={{flexGrow: 1}}>
              <RenderItemConditionally index={this.state.selectedIndex} navigation = {this.props.navigation} />
            </View>
            <View style={{marginHorizontal: 20}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#0075FF',
                  height: 40,
                  justifyContent: 'center',
                }}
                onPress={this.onPressContinue}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    alignSelf: 'center',
                  }}>
                  Tiếp tục
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View style={[styles.tabContainer, styles.boxWithShadow]}>
            <View style={styles.firstContainer}>
              <View style={styles.titleTab}>
                <TouchableWithoutFeedback onPress={this.onPressPhoneNumber}>
                  <View
                    style={
                      this.state.isPhoneNumberSelected
                        ? styles.titleTabContainerSelected
                        : styles.titleTabContainer
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
                        ? styles.titleTabContainerSelected
                        : styles.titleTabContainer
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
                  onChangeText={text => this.handleTextChange('tel', text)}
                  value={this.state.telNumber}
                  style={[{flex: 1}, styles.inputContact]}></TextInput>
                <Image
                  style={styles.imgInputContact}
                  source={require('../assets/contact.png')}
                />
              </View>
              <Text style={styles.titleChooseValue}>
                Chọn mệnh giá hoặc nhập số tiền
              </Text>
              <TextInput
                placeholder="Nhập số tiền"
                keyboardType="numeric"
                onChangeText={text => this.handleTextChange('money', text)}
                style={
                  this.state.costValue.length == 0
                    ? styles.inputMoney
                    : styles.inputMoneyHaveText
                }
                value={this.state.costValue}></TextInput>
            </View>
            <View style={{marginHorizontal: 10, marginTop: 20}}>
              <GridView
                dataFromParent={listCost}
                isTitle={true}
                callbackFromChild={val => this.updateData(val)}></GridView>
            </View>
          </View>
          <View style={[styles.secondContainer, styles.boxWithShadow]}>
            <NapGanDayComponent></NapGanDayComponent>
          </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function RenderItemConditionally(props) {
  if (props.index == 0) {
    return <TraTruocComponent navigation={props.navigation} />;
  } else if (props.index == 1) {
    return <TraSauComponent />;
  } else {
    return <DataComponent navigation={props.navigation}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 1,
    // justifyContent: 'space-between',
    // backgroundColor: 'blue',
    // flexDirection: 'column',
  },
  segmentContainer: {
    height: 27.35,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },

  tabContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 18,
    // height: 400,
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
    fontSize: 18 / fontScale,
    fontStyle: 'normal',
  },
  buttonTabSelected: {
    // backgroundColor: 'red',
    color: 'rgba(0, 117, 255, 1)',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 18 / fontScale,
    fontStyle: 'normal',
  },
  inputContact: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(180, 180, 180, 1)',
    marginTop: 39,
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 18 / fontScale,
    // color: 'rgba(151, 151, 151, 1)',
    paddingVertical: 12,
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
  inputMoney: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(180, 180, 180, 1)',
    marginTop: 39,
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 18 / fontScale,
    // color: 'rgba(151, 151, 151, 1)',
    paddingVertical: 12,
    marginHorizontal: 19,
    paddingRight: 30,
    textAlign: 'left',
  },
  inputMoneyHaveText: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(180, 180, 180, 1)',
    marginTop: 39,
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 30 / fontScale,
    // color: 'rgba(151, 151, 151, 1)',
    paddingVertical: 12,
    marginHorizontal: 19,
    paddingRight: 30,
    textAlign: 'right',
  },
  titleChooseValue: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 18 / fontScale,
    marginTop: 39,
    marginLeft: 19,
  },
  secondContainer: {
    marginHorizontal: 18,
    marginBottom: 20,
  },
  boxWithShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});
