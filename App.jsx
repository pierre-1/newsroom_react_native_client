import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
  const[articles, setArticles] = useState()

  useEffect( async () => {
    const articlesRequest = await axios.get('https://newsroom-team-1.herokuapp.com/api/articles')
    setArticles(articlesRequest.data.articles)
  }, [])

  return (
    <View style={styles.list} >
      <Text data-cy={"list"}>Latest News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    color: 'red'
  }

});

export default App
