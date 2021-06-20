import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, CheckBox } from 'react-native';



const GoalItem = props => {
  const [isSelected, setSelected] = useState(false);


  const colorList = ['#ccffdd', '#77ef7c', '#39ed44', '#92873e', 'cyan',
    '#EED2D2', '#F692EF', '#9864F3', '#64CDF3', '#64F3EE',
    '#64F3AC', '#64F381', '#81F364', '#BFF364', '#EAF364']

  const listItemStyle = () => {
    return {
        backgroundColor: colorList[Math.round(Math.random() * 15)], //'#ccffcc',
        flex: 2,
        flexDirection: 'row',
        padding: 20,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
        }
  }

  const setSelection = () => {
    setSelected(true);
    setTimeout(() => { props.onDelete(props.id); }, 2000);
  }

  return (
    <View style={listItemStyle()}>
      <View style={styles.checkbox}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text>{props.title}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  checkbox: {
   flex: 3,
   flexDirection: 'row',
    alignItems: 'center'
  }
});

export default GoalItem;
