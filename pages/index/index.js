// index.js
const { getBlogPosts } = require("../../utils/blogPost.js");

Page({
  data: {
    blogPosts: [],
    loading: true,
    showDetail: false,
  },
  onReady: function () {
    const that = this;
    getBlogPosts(10).then(function (posts) {
      that.setData({ blogPosts: posts, loading: false });
    });
  },
  onPullDownRefresh: function () {
    const that = this;
    getBlogPosts(10).then(function (posts) {
      that.setData({ blogPosts: [...posts, ...that.data.blogPosts] });
    });
  },
  onReachBottom: function () {
    const that = this;
    this.setData({ loading: true });
    getBlogPosts(10).then(function (posts) {
      that.setData({
        blogPosts: [...that.data.blogPosts, ...posts],
        loading: false,
      });
    });
  },
  onLike: function (evt) {
    const { liked, postId } = evt.detail;
    const posts = this.data.blogPosts.map(function (post) {
      if (post.id === postId) {
        const likes = liked ? post.likes + 1 : post.likes - 1;
        return { ...post, likes };
      }
      return post;
    });
    this.setData({ blogPosts: posts });
  },
});
