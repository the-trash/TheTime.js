(function() {

  Moment.prototype.less = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Moment.want(M);
    return this.unix_ms < M.unix_ms;
  };

  Moment.prototype.less_or_equal = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Moment.want(M);
    return this.unix_ms <= M.unix_ms;
  };

  Moment.prototype.equal = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Moment.want(M);
    return this.unix_ms === M.unix_ms;
  };

  Moment.prototype.greater_or_equal = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Moment.want(M);
    return this.unix_ms >= M.unix_ms;
  };

  Moment.prototype.greater = function(M) {
    if (M == null) {
      M = new Date;
    }
    M = Moment.want(M);
    return this.unix_ms > M.unix_ms;
  };

  Moment.prototype.l = function(M) {
    return this.less(M);
  };

  Moment.prototype.loe = function(M) {
    return this.less_or_equal(M);
  };

  Moment.prototype.e = function(M) {
    return this.equal(M);
  };

  Moment.prototype.goe = function(M) {
    return this.greater_or_equal(M);
  };

  Moment.prototype.g = function(M) {
    return this.greater(M);
  };

}).call(this);
