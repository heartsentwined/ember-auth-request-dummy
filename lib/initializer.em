Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth-request-dummy'
    after: 'ember-auth'

    initialize: (container, app) ->
      app.register 'authRequest:dummy', Em.Auth.DummyAuthRequest
