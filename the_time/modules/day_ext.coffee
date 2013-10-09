Time::part_of_day =->
  part = if @is_night()
    @t.day.part.night
  else if @is_morning()
    @t.day.part.morning
  else if @is_day()
    @t.day.part.day
  else
    @t.day.part.evening

# Part of day
Time::is_night    =-> @hours <  6
Time::is_morning  =-> @hours >= 6  and @hours < 12
Time::is_day      =-> @hours >= 12 and @hours < 18
Time::is_evening  =-> @hours >= 18

# week days
Time::is_weekend =->
  day = @day_of_week()
  day is 6 or day is 7

Time::is_monday    =-> @day_of_week() is 1
Time::is_tuesday   =-> @day_of_week() is 2
Time::is_wednesday =-> @day_of_week() is 3
Time::is_thursday  =-> @day_of_week() is 4
Time::is_friday    =-> @day_of_week() is 5
Time::is_saturday  =-> @day_of_week() is 6
Time::is_sunday    =-> @day_of_week() is 7

Time::is_mon =-> @is_monday()
Time::is_tue =-> @is_tuesday()
Time::is_wed =-> @is_wednesday()
Time::is_thu =-> @is_thursday()
Time::is_fri =-> @is_friday()
Time::is_sat =-> @is_saturday()
Time::is_sun =-> @is_sunday()