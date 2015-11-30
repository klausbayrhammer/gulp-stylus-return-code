h1. How to reproduce

h2. Gulp-stylus
Expected behaviour: Print the error and return code != 1
Actual behaviour: Error is printed and return code is 0

```
gulp stylus && echo $?
```

h2. Reference (gulp-jade)

```
gulp jade && echo $?
```