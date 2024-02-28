const { assert } = require('nightwatch');
const logger = require('./logger');

let LoginPage = browser.page.LoginPage();

    describe('Login Page Verification', () =>
    {
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
            logger.info("Test Executed")
        });

        it('Verify "Go1Percent" logo, carousel images, carousel caption and the footer message (TC-337) - Version1',  function(){
            LoginPage
                .waitForElementVisible('@goLogo')
                .waitForElementVisible('@oneLogo')
                .expect.element('@goLogo').to.be.visible
                LoginPage.waitForElementVisible('@crouselImg')
                LoginPage.waitForElementPresent('@crouselCaption')
                LoginPage.waitForElementPresent('@footerMessage')
        });
        it('Verify that tag line with text "Get 1% Better Everyday" is displayed (TC-338) - Version1',  function(){
            LoginPage
                .expect.element('@crouselCaption').to.be.visible.before(2000, "Get 1% Better Everyday is displayed")
        });
        it('Verify that carousel image changes while clicking on carousel button (TC-339) - Version1 ',  function(){

            LoginPage
                 // Wait for the carousel to be visible
                .waitForElementVisible('.carousel')

                // Assert that the initial active indicator is present
                .assert.elementPresent('@activeIndicatorSelector')

                .nextCrouselBtn()

                .assert.elementPresent('@activeIndicatorSelector');
        });
        it('Verify that specific text between login options is present on the web page (TC-341) - Version1',  function(){
            LoginPage
                .waitForElementVisible('@loginText', 5000)
                .assert.containsText('@loginText', 'or do it via E-mail');
        });
        it('Verify that login page heading contains text "Sign in to Go 1%" is displayed (TC-340) - Version1',  function(){
            LoginPage
                .waitForElementVisible('@signInText', 2000)
                .assert.visible('@signInText')
        });
        it('Verify that clicking on the Microsoft logo redirects to the Microsoft login page (TC-342) - Version1',  function(browser){
            LoginPage
                .waitForElementVisible('@microsoftLogo', 10000)
                .microsoftLogoBtn()
                .assert.urlContains('https://login.microsoftonline.com/');
            browser.back()
        });
        it('Verify that login fails with invalid credentials and an alert message is displayed (TC-343) - Version1',  function(){
            LoginPage
                .enterNameAndPassword("abcdd", "abcd")
                .loginBtn()
                .assert.containsText('@popUpMesage', 'Invalid username or password.');
        });

        it('Verify remember me checkbox is selected during login (TC-345) - Version1 ',  function(){
                LoginPage
                    .enterNameAndPassword("testadmin", "testadmin")
                    .click('@rememberCheckBox')
        });

        it('Verify the forgot Password functionality (TC-346) - Version1',  function(browser){
            LoginPage
                .waitForElementVisible('@forgetPass')
                .forgetPasswordBtn()
               .assert.urlContains('https://auth.go1percent.com/auth/realms/nashtech/login-actions')
                .enterName("abcd")
                .submitBtn()
                .assert.containsText('@forgetPassPopUp', 'You should receive an email shortly with further instructions.');
            browser.back()
        }); 
            
        it('Verify clicking on the "Terms of Use" link opens a new page with the terms of use ',function(browser){
    
            LoginPage.clickOnTermsofuse();
            browser.windowHandles(function(result) {
                const originalHandle = result.value[0];
                const handle = result.value[1];
                this.switchWindow(handle)
                .assert.urlContains('/terms-of-use');
                this.switchWindow(originalHandle);
            })    
        })
        it('Verify clicking on the "privacy Policy" link opens a new page with the terms of use ',function(browser){
            LoginPage.getTitle(function(title) {
                   console.log('Title:', title);
                   })
            LoginPage.clickOnPrivacypolicy();
            browser.windowHandles(function(result) {
                const originalHandle = result.value[0];
                const handle = result.value[2];
                this.switchWindow(handle)
                .assert.urlContains('/privacy-policy');
                this.switchWindow(originalHandle);
            })
        });

        it('Verify successful login with valid credentials (TC-344)',  function(){
                LoginPage
                    .enterNameAndPassword("testadmin", "testadmin")
                    .loginBtn()
                    .assert.urlContains('/my-dashboard');
                    
        }); 
    })

    
       