const postBehavior = require("../../behaviors/post.js");

Component({
  behaviors: [postBehavior],
  properties: {
    comments: Number,
    shares: Number,
  },
  methods: {},
});
