# dummy request adapter for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-request-dummy.png)](http://travis-ci.org/heartsentwined/ember-auth-request-dummy)
[![Gem Version](https://badge.fury.io/rb/ember-auth-request-dummy-source.png)](http://badge.fury.io/rb/ember-auth-request-dummy-source)
[![NPM version](https://badge.fury.io/js/ember-auth-request-dummy.png)](http://badge.fury.io/js/ember-auth-request-dummy)

A request adapter that does nothing - designed for unit tests.

## Config

```coffeescript
App.Auth = Em.Auth.extend
  request: 'dummy'
```

License
=======

MIT
