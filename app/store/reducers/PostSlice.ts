import {createSlice} from '@reduxjs/toolkit';
import {Post} from '../../models/Post';

interface PostState {
  posts: Post[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    
  },
});
