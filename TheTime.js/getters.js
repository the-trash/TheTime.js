(function() {

  Time.prototype.to_s = function() {
    return this.date.toString();
  };

  Time.prototype.utc = function() {
    return this.date.toUTCString();
  };

  Time.prototype.gmt = function() {
    return this.date.toGMTString();
  };

  Time.prototype.to_gmt_hash = function() {
    var gmt;
    gmt = this.to_gmt_a();
    return {
      year: gmt[0],
      month: gmt[1],
      day: gmt[2],
      hours: gmt[3],
      mins: gmt[4],
      secs: gmt[5],
      ms: gmt[6],
      shift: gmt[7]
    };
  };

  Time.prototype.dump = function() {
    return "" + this.year + "." + this.month + "." + this.day + " " + this.hours + ":" + this.mins + ":" + this.secs + "/" + this.ms + " [shift:" + this.shift + "/UNIX:" + this.unix + "/UNIXms:" + this.unix_ms + "]";
  };

  Time.prototype.to_gmt_a = function() {
    var day, gmt, hours, mins, month, part, secs, str, tpart, year;
    str = this.gmt();
    part = str.split(' ');
    year = parseInt(part[3], 10);
    month = part[2];
    day = parseInt(part[1], 10);
    tpart = part[4].split(':');
    hours = parseInt(tpart[0], 10);
    mins = parseInt(tpart[1], 10);
    secs = parseInt(tpart[2], 10);
    gmt = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12
    };
    return [year, gmt[month], day, hours, mins, secs, this.ms, 0];
  };

}).call(this);
