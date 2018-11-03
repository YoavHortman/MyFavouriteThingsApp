# Hello!
Please read the entire file before starting.

# Setup
npm install

npm start

# Typescript
This app was built using TypeScript, a Javascript superset that adds static typing,
I believe that in order to keep any code base, larger than 20 lines of code, maintainable one must use static types.

# CSS
This app was built to fit (almost) any screen size.

This app uses no external CSS libraries.
This is to keep the small code base bloat free and easy to read.

Notice that each .tsx file has a .css file with the same name, this is to insure that each file only uses it's own CSS classes and that if one class is changed it will not effect the rest of the codebase.

# Testing
npm run test

All committed snapshot files should remain unchanged

This app uses a testing method called Snapshot Testing.
Snapshot testing is a quick and easy way to test components during the maintenance phase.
