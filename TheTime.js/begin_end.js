(function() {

  Time.prototype.begin_of_day = function() {
    return new Time([this.year, this.month, this.day]);
  };

  Time.prototype.end_of_day = function() {
    return new Time([this.year, this.month, this.day, 23, 59, 59, 999]);
  };

  Time.prototype.begin_of_week = function() {
    var m, shift;
    shift = -(this.day_of_week() - 1);
    m = this.shift_days(shift);
    return m.begin_of_day();
  };

  Time.prototype.end_of_week = function() {
    var m, shift;
    shift = 7 - this.day_of_week();
    m = this.shift_days(shift);
    return m.end_of_day();
  };

  Time.prototype.begin_of_month = function() {
    return new Time([this.year, this.month, 1]);
  };

  Time.prototype.end_of_month = function() {
    var d;
    d = this.month_length();
    return new Time([this.year, this.month, d, 23, 59, 59, 999]);
  };

  Time.prototype.begin_of_year = function() {
    return new Time([this.year, 1, 1]);
  };

  Time.prototype.end_of_year = function() {
    var d, last_month;
    last_month = new Time([this.year, 12]);
    d = last_month.month_length();
    return new Time([this.year, 12, d, 23, 59, 59, 999]);
  };

}).call(this);