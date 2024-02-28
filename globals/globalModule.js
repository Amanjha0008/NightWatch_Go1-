const allureReporter = require('nightwatch-allure');
const fs = require('fs');
const logger = require('../tests/logger');

module.exports = {
    before: (done) => {
        console.log('before');
        done();
    },
    after: (done) => {
        console.log('after');
        done();
    },
    beforeEach: (browser , done) => {
        console.log('before Each');
        browser.status(result =>{
            console.log(result.value)
            done()
        });
    },
    afterEach: (browser, done) => {
        console.log('afterEach');
       console.log(browser.currentTest);
       done()
    },

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
};
