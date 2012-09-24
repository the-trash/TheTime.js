(function() {

  Time.prototype.max_days = 42;

  Time.prototype.shift_months = function(n) {
    var shift;
    shift = this.month + n;
    shift = shift <= 0 ? shift - 1 : shift;
    return new Time([this.year, shift]);
  };

  Time.today = function(T2) {
    var T1;
    T1 = new Time;
    return T1.today(T2);
  };

  Time.prototype.today = function(T2) {
    var T1;
    T1 = this;
    T2 = Time.want(T2);
    return T1.year === T2.year && T1.month === T2.month && T1.day === T2.day;
  };

  Time.prototype.month_length = function(year, month) {
    if (year == null) {
      year = this.year;
    }
    if (month == null) {
      month = this.month;
    }
    return new Date(year, month, 0).getDate();
  };

  Time.prototype.prev_month_length = function() {
    return new Date(this.year, this.month - 1, 0).getDate();
  };

  Time.prototype.next_month_length = function() {
    return new Date(this.year, this.month + 1, 0).getDate();
  };

  Time.prototype.first_day_of_month = function() {
    var day;
    day = new Date(this.year, this.month - 1, 1).getDay();
    return day = day === 0 ? 7 : day;
  };

  Time.prototype.last_day_of_month = function() {
    var day, length;
    length = this.month_length(this.year, this.month);
    day = new Date(this.year, this.month - 1, length).getDay();
    return day = day === 0 ? 7 : day;
  };

  Time.prototype.days_before_month = function() {
    return this.first_day_of_month() - 1;
  };

  Time.prototype.days_after_month = function() {
    return this.max_days - (this.days_before_month() + this.month_length());
  };

}).call(this);