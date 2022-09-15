import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import NapGanDayComponent from '../components/NapGanDayComponent';

const data = [
  {
    id: 1,
    name: '1.5 GB',
    cost: '20.000 VNĐ',
  },
  {
    id: 2,
    name: '500 MB / Ngày',
    cost: '70.000 VNĐ',
  },
  {
    id: 3,
    name: '1 GB / Ngày',
    cost: '90.000 VNĐ',
  },
  {
    id: 4,
    name: '2 GB / Ngày',
    cost: '120.000 VNĐ',
  },
  {
    id: 5,
    name: '3 GB / Ngày',
    cost: '200.000 VNĐ',
  },
];

class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoneNumberSelected: true,
      isVGACodeSelected: false,
      selectedId: 0,
      telephoneNumber: '0989532988',

    };
  }

  componentDidMount() {
    this.handleSelection({id: this.state.selectedId});
  }
  onPressPhoneNumber = () => {
    this.setState({isPhoneNumberSelected: true, isVGACodeSelected: false, telephoneNumber: '0989532988'});
  };

  onPressVGACode = () => {
    this.setState({isVGACodeSelected: true, isPhoneNumberSelected: false, telephoneNumber: 'VGA3'});
  };

  handleSelection = item => {
    this.setState({selectedId: item.id, valueOfCost: item.name});
  };

  render() {
    const {selectedId, valueOfCost, telephoneNumber} = this.state;

    return (
      <View>
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
              value = {this.state.telephoneNumber}
              style={[{flex: 1}, styles.inputContact]}></TextInput>
               <Image
              style={{width: 65, height: 12, position: 'absolute', left: 20, bottom: 10}}
              source={require('../assets/Viettel.png')}/>
            <Image
              style={styles.imgInputContact}
              source={require('../assets/contact.png')}
            />
          </View>
          <Text style={styles.titleChooseValue}>
          Gói Data 30 ngày
          </Text>
          <FlatList
            style={{marginTop: 25, marginHorizontal: 10, marginBottom: 10}}
            data={data}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => this.handleSelection(item)}>
                <View
                  style={[
                    styles.gridStyle,
                    item.id === selectedId ? styles.gridStyleSelected : null,
                    styles.boxWithShadow,
                  ]}>
                  <Text
                    style={[
                      item.id === selectedId
                        ? styles.textValueSelected
                        : styles.textValue,
                    ]}>
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      item.id === selectedId
                        ? styles.textCostSelected
                        : styles.textCost,
                    ]}>
                    {item.cost}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={item => item.id}
            extraData={selectedId}
            numColumns={3}
            key={item => item.id}
          />
        </View>
        <View style= {{marginHorizontal: 20, marginBottom: 20}}>
            <NapGanDayComponent navigation = {this.props.navigation}></NapGanDayComponent>
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
  inputMoney: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(180, 180, 180, 1)',
    // marginTop: 39,
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 30,
    // color: 'rgba(151, 151, 151, 1)',
    paddingVertical: 0,
    marginHorizontal: 19,
    paddingRight: 30,
    textAlign: 'right',
  },

  titleChooseValue: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 39,
    marginLeft: 19,
  },

  boxWithShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  textValueSelected: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
  },
  textValue: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  textCostSelected: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 15,
    color: '#FFFFFF',
  },
  textCost: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 15,
    color: '#818181',
  },
  gridStyle: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    // width: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
  },

  gridStyleSelected: {
    backgroundColor: '#0075FF',
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default DataComponent;
