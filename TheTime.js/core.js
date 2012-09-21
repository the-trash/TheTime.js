(function() {
  var Time, scope, _size,
    _this = this;

  Date.prototype.to_m = function() {
    return new Time(_this);
  };

  _size = function(obj) {
    var key, size;
    size = 0;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  };

  Time = (function() {

    Time.o_mori = "Respice post te! Hominem te memento! (Look behind you! Remember that you are but a man!)";

    Time.toLeadingZero = function(int, sign) {
      var num, t, _sign;
      if (sign == null) {
        sign = false;
      }
      num = Math.abs(int);
      _sign = int < 0 ? '-' : '';
      _sign = sign ? _sign : '';
      return t = Math.abs(int) < 10 ? "" + _sign + "0" + num : "" + _sign + num;
    };

    Time.prototype.locales = {};

    Time.prototype.localeName = null;

    Time.prototype.currentLocale = null;

    Time["new"] = function(data) {
      return new Time(data);
    };

    Time.addLocale = function(name, locale) {
      Time.prototype.locales[name] = locale;
      return Time.prototype.localeName = name;
    };

    Time.setDefaultLocale = function(name) {
      Time.prototype.localeName = name;
      return Time.prototype.currentLocale = Time.prototype.locales[name];
    };

    Time.want = function(M) {
      return M = M instanceof Time ? M : new Time(M);
    };

    Time.prototype.setLocale = function(name) {
      this.localeName = name;
      this.currentLocale = this.locales[name];
      return this.t = this.currentLocale;
    };

    function Time(date) {
      var l, n, _ref;
      this.scope = typeof window === 'object' ? window : global;
      if (_size(this.locales) === 0) {
        _ref = [DefaultTimeLocale.localeName, DefaultTimeLocale.locale], n = _ref[0], l = _ref[1];
        Time.addLocale(n, l);
        Time.setDefaultLocale(n);
      }
      this.t = this.currentLocale;
      this.parse(date);
    }

    Time.prototype.month_name = function() {
      return this.t.month.name[this.month];
    };

    Time.prototype.day_name = function() {
      return this.t.day.name[this.day_of_week()];
    };

    Time.prototype.day_of_week = function(date) {
      var day;
      if (date == null) {
        date = this.date;
      }
      day = date.getDay();
      return day = day === 0 ? 7 : day;
    };

    Time.prototype.to_a = function() {
      return [this.year, this.month, this.day, this.hours, this.mins, this.secs, this.ms, this.offset];
    };

    Time.prototype.to_hash = function() {
      return {
        year: this.year,
        month: this.month,
        day: this.day,
        hours: this.hours,
        mins: this.mins,
        secs: this.secs,
        ms: this.ms,
        offset: this.offset
      };
    };

    Time.prototype.toMonthString = function() {
      return "" + this.year + "." + this.month;
    };

    Time.prototype.toDayString = function() {
      return "" + this.year + "." + this.month + "." + this.day;
    };

    Time.prototype.set = function(d) {
      return this.parse(d);
    };

    Time.prototype.setYear = function(y) {
      var d;
      d = this.date;
      d.setYear(y);
      return this.parse(d);
    };

    Time.prototype.setMonth = function(m) {
      var d;
      d = this.date;
      d.setMonth(m - 1);
      return this.parse(d);
    };

    Time.prototype.setDay = function(_d) {
      var d;
      d = this.date;
      d.setDate(_d);
      return this.parse(d);
    };

    Time.prototype.setHours = function(h) {
      var d;
      d = this.date;
      d.setHours(h);
      return this.parse(d);
    };

    Time.prototype.setMins = function(m) {
      var d;
      d = this.date;
      d.setMinutes(m);
      return this.parse(d);
    };

    Time.prototype.setSecs = function(s) {
      var d;
      d = this.date;
      d.setSeconds(s);
      return this.parse(d);
    };

    Time.prototype.setMs = function(ms) {
      var d;
      d = this.date;
      d.setMilliseconds(ms);
      return this.parse(d);
    };

    Time.prototype.setUnix = function(sec) {
      return this.parse(sec);
    };

    Time.prototype.setUnixMs = function(ms) {
      return this.parseDate(new Date(ms));
    };

    Time.prototype.setDateByInstances = function() {
      var date, month;
      date = new Date(0);
      month = this.month > 0 ? this.month - 1 : this.month;
      date.setFullYear(this.year);
      date.setMonth(month);
      date.setDate(this.day);
      date.setHours(this.hours);
      date.setMinutes(this.mins);
      date.setSeconds(this.secs);
      date.setMilliseconds(this.ms);
      return this.date = date;
    };

    Time.prototype._year = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getFullYear();
    };

    Time.prototype._month = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getMonth() + 1;
    };

    Time.prototype._day = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getDate();
    };

    Time.prototype._hours = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getHours();
    };

    Time.prototype._mins = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getMinutes();
    };

    Time.prototype._secs = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getSeconds();
    };

    Time.prototype._ms = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getMilliseconds();
    };

    Time.prototype._offset = function(date) {
      if (date == null) {
        date = new Date;
      }
      return -(date.getTimezoneOffset() / 60);
    };

    Time.prototype._unix_ms = function(date) {
      if (date == null) {
        date = new Date;
      }
      return date.getTime();
    };

    Time.prototype.parse = function(date) {
      var empty;
      if (!date) {
        this.parseDate();
      }
      if (typeof date === 'string') {
        empty = date === '';
        if (empty) {
          this.parseDate();
        }
        if (!empty) {
          this.parseString(date);
        }
      }
      if (typeof date === 'number') {
        this.parseNumber(date * 1000);
      }
      if (typeof date === 'object') {
        if (date instanceof Date) {
          return this.parseDate(date);
        }
        if (date instanceof Array) {
          return this.parseArray(date);
        }
        if (date instanceof Object) {
          return this.parseHash(date);
        }
        if (date instanceof Time) {
          return new Time(date.to_a());
        }
      }
      return this;
    };

    Time.prototype.parseDate = function(date) {
      if (date == null) {
        date = new Date;
      }
      this.date = date;
      this.year = this._year(this.date);
      this.month = this._month(this.date);
      this.day = this._day(this.date);
      this.hours = this._hours(this.date);
      this.mins = this._mins(this.date);
      this.secs = this._secs(this.date);
      this.ms = this._ms(this.date);
      this.offset = this._offset(this.date);
      this.unix_ms = this._unix_ms(this.date);
      this.unix = Math.round(this.unix_ms / 1000);
      return this;
    };

    Time.prototype.parseArray = function(date) {
      var _date;
      if (date.length === 0) {
        return this.parseDate();
      }
      _date = new Date(0);
      this.year = date[0] ? date[0] : this._year(_date);
      this.month = date[1] ? date[1] : 1;
      this.day = date[2] ? date[2] : 1;
      this.hours = date[3] ? date[3] : 0;
      this.mins = date[4] ? date[4] : 0;
      this.secs = date[5] ? date[5] : 0;
      this.ms = date[6] ? date[6] : 0;
      this.offset = date[7] ? date[7] : this._offset(_date);
      this.setDateByInstances();
      return this.parseDate(this.date);
    };

    Time.prototype.parseHash = function(date) {
      var empty_hash, _date;
      empty_hash = !date['year'] && !date['month'] && !date['day'] && !date['hours'] && !date['mins'] && !date['secs'] && !date['ms'];
      if (empty_hash) {
        return this.parseDate();
      }
      _date = new Date(0);
      this.year = date['year'] ? date['year'] : this._year(_date);
      this.month = date['month'] ? date['month'] : 1;
      this.day = date['day'] ? date['day'] : 1;
      this.hours = date['hours'] ? date['hours'] : 0;
      this.mins = date['mins'] ? date['mins'] : 0;
      this.secs = date['secs'] ? date['secs'] : 0;
      this.ms = date['ms'] ? date['ms'] : 0;
      this.offset = date['offset'] ? date['offset'] : this._offset(_date);
      this.setDateByInstances();
      return this.parseDate(this.date);
    };

    Time.prototype.parseString = function(date) {
      var _date;
      if (date.match('-') && date.match(':') && !date.match('T')) {
        date = date.replace(/-/g, '/');
      }
      if (date.match('\\.') && !date.match(':')) {
        return this.parseArray(date.split('.'));
      }
      _date = new Date(Date.parse(date));
      return this.parseDate(_date);
    };

    Time.prototype.parseNumber = function(date) {
      var _date;
      _date = new Date(date);
      return this.parseDate(_date);
    };

    return Time;

  })();

  scope = typeof window === 'object' ? window : global;

  scope.Time = Time;

  scope._size = _size;

  scope.to_lz = Time.toLeadingZero;

  Time.addLocale(DefaultTimeLocale.localeName, DefaultTimeLocale.locale);

  Time.setDefaultLocale('en');

}).call(this);
