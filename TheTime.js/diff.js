(function() {

  Time.prototype.months_diff = function(T1, T2) {
    var months_between, years, years_abs;
    T1 = Time.want(T1);
    T2 = Time.want(T2);
    years = T1.year - T2.year;
    years_abs = Math.abs(years);
    if (years > 0) {
      months_between = (years_abs - 1) * 12;
      return (12 - T2.month) + months_between + T1.month;
    } else if (years < 0) {
      months_between = (years_abs - 1) * 12;
      return -((12 - T1.month) + months_between + T2.month);
    } else {
      return T1.month - T2.month;
    }
  };

  Time.diff = function(T1, T2) {
    T1 = Time.want(T1);
    T2 = Time.want(T2);
    return T1.diff(T2);
  };

  Time.prototype.diff = function(T) {
    var hours, min, res, sec;
    T = Time.want(T);
    sec = 60;
    min = 60;
    hours = 24;
    res = {
      unix: this.unix - T.unix,
      unix_ms: this.unix_ms - T.unix_ms,
      shift: this.shift - T.shift,
      years: this.year - T.year,
      months: this.months_diff(this, T)
    };
    res.weeks = res.unix / (sec * min * hours * 7);
    res.days = res.unix / (sec * min * hours);
    res.hours = res.unix / (sec * min);
    res.mins = res.unix / sec;
    res.secs = res.unix;
    res.ms = res.unix_ms;
    res.abs = {
      years: Math.abs(res.years),
      months: Math.abs(res.months),
      weeks: Math.abs(res.weeks),
      days: Math.abs(res.days),
      hours: Math.abs(res.hours),
      mins: Math.abs(res.mins),
      secs: Math.abs(res.secs),
      ms: Math.abs(res.unix_ms)
    };
    res.int = {
      weeks: parseInt(res.abs.weeks),
      days: parseInt(res.abs.days),
      hours: parseInt(res.abs.hours),
      mins: parseInt(res.abs.mins),
      secs: parseInt(res.abs.secs),
      ms: parseInt(res.abs.ms)
    };
    res.tail = {
      hours: res.int.hours % 24,
      mins: res.int.mins % 60,
      secs: res.int.secs % 60,
      ms: res.int.ms % 1000
    };
    res.months_between = res.abs.months > 1 ? res.abs.months - 1 : 0;
    return res;
  };

}).call(this);