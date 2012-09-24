(function() {

  this.compactArray = function(array) {
    return array.filter(function(e) {
      return e;
    });
  };

  this.OrderedHash = (function() {

    function OrderedHash(array) {
      if (array == null) {
        array = [];
      }
      this.data = [];
      if (array.length > 0) {
        this.data = array;
      }
    }

    OrderedHash.prototype.get = function() {
      return this.data;
    };

    OrderedHash.prototype.push = function(obj) {
      this.data.push(obj);
      return this.sortByKey();
    };

    OrderedHash.prototype.deleteByKey = function(key) {
      var index, item, name, value, _ref;
      _ref = this.data;
      for (index in _ref) {
        item = _ref[index];
        for (name in item) {
          value = item[name];
          if (name.toString() === key.toString()) {
            delete this.data[index];
          }
        }
      }
      return this.data = compactArray(this.data);
    };

    OrderedHash.prototype.first = function() {
      return this.data[0];
    };

    OrderedHash.prototype.last = function() {
      return this.data[this.data.length - 1];
    };

    OrderedHash.prototype.sortByKey = function(reverse) {
      if (reverse == null) {
        reverse = false;
      }
      return this.data.sort(function(a, b) {
        var akey, anum, bkey, bnum, key, r, value, _ref;
        for (key in a) {
          value = a[key];
          akey = key;
        }
        for (key in b) {
          value = b[key];
          bkey = key;
        }
        anum = parseInt(akey, 10);
        bnum = parseInt(bkey, 10);
        if (typeof anum === 'number' && typeof bnum === 'number') {
          akey = anum;
          bkey = bnum;
        }
        if (reverse) {
          _ref = [bkey, akey], akey = _ref[0], bkey = _ref[1];
        }
        return r = akey > bkey ? 1 : akey < bkey ? -1 : 0;
      });
    };

    OrderedHash.prototype.sortByValue = function(reverse) {
      if (reverse == null) {
        reverse = false;
      }
      return this.data.sort(function(a, b) {
        var avalue, bvalue, key, r, value, _ref;
        for (key in a) {
          value = a[key];
          avalue = value.toString().toLowerCase();
        }
        for (key in b) {
          value = b[key];
          bvalue = value.toString().toLowerCase();
        }
        if (reverse) {
          _ref = [bvalue, avalue], avalue = _ref[0], bvalue = _ref[1];
        }
        return r = avalue > bvalue ? 1 : avalue < bvalue ? -1 : 0;
      });
    };

    return OrderedHash;

  })();

}).call(this);