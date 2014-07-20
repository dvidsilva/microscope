Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('post', 'dvidsilva');
  }
});
Router.map(function () {
  this.route('postsList', {
    path: '/'
  });
  this.route('postPage', {
    path: '/post/:_id',
    data: function () {
      return Post.findOne(this.params._id);
    }
  });
});