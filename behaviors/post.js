module.exports = Behavior({
  properties: {
    avatarUrl: String,
    nickname: String,
    content: String,
    likes: Number,
  },
  data: {
    liked: false,
  },

  methods: {
    onLike: function () {},
  },
});
