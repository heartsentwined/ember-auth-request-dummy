# dummy request adapter for ember-auth

[![Build Status](https://secure.travis-ci.org/heartsentwined/ember-auth-request-dummy.png)](http://travis-ci.org/heartsentwined/ember-auth-request-dummy)

A request adapter that does nothing - designed for unit tests.

## Config

```coffeescript
App.Auth = Em.Auth.extend
  request: 'dummy'
```
