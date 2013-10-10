# dummy request adapter for ember-auth

A request adapter that does nothing - designed for unit tests.

## Config

```coffeescript
App.Auth = Em.Auth.extend
  request: 'dummy'
```
