DefaultTimeLocale =
  localeName: 'en'
  locale:
    'month' :
      'name'  : [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      'gen'   : [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
              
      'abbr'  : [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      'abbr2' : [null, 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

    'day' :
      'name' : [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      'abbr' : [null, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

      'part' :
        'night':   'night'
        'morning': 'morning'
        'day':     'day'
        'evening': 'evening'

####################################################
# Registration
####################################################
# Browser or Node.js
scope = if typeof window is 'object' then window else global
scope.DefaultTimeLocale = DefaultTimeLocale