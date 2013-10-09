Time::max_days = 42

# dublicate from Shift Module
Time::shift_months = (n) ->
  shift = @month + n
  shift = if shift <= 0 then shift - 1 else shift
  new Time [@year, shift]

Time.today = (T2) ->
  T1 = new Time
  T1.today T2

Time::today = (T2) ->
  T1 = @
  T2 = Time.want T2
  T1.year is T2.year && T1.month is T2.month && T1.day is T2.day

Time::month_length = (year = @year, month = @month) -> new Date(year, month, 0).getDate()
Time::prev_month_length =-> new Date(@year, @month - 1, 0).getDate()
Time::next_month_length =-> new Date(@year, @month + 1, 0).getDate()

Time::first_day_of_month =->
  day = new Date(@year, @month - 1, 1).getDay()
  day = if day is 0 then 7 else day

Time::last_day_of_month =->
  length = @month_length @year, @month
  day = new Date(@year, @month - 1, length).getDay()
  day = if day is 0 then 7 else day

Time::days_before_month =-> @first_day_of_month() - 1
Time::days_after_month  =-> @max_days - (@days_before_month() + @month_length())