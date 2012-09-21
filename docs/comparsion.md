## TheTime.js Comparsion Module

Compare 2 Times. Based on compasrion of Unix milliseconds

```javascript
M1 = new Time([2012, 10, 13])
M2 = new Time([2012, 10, 12])

M1.less(M2)             // false
M1.less_or_equal(M2)    // false
M1.equal(M2)            // false
M1.greater_or_equal(M2) // true
M1.greater(M2)          // true
```

Shortcuts

```javascript
M1 = new Time([2012, 10, 13])
M2 = new Time([2012, 10, 12])

M1.l(M2)   // false
M1.loe(M2) // false
M1.eq(M2)  // false
M1.goe(M2) // true
M1.g(M2)   // true
```