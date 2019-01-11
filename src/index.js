import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, SafeAreaView,
} from 'react-native';

import Post from '~/components/Post';

const bgcolor = '#D66';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: bgcolor,
  },
});

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Primeiro post do blog',
        author: 'Isabela Lauletta Modesto',
        description:
          'Aqui você pode acompanhar todas as novidades sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
      },
      {
        id: 5,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>
          {posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default App;
