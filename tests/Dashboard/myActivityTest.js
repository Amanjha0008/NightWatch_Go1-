const { assert } = require('nightwatch');
let LoginPage = browser.page.LoginPage();
let myActivity = browser.page.Dashboard.myActivity();


describe('My Activity Verification', () => {
    before((browser) => {
        browser
        .window.maximize()
        .url("https://nashtechglobal.qa.go1percent.com/")
    
    });

    after(async (browser) => {
        browser.quit();
    });

    it('Verify that the elements of LoginPage are visible', function() {
        LoginPage
        .waitForElementVisible('@header', 5000)
        .assert.titleContains('Sign in to nashtech')

    });

    it('Verify successful login with valid credentials (TC-344)',  function(){
        LoginPage
            .enterNameAndPassword("testadmin", "testadmin")
            .loginBtn()
            .assert.urlContains('/my-dashboard')  
    }); 

    it('Verify user should be able to see all the activities on the My activity - Version1', function(browser) {
        browser
            .url('https://nashtechglobal.qa.go1percent.com/my-profile?id=656')
            .waitForElementVisible('body', 5000) // it will redirect me to my Activity Page
    });

    it('Verify appropriate points should be added according to the contribution- Version1', function(browser) {
        browser
            .url('https://nashtechglobal.qa.go1percent.com/my-profile?id=656')
            .waitForElementVisible('body', 5000) 
    });

    it('Verify that the user can able to see the time the activity was done on all Activity. - Version1', function() {
        myActivity
            .waitForElementVisible('@timeLine')
            .assert.elementPresent('@timeLine');
    }); 

    it(' Verify that the user can able to scroll down and see all the activities. - Version1', function() {
        myActivity
        .execute(function() {
            // Scroll down to the bottom of the page
            window.scrollTo(0, document.body.scrollHeight);
        })
    }); 
    
    it('Verify user should see Add a contribution button when no contribution has been added by the user - Version1', function(browser) {
        myActivity
        // Waiting  for the element to be clickable
        .waitForElementVisible('@contribution')
        .assert.visible('@contribution', 'Add a contribution button is visible');
    });    
})