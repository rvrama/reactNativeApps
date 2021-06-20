import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text, SafeAreaView } from 'react-native';

import CarouselCards from './components/CarouselCards';
//import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import dataItem from './components/data';

export default function App() {
  const [items, setItems] = useState(dataItem);
  const [isAddMode, setIsAddMode] = useState(false);


  // const addGoalHandler = goalTitle => {
  //   setCourseGoals(currentGoals => [
  //     ...currentGoals,
  //     { id: Math.random().toString(), value: goalTitle }
  //   ]);
  //   setIsAddMode(false);
  // };

  const addItemHandler = (title, body) => {
  
    setItems(currentItems => [
      ...currentItems,
      { title: title, body: body, imgUrl : "https://picsum.photos/id/" + items.length + "/200/300" }
    ]);
    console.log(items);
    setIsAddMode(false);
  };


  // const removeGoalHandler = goalId => {
  //   setCourseGoals(currentGoals => {
  //     return currentGoals.filter(goal => goal.id !== goalId);
  //   });
  // };

  // const cancelGoalAdditionHandler = () => {
  //   setIsAddMode(false);
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text style={styles.title}>Welcome to ReDars - TODO List</Text>
      </View>
      <Button title="Add To Do Item" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addItemHandler}
       // onCancel={cancelGoalAdditionHandler}
      />

      <SafeAreaView style={styles.container}>
        <CarouselCards ItemList={items}/>
      </SafeAreaView>

      {/* <View style={styles.listContainer}> */}
      {/* <FlatList 
        //contentContainerStyle={styles.listContainer}
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      /> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  title: {
    color: '#fe73e1',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15
  }
  ,
  listContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});



