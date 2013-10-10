Em.onLoad 'Ember.Application', (application) ->
  application.initializer
    name: 'ember-auth.request.dummy'
    before: 'ember-auth-load'

    initialize: (container, app) ->
      app.register 'authRequest:dummy', Em.Auth.DummyAuthRequest, \
      { singleton: true }
      app.inject 'authRequest:dummy', 'auth', 'auth:main'

  application.initializer
    name: 'ember-auth.request.dummy-load'
    after: 'ember-auth-load'

    initialize: (container, app) ->
      # force init() call wth an eager-load
      container.lookup 'authRequest:dummy'
