(function() {

  Time.prototype.months_diff = function(M1, M2) {
    var months_between, years, years_abs;
    M1 = Time.want(M1);
    M2 = Time.want(M2);
    years = M1.year - M2.year;
    years_abs = Math.abs(years);
    if (years > 0) {
      months_between = (years_abs - 1) * 12;
      return (12 - M2.month) + months_between + M1.month;
    } else if (years < 0) {
      months_between = (years_abs - 1) * 12;
      return -((12 - M1.month) + months_between + M2.month);
    } else {
      return M1.month - M2.month;
    }
  };

  Time.diff = function(M1, M2) {
    M1 = Time.want(M1);
    M2 = Time.want(M2);
    return M1.diff(M2);
  };

  Time.prototype.diff = function(M) {
    var hours, min, res, sec;
    M = Time.want(M);
    sec = 60;
    min = 60;
    hours = 24;
    res = {
      unix: this.unix - M.unix,
      unix_ms: this.unix_ms - M.unix_ms,
      shift: this.shift - M.shift,
      months: this.months_diff(this, M)
    };
    res.years = res.months / 12;
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
      years: parseInt(res.abs.years, 10),
      months: res.abs.months,
      weeks: parseInt(res.abs.weeks, 10),
      days: parseInt(res.abs.days, 10),
      hours: parseInt(res.abs.hours, 10),
      mins: parseInt(res.abs.mins, 10),
      secs: parseInt(res.abs.secs, 10),
      ms: parseInt(res.abs.ms, 10)
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