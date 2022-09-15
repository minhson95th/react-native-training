import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';


class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      isShowCost: false,
      data: props.dataFromParent,
      isTitle: props.isTitle
    };
  }

  render() {
    const {selectedId, isShowCost, data, isTitle} = this.state
    
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({item}) => 
            // return <GridViewItem item={item} selectedId={this.state.selectedId} />
            <TouchableWithoutFeedback
              onPress={() => this.handleSelection(item)}>
              <View style={[styles.gridStyle, item.id === selectedId ? styles.gridStyleSelected : null, styles.boxWithShadow]}>
                {isTitle ? (<Text style={[item.id === selectedId ? styles.gridValueWithoutCostSelected : styles.gridValueWithoutCost]}>{item.name}</Text>) : (<Text style={[item.id === selectedId ? styles.gridValueSelected : styles.gridValue]}>{item.name}</Text>)}
                {/* <Text style={[item.id === selectedId ? styles.gridValueSelected : styles.gridValue]}>{item.name}</Text> */}
                {isShowCost ? (<Text style={item.id === selectedId ? styles.gridCostSelected : styles.gridCost}>{item.cost}</Text>) : null}
              </View>
            </TouchableWithoutFeedback>
          }
          keyExtractor={item => item.id}
          extraData={selectedId}
          numColumns={3}
          key={item => item.id}
        />
      </SafeAreaView>
    );
  }

  //  GridViewItem = ({item, selectedId}) => {
  //   <TouchableWithoutFeedback onPress={() => this.handleSelection(item.id)}>
  //     <View
  //       style={[
  //         styles.gridStyle,
  //         item.id === selectedId ? styles.selected : null,
  //         styles.boxWithShadow,
  //       ]}>
  //       <Text style={styles.gridValue}>{item.name}</Text>
  //       <Text style={styles.gridCost}>{item.cost}</Text>
  //       {/* {isShowCost ? (<Text style={styles.gridCost}>{item.cost}</Text>) : null} */}
  //     </View>
  //   </TouchableWithoutFeedback>
  // };

  handleSelection = (item) => {
    var selectedId = this.state.selectedId;
    if (selectedId === item.id) {
      this.setState({selectedId: null});
    } else {
      this.setState({selectedId: item.id}, () => {
        this.handleValue(item)
      })
      
    }
  };
  handleValue = (item) => {
    this.props.callbackFromChild(item)
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  gridStyle: {
    flex: 1/3,
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

  gridValueWithoutCost: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 22,
    color: '#000000',
  },
  gridValueWithoutCostSelected: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 22,
    color: '#FFFFFF',
  },

  gridValue: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 22,
    color: '#000000',
  },

  gridValueSelected: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '700',
    fontSize: 22,
    color: '#FFFFFF',
  },

  gridCost: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 16,
    color: '#818181',
  },
  gridCostSelected: {
    fontFamily: 'Roboto Condensed',
    fontWeight: '400',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default GridView;
