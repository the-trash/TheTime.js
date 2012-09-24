(function() {

  Time.prototype.shift_years = function(n) {
    return new Time([this.year + n, this.month]);
  };

  Time.prototype.shift_months = function(n) {
    var shift;
    shift = this.month + n;
    shift = shift <= 0 ? shift - 1 : shift;
    return new Time([this.year, shift]);
  };

  Time.prototype.shift_weeks = function(n) {
    var hours, mins, secs, weeks;
    secs = 60;
    mins = 60;
    hours = 24;
    weeks = secs * mins * hours * 7 * n;
    return new Time(this.unix + weeks);
  };

  Time.prototype.shift_days = function(n) {
    var days, hours, mins, secs;
    secs = 60;
    mins = 60;
    hours = 24;
    days = secs * mins * hours * n;
    return new Time(this.unix + days);
  };

  Time.prototype.shift_hours = function(n) {
    var hours, mins, secs;
    secs = 60;
    mins = 60;
    hours = secs * mins * n;
    return new Time(this.unix + hours);
  };

  Time.prototype.shift_mins = function(n) {
    var mins, secs;
    secs = 60;
    mins = secs * n;
    return new Time(this.unix + mins);
  };

  Time.prototype.shift_secs = function(n) {
    return new Time(this.unix + n);
  };

}).call(this);