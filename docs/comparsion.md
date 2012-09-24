## TheTime.js Comparsion Todule

Compare 2 Times. Based on compasrion of Unix milliseconds

```javascript
T1 = new Time([2012, 10, 13])
T2 = new Time([2012, 10, 12])

T1.less(T2)             // false
T1.less_or_equal(T2)    // false
T1.equal(T2)            // false
T1.greater_or_equal(T2) // true
T1.greater(T2)          // true
```

Shortcuts

```javascript
T1 = new Time([2012, 10, 13])
T2 = new Time([2012, 10, 12])

T1.l(T2)   // false
T1.loe(T2) // false
T1.eq(T2)  // false
T1.goe(T2) // true
T1.g(T2)   // true
```