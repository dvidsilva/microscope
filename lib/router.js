// https://github.com/EventedMind/iron-router //
// Using iron-router //
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
  this.route('something', {
    where: 'server',
    path: '/postio',
    data: function () {
      this.response.end( 'server route' );
    }
  });
});

Router.onAfterAction(function(){
  Session.set('pageTitle', 'A different title');
}, {only: 'postPage'});