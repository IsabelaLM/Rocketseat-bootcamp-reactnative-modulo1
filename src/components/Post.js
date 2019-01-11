import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// import styles from './styles';

const Post = ({ title, author, description }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.lineDiv} />
    <Text style={styles.description}>{description}</Text>
  </View>
);

// const Post = props => (
//   <View>
//     <Text>{props.title}</Text>
//   </View>
// );

Post.defaultProps = {
  title: 'Título Padrão...',
  author: 'Isabela L. M.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
};

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Post;

const bgcolor = '#F5F5F5';
const titleColor = '#333';
const authroColor = '#AAA';
const DescriptionColor = '#666';
const lineColor = '#DDD';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: bgcolor,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    color: titleColor,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  author: {
    color: authroColor,
    fontWeight: 'bold',
    fontSize: 12,
  },
  description: {
    color: DescriptionColor,
    fontSize: 12,
  },
  lineDiv: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: lineColor,
    marginVertical: 10,
  },
});
