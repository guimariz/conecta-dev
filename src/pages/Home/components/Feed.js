import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Nome Autor',
      username: 'username',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    title: 'Título 1 ',
    date: 'Data 1',
    description: 'Descrição 1',
    hashtags: '#dotnet, #javascript, #reactjs, #developer',
    image: '/images/posts/post_1.jpg',
  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Nome Autor',
      username: 'username',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    title: 'Título 2',
    date: 'Data 2',
    description: 'Descrição 2',
    hashtags: '#solidity, #php, #mysql, #developer',
    image: '/images/posts/post_2.jpg',
  },
];

function Feed() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
