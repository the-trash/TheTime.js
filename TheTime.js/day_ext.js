(function() {

  Moment.prototype.part_of_day = function() {
    var part;
    return part = this.is_night() ? this.t.day.part.night : this.is_morning() ? this.t.day.part.morning : this.is_day() ? this.t.day.part.day : this.t.day.part.evening;
  };

  Moment.prototype.is_night = function() {
    return this.hours < 6;
  };

  Moment.prototype.is_morning = function() {
    return this.hours >= 6 && this.hours < 12;
  };

  Moment.prototype.is_day = function() {
    return this.hours >= 12 && this.hours < 18;
  };

  Moment.prototype.is_evening = function() {
    return this.hours >= 18;
  };

  Moment.prototype.is_weekend = function() {
    var day;
    day = this.day_of_week();
    return day === 6 || day === 7;
  };

  Moment.prototype.is_monday = function() {
    return this.day_of_week() === 1;
  };

  Moment.prototype.is_tuesday = function() {
    return this.day_of_week() === 2;
  };

  Moment.prototype.is_wednesday = function() {
    return this.day_of_week() === 3;
  };

  Moment.prototype.is_thursday = function() {
    return this.day_of_week() === 4;
  };

  Moment.prototype.is_friday = function() {
    return this.day_of_week() === 5;
  };

  Moment.prototype.is_saturday = function() {
    return this.day_of_week() === 6;
  };

  Moment.prototype.is_sunday = function() {
    return this.day_of_week() === 7;
  };

  Moment.prototype.is_mon = function() {
    return this.is_monday();
  };

  Moment.prototype.is_tue = function() {
    return this.is_tuesday();
  };

  Moment.prototype.is_wed = function() {
    return this.is_wednesday();
  };

  Moment.prototype.is_thu = function() {
    return this.is_thursday();
  };

  Moment.prototype.is_fri = function() {
    return this.is_friday();
  };

  Moment.prototype.is_sat = function() {
    return this.is_saturday();
  };

  Moment.prototype.is_sun = function() {
    return this.is_sunday();
  };

}).call(this);
