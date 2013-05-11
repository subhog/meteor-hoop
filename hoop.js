$extends = function(child, parent) {
  function bond() {};
  bond.prototype = parent.prototype;
  child.prototype = new bond();
  child.prototype.constructor = child;
  child.super = parent.prototype;
};

$functions = function(f, object) {
  for(var key in object) {
    f.prototype[key] = object[key];   
  }
};

$statics = function(f, object) {
  for(var key in object) {
    f[key] = object[key];   
  }
};


