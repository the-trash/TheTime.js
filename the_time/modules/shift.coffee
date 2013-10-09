# return only [year] and [month]
Time::shift_years = (n) ->
  new Time [@year + n, @month]

Time::shift_months = (n) ->
  shift = @month + n
  shift = if shift <= 0 then shift - 1 else shift
  new Time [@year, shift]

# Shift with unix time
Time::shift_weeks = (n) ->
  secs  = 60
  mins  = 60
  hours = 24
  weeks = secs * mins * hours * 7 * n
  new Time @unix + weeks

Time::shift_days = (n) ->
  secs  = 60
  mins  = 60
  hours = 24
  days  = secs * mins * hours * n
  new Time @unix + days

Time::shift_hours = (n) ->
  secs  = 60
  mins  = 60
  hours = secs * mins * n
  new Time @unix + hours

Time::shift_mins = (n) ->
  secs  = 60
  mins  = secs * n
  new Time @unix + mins

Time::shift_secs = (n) ->
  new Time @unix + n