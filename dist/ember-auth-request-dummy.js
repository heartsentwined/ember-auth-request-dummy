// Generated by EmberScript 0.0.7
var get$ = Ember.get;
Em.onLoad('Ember.Application', function (application) {
  application.initializer({
    name: 'ember-auth.request.dummy',
    before: 'ember-auth-load',
    initialize: function (container, app) {
      app.register('authRequest:dummy', get$(get$(Em, 'Auth'), 'DummyAuthRequest'), { singleton: true });
      return app.inject('authRequest:dummy', 'auth', 'auth:main');
    }
  });
  return application.initializer({
    name: 'ember-auth.request.dummy-load',
    after: 'ember-auth-load',
    initialize: function (container, app) {
      return container.lookup('authRequest:dummy');
    }
  });
});// Generated by EmberScript 0.0.7
var get$ = Ember.get;
var set$ = Ember.set;
set$(get$(Em, 'Auth'), 'DummyAuthRequest', get$(get$(Em, 'Auth'), 'AuthRequest').extend({
  signIn: function (url, opts) {
    return this.send(opts);
  },
  signOut: function (url, opts) {
    return this.send(opts);
  },
  send: function (opts) {
    return new (get$(get$(Em, 'RSVP'), 'Promise'))(function (resolve, reject) {
      return resolve(JSON.stringify(opts));
    });
  }
}));