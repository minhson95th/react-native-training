import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {PixelRatio} from 'react-native';

const data = [
  {
    id: 2,
    phoneNumer: '0984295566',
  },
  {
    id: 3,
    phoneNumer: '0988566688',
  },
];
export const dp = (px: number) => {
  return px / PixelRatio.get();
};

class NapGanDayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}> Nạp gần đây </Text>
          <Text
            onPress={() => {
                this.props.navigation.navigate('Lịch sử giao dịch')
            }}
            style={styles.headerRight}>
            Xem thêm
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemIdContainer}>
                <Text style={styles.itemId}>{item.id}</Text>
              </View>
              <Text style={styles.itemNumber}>{item.phoneNumer}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={{flexWrap: 'wrap', flex: 1, marginTop: 5}}
          key={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 291,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  headerLeft: {
    marginLeft: 20,
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  headerRight: {
    marginRight: 18,
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    fontWeight: '400',
    color: '#0075FF',
  },
  itemContainer: {
    marginLeft: 56,
    justifyContent: 'center',
    marginTop: 27,
  },
  itemIdContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderColor: '#0075FF',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  itemId: {
    alignSelf: 'center',
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 22,
    color: '#0075FF',
  },
  itemNumber: {
    alignSelf: 'center',
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 18,
    color: '#0075FF',
    paddingTop: 20,
    fontStyle: 'normal',
  },
});
export default NapGanDayComponent;
