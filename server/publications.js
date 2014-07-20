Meteor.publish('post', function(author) {
  return Post.find({flagged: {$ne : true }, author: author});
});