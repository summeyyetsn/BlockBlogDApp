import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import useContract from './useContract';
import { blockblogaddress } from '@/config';
import blockblogjson from '../artifacts/contracts/BlockBlog.sol/BlockBlog.json';

const useBlockBlogFunctions = () => {

  const [blogPosts, setBlogPosts] = useState([]);
  const [profileUri, setPofileUri] = useState('');


  const blockblog = useContract(blockblogaddress, blockblogjson.abi);

  const createBlogPost = async (_postUri) => {
    if (_postUri) {
      const txn = await blockblog.createBlogPost(_postUri)
      await txn.wait();
    }
  }

  const likeBlogPost = async (_postId) => {
    if (_postId) {
      const txn = await blockblog.likeBlogPost(_postId)
      await txn.wait();
      getAllActivePosts();
    }
  }

  const deleteBlogPost = async (_postId) => {
    if (_postId) {
      const txn = await blockblog.deleteBlogPost(_postId)
      await txn.wait();
      getAllActivePosts();
    }
  }

  const updateListingStatus = async (_postId) => {
    if (_postId) {
      const txn = await blockblog.updateListingStatus(_postId)
      await txn.wait();
    }
  }

  const editBlogPost = async (_postId, _postUri) => {
    if (_postId && _postUri) {
      const txn = await blockblog.editBlogPost(_postId, _postUri)
      await txn.wait();
    }
  }

  const updateReadingList = async (_postId) => {
    if (_postId) {
      const txn = await blockblog.updateReadingList(_postId)
      await txn.wait();
    }
  }

  const getReadingList = async (_reader) => {
    if (_reader) {
      const txn = await blockblog.getReadingList(_reader);
      await txn.wait();
    }
  }

  const getUserPostList = async (_userAddress) => {
    if (_userAddress) {
      const txn = await blockblog.getUserPostList(_userAddress);
      await txn.wait();
    }
  }

  const getBlogPost = async () => {

  }

  const getAllActivePosts = async () => {
    const data = await blockblog.getAllActivePosts();
    setBlogPosts(data);
    console.log(data);
  }

  const userProfileUri = async (_postUri) => {
    if (_postUri) {
      const txn = await blockblog.userProfileUri(_postUri)
      await txn.wait();
    }
  }
  // const _userAddress = "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a";
  const getUserProfileUri = async (_userAddress) => {
    if (_userAddress) {
      const data = await blockblog.getUserProfileUri(_userAddress);
      setPofileUri(data);
    }
  }

  const orderCoffee = async (_userAddress) => {
    const txn = await blockblog.orderCoffee(_userAddress, {value:ethers.utils.parseEther("1")});
    await txn.wait();
  }







  return {
    createBlogPost,
    likeBlogPost,
    deleteBlogPost,
    updateListingStatus,
    editBlogPost,
    updateReadingList,
    getReadingList,
    getUserPostList,
    getAllActivePosts,
    getBlogPost,
    blogPosts,
    userProfileUri,
    getUserProfileUri,
    profileUri,
    orderCoffee
  }
}

export default useBlockBlogFunctions
