module.exports = Behavior({
  properties: {
    postId: String,
    avatarUrl: String,
    account: String,
    nickname: String,
    content: String,
    likes: Number,
  },
  data: {
    liked: false,
  },

  methods: {
    onLike: function () {
      this.setData({ liked: !this.properties.liked });
      this.triggerEvent("like", {
        postId: this.properties.postId,
        liked: this.properties.liked,
      });
    },
  },
});
