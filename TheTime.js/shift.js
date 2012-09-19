(function() {

  Moment.prototype.shift_years = function(n) {
    return new Moment([this.year + n, this.month]);
  };

  Moment.prototype.shift_months = function(n) {
    var shift;
    shift = this.month + n;
    shift = shift <= 0 ? shift - 1 : shift;
    return new Moment([this.year, shift]);
  };

  Moment.prototype.shift_weeks = function(n) {
    var hours, mins, secs, weeks;
    secs = 60;
    mins = 60;
    hours = 24;
    weeks = secs * mins * hours * 7 * n;
    return new Moment(this.unix + weeks);
  };

  Moment.prototype.shift_days = function(n) {
    var days, hours, mins, secs;
    secs = 60;
    mins = 60;
    hours = 24;
    days = secs * mins * hours * n;
    return new Moment(this.unix + days);
  };

  Moment.prototype.shift_hours = function(n) {
    var hours, mins, secs;
    secs = 60;
    mins = 60;
    hours = secs * mins * n;
    return new Moment(this.unix + hours);
  };

  Moment.prototype.shift_mins = function(n) {
    var mins, secs;
    secs = 60;
    mins = secs * n;
    return new Moment(this.unix + mins);
  };

  Moment.prototype.shift_secs = function(n) {
    return new Moment(this.unix + n);
  };

}).call(this);
