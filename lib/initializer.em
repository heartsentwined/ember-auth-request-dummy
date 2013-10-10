Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.request.dummy'
    before: 'ember-auth-load'

    initialize: (container, app) ->
      app.register 'authRequest:dummy', Em.Auth.DummyAuthRequest
      app.inject 'authRequest:dummy', 'auth', 'auth:main'
