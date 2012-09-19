(function() {

  Moment.prototype.max_days = 42;

  Moment.prototype.shift_months = function(n) {
    var shift;
    shift = this.month + n;
    shift = shift <= 0 ? shift - 1 : shift;
    return new Moment([this.year, shift]);
  };

  Moment.today = function(M2) {
    var M1;
    M1 = new Moment;
    return M1.today(M2);
  };

  Moment.prototype.today = function(M2) {
    var M1;
    M1 = this;
    M2 = Moment.want(M2);
    return M1.year === M2.year && M1.month === M2.month && M1.day === M2.day;
  };

  Moment.prototype.month_length = function(year, month) {
    if (year == null) {
      year = this.year;
    }
    if (month == null) {
      month = this.month;
    }
    return new Date(year, month, 0).getDate();
  };

  Moment.prototype.prev_month_length = function() {
    return new Date(this.year, this.month - 1, 0).getDate();
  };

  Moment.prototype.next_month_length = function() {
    return new Date(this.year, this.month + 1, 0).getDate();
  };

  Moment.prototype.first_day_of_month = function() {
    var day;
    day = new Date(this.year, this.month - 1, 1).getDay();
    day = day === 0 ? 7 : day;
    return day;
  };

  Moment.prototype.last_day_of_month = function() {
    var day, length;
    length = this.month_length(this.year, this.month);
    day = new Date(this.year, this.month - 1, length).getDay();
    day = day === 0 ? 7 : day;
    return day;
  };

  Moment.prototype.days_before_month = function() {
    return this.first_day_of_month() - 1;
  };

  Moment.prototype.days_after_month = function() {
    return this.max_days - (this.days_before_month() + this.month_length());
  };

}).call(this);
