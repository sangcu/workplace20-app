var debug = require('debug')('acione:application initialize'),
  _ = require('underscore'),
  fs = require('fs'),
  ErrorHandler = require('errorhandler'),
  AuthenMiddleWare = require('./authen'),
	ModuleHelper = require('../module-helper');
  AuthorityMiddleWare = require('./authority');


function ApplicationInitialize() {
  var self = this;
  self.expressApp = null;
  self.server = null;

  this.setupApplicationRoutes = function() {
    var routes = ModuleHelper.loadRoutes();

    routes.forEach(function(route) {

      for (var i = 0; i < route.length; i++) {
        var action = route[i];
        if (!action.method || !self.expressApp[action.method]) {

          throw new Error('method is not available');
        }

        if (!action.url || !action.handler || (typeof action.handler !== 'function' && !Array.isArray(action.handler))) {
          throw new Error('URL or Handler not found in route defination');
        }

        var middlewares = [action.url];

        if (action.authen) {
          middlewares.push(AuthenMiddleWare.authen);
        }

        if (action.roles) {
          middlewares.push(AuthorityMiddleWare.authorityRequest);
        }
        if (action.handler && Array.isArray(action.handler)) {
          for (var h of action.handler) {
            middlewares.push(h);
          }
        } else {
          middlewares.push(action.handler);
        }
        ModuleHelper.setActionByUrl(action.method, action.url, action);
        self.expressApp[action.method].apply(self.expressApp, middlewares);
      }
    });
    return self;
  };
  this.startApplication = function(hostPort) {
    self.server.listen(hostPort, function() {
      debug('Listening on port', hostPort);
    });
    return self;
  };

  return function(app, server) {
    if (!app) {
      throw new Error("please setup expressApp for initialize");
    }

    self.expressApp = app;
    self.server = server;

    return self;
  }
}

module.exports = new ApplicationInitialize();;
