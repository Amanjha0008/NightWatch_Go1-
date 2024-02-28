# NightWatch_Assignment01

## Overview
Here , In this Assignment we have used the POM (Page Object Model) & created the diffrent Pages for the diffrent Functionalities of "Login" and "My Activity" Feature of Go1%,, It will lead our code more efficient, reusable, scalable & maintable.

## Website (refer to test)
https://nashtechglobal.qa.go1percent.com/

## Test Overview
1) I Created the Global hooks in the 'globalModule.js' in the globals directory for the reusablity.
2) And I created the diffrent pages - 'LoginPage.js' , 'myActivity.js' and run them in the 'goOne.test.js' and 'myActivityTest.js' simultaneously inside the test directory.
3) I have used various locator strategy in it
```bash
username: "#user-name",
password: {
  selector: "#password",
  locatorStrategy: 'css Selector',
},
```
4) For the Print Operation - I use
```bash
logger.info("Starting test")
```
5) For using this logger we have to install 'winston'
#### command: (in terminal)
```bash
npm install winston
```
#### After that I created a logger.js inside the test directory and configured winston
```bash
//This is my logger file
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;

```
## Test Assert and Passed 
1) PASSED. 25 total assertions in the goOneTest.js for the Login features
2) PASSED, 09 total assertions in the myActivityTest.js for the myActivity Feature under the Dashboard.

### How to clone the repo 
```bash
git clone https://github.com/Amanjha0008/NightWatch_Go1-/tree/Feature-Branch
```

### How to run the Project?
1) #### Go to the Terminal
2) #### Run this Command - (for the LoginPage.js)
```bash
npx nightwatch tests/goOneTest.js --env chrome
```
#### (for the myActivity.js)
```bash
npx nightwatch tests/Dashboard/myActivityTest.js --env chrome
```
3) #### See the Output

## Test Reports
#### For the Test report i use allureReports for that in the terminal (after test run)
#### (run in the terminal)
```bash
allure generate ./allure-results --clean && allure open
```
#### Also you can refer for the reports 
```bash
testresults.json file
```
That I created in the globalModule.js inside globals directory
```bash
 reporter: (results,done)=>{
    const reporter = new allureReporter.NightwatchAllureReporter({});
    reporter.write(results,done);
    },

    reporter: (results,done) => {
        fs.writeFile('testresults.json', JSON.stringify(results, null, '\t'), (err) => {
            if (err) throw err;

            logger.info('report saved')
        });
    }
```

