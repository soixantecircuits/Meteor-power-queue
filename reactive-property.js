// #Reactive Property
// Client-side reactive version
// Testing internal docs...
//


/**
  * @constructor
  * @param {any} defaultValue Set the default value for the reactive property
  *
  * This api should only be in the internal.api.md
  */
reactiveProperty = function(defaultValue) {
  var self = this;
  var _deps = new Deps.Dependency();

  self.value = defaultValue;

  self.get = function() {
    _deps.depend();
    return self.value;
  };

  self.set = function(value) {
    if (self.value !== value) {
      self.value = value;
      _deps.changed();
    }
  };

  self.dec = function(by) {
    self.value -= by || 1;
    _deps.changed();
  };

  self.inc = function(by) {
    self.value += by || 1;
    _deps.changed();
  };

  self.getset = function(value) {
    if (typeof value !== 'undefined') {
      self.set(value);
    } else {
      return self.get();
    }
  };

};
