Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
  	return Meteor.subscribe('post', 'dvidsilva');
  }
});
Router.map(function() {
  this.route('postsList', {path: '/'});
});