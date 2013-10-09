#= require ./i18n_default
#= require ./i18n_ru

# JavaScript Time and Date Framework
# TheTime.js, Node.js and Browser js Data object wrapper
# OpenSource project. Publicated by MIT. 2012
# github.com/the-teacher

# Convertation
Date::to_t = => new Time @

_size = (obj) ->
  size = 0
  for key of obj
    size++ if obj.hasOwnProperty(key)
  size

class Time
  @to_dance = "Oppa is Gangnam style!"

  @toLeadingZero = (int, sign = false) ->
    num   = Math.abs(int)
    _sign = if int < 0 then '-' else ''
    _sign = if sign then _sign  else ''
    t     = if Math.abs(int) < 10 then "#{_sign}0#{num}" else "#{_sign}#{num}"

  locales:        {}
  localeName:    null
  currentLocale: null

  @new: (data) -> new Time data

  @addLocale: (name, locale) ->
    Time::locales[name] = locale
    Time::localeName   = name

  @setDefaultLocale: (name) ->
    Time::localeName    = name
    Time::currentLocale = Time::locales[name]

  @getDefaultLocaleName: -> Time::localeName
  @getDefaultLocale:     -> Time::locales[Time::localeName]

  @want: (T) ->
    T = if T instanceof Time then T else new Time T

  setLocale: (name) ->
    @localeName    = name
    @currentLocale = @locales[name]
    @t = @currentLocale

  # Constructor
  constructor: (date) ->
    @scope  = if typeof window is 'object' then window else global
    @offset = @_offset new Date

    # set base locale
    if _size(@locales) is 0
      [n, l] = [DefaultTimeLocale.localeName, DefaultTimeLocale.locale]
      Time.addLocale(n, l)
      Time.setDefaultLocale(n)
    @t = @currentLocale
    # parse
    @parse date

  # GET
  month_name: -> @t.month.name[@month]
  day_name:   -> @t.day.name[@day_of_week()]
  day_of_week: (date = @date) -> 
    day = date.getDay()
    day = if day is 0 then 7 else day

  # Basic formats
  to_a:    -> [@year, @month, @day, @hours, @mins, @secs, @ms, @offset]
  to_hash: -> { year: @year, month: @month, day: @day, hours: @hours, mins: @mins, secs: @secs, ms: @ms, offset: @offset }
  toMonthString: -> "#{@year}.#{@month}"
  toDayString:   -> "#{@year}.#{@month}.#{@day}"

  # SET
  set: (d) -> @parse d

  setYear: (y) ->
    d = @date
    d.setYear y
    @parse d

  setMonth: (m) ->
    d = @date
    d.setMonth m - 1
    @parse d

  setDay: (_d) ->
    d = @date
    d.setDate(_d)
    @parse d

  setHours: (h) ->
    d = @date
    d.setHours h
    @parse d

  setMins: (m) ->
    d = @date
    d.setMinutes m
    @parse d

  setSecs: (s) ->
    d = @date
    d.setSeconds s
    @parse d

  setMs: (ms) ->
    d = @date
    d.setMilliseconds ms
    @parse d

  setUnix: (sec) ->
    @parse sec

  setUnixMs: (ms) ->
    @parseDate new Date(ms)

  setDateByInstances: ->
    date  = new Date '1970/1/1'
    month = if @month > 0 then @month - 1 else @month
    date.setFullYear     @year
    date.setMonth        month
    date.setDate         @day
    date.setHours        @hours
    date.setMinutes      @mins
    date.setSeconds      @secs
    date.setMilliseconds @ms
    @date = date

  # DEFAULT
  _year:    (date = new Date) -> date.getFullYear()
  _month:   (date = new Date) -> date.getMonth() + 1
  _day:     (date = new Date) -> date.getDate()
  _hours:   (date = new Date) -> date.getHours()
  _mins:    (date = new Date) -> date.getMinutes()
  _secs:    (date = new Date) -> date.getSeconds()
  _ms:      (date = new Date) -> date.getMilliseconds()
  _offset:  (date = new Date) -> -(date.getTimezoneOffset()/60)
  _unix_ms: (date = new Date) -> date.getTime()

  # PARSERS
  parse: (date) ->
    # Empty
    @parseDate() unless date
    # String
    if typeof(date) is 'string'
      empty = date is ''

      @parseDate()       if     empty
      @parseString date  unless empty
    # Number (Unix seconds)
    if typeof(date) is 'number'
      @parseNumber date * 1000
    # Date | Hash | Array | Time objects
    if typeof(date) is 'object'
      return @parseDate  date       if date instanceof Date
      return @parseArray date       if date instanceof Array
      return @parseHash  date       if date instanceof Object
      return new Time date.to_a() if date instanceof Time
    @

  parseDate: (date = new Date) ->
    @date    = date
    @year    = @_year    @date
    @month   = @_month   @date
    @day     = @_day     @date
    @hours   = @_hours   @date
    @mins    = @_mins    @date
    @secs    = @_secs    @date
    @ms      = @_ms      @date
    @unix_ms = @_unix_ms @date
    @unix    = Math.round(@unix_ms / 1000)
    @

  # date = [2012, 3, 30, , 12, 25, 59, -3]
  parseArray: (date) ->
    return @parseDate() if date.length is 0
    _date  = new Date '1970/1/1'
    @year  = if date[0]  then date[0] else @_year _date

    @month = if date[1]  then date[1] else 1
    @day   = if date[2]  then date[2] else 1
    @hours = if date[3]  then date[3] else 0
    @mins  = if date[4]  then date[4] else 0
    @secs  = if date[5]  then date[5] else 0
    @ms    = if date[6]  then date[6] else 0

    @setDateByInstances()
    @parseDate @date

  # date = {'month': 3, 'day': 30, 'year': 2012, 'hours': 12, 'mins': 25, 'secs': 59, 'offset': -3}
  parseHash: (date) ->
    empty_hash = !date['year'] and !date['month'] and !date['day'] and !date['hours'] and !date['mins']  and !date['secs'] and !date['ms']
    return @parseDate() if empty_hash 

    _date  = new Date '1970/1/1'
    @year  = if date['year']    then date['year']   else @_year _date
    @month = if date['month']   then date['month']  else 1
    @day   = if date['day']     then date['day']    else 1
    @hours = if date['hours']   then date['hours']  else 0
    @mins  = if date['mins']    then date['mins']   else 0
    @secs  = if date['secs']    then date['secs']   else 0
    @ms    = if date['ms']      then date['ms']     else 0

    @setDateByInstances()
    @parseDate @date

  # Valid date string
  parseString: (date) ->
    # fix str for Moz, if it's not ISOstring
    # '2012-10-01 16:55' => '2012/10/01 16:55'
    if date.match('-') && date.match(':') && !date.match('T')
      date = date.replace(/-/g, '/') 

    # '2012.10.03' => ['2012', '10', '03']
    if date.match('\\.') && !date.match(':')
      return @parseArray date.split('.')

    # '2012-10-3' => ['2012', '10', '3']
    if date.match('-') && !date.match(':')
      return @parseArray date.split('-')

    # just str parse
    _date = new Date Date.parse date
    @parseDate _date

  # Unix time in ms
  parseNumber: (date) ->
    _date = new Date date
    @parseDate _date

####################################################
# Registration
####################################################
# Browser or Node.js
scope = if typeof window is 'object' then window else global

# Add to global scope
scope.Time  = Time
scope._size = _size
scope.to_lz = Time.toLeadingZero

Time.addLocale DefaultTimeLocale.localeName, DefaultTimeLocale.locale
Time.setDefaultLocale 'en'