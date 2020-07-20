
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Eat Lunch', key: '2' },
    { text: 'Have Fun', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {

      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS', 'Todos Must Be Over 3 Chars Long', [
        { text: 'Understood', onPress: () => console.log('Alert Closed') }
      ])

    }


  }

  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }

});
