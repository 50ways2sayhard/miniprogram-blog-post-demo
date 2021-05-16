const faker = require("faker");

/**
 * create fake blog posts
 * @param {Number} count post numbers to create
 */
function getBlogPosts(count) {
  return new Promise(function (resolve, reject) {
    const blogPosts = [];
    for (let i = 0; i < count; i++) {
      blogPosts.push({
        id: faker.datatype.uuid(),
        avatarUrl: faker.image.avatar(),
        account: faker.name.findName(),
        nickname: faker.internet.userName(),
        content: faker.lorem.sentence(),
        likes: faker.datatype.number(),
        comments: faker.datatype.number(),
        shares: faker.datatype.number(),
      });
    }
    resolve(blogPosts);
  });
}

module.exports = {
  getBlogPosts,
};
