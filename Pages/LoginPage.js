const elements = {
    header : ".container-fluid",

    goLogo : ".go1up-logo",

    oneLogo : ".onepercenet-logo",

    crouselImg : "#myCarousel > div > div>img",

    crouselCaption: "#myCarousel > div > div.item.active > div > h3",

    footerMessage : ".tagsss b",

    activeIndicatorSelector : '.carousel-indicators li.active',

    nextCrousel : ".carousel-indicators li:nth-child(2)",

    loginText: {
      selector: '//h4[contains(., "or do it via E-mail")]',
      locateStrategy: 'xpath'
    },

    signInText: {
      selector: '//h1[@id="kc-page-title" and contains(text(), "Sign in to Go 1%")]',
      locateStrategy: 'xpath'
    },

    microsoftLogo : "#social-oidc",

    userNameInput : "#username",

    passwordInput : "#password",

    loginBtn: "#kc-login",

    popUpMesage: {
      selector: '//span[@id="input-error" and contains(text(), "Invalid username or password.")]',
      locateStrategy: 'xpath'
    },

    forgetPass:".forget-pass",

    termslink : "div.term-privacy > a:nth-child(1)",

    privacyLink : "div.term-privacy > a:nth-child(2)",

    rememberCheckBox :"#kc-form-options > div > label > span",

    setting: ".material-icons.user-icon",

    submit : "input[value='Submit']",

    logout: {
      selector: "//i[@class = 'material-icons cursor-pointer' and contains(text(), 'logout')]",
      locateStrategy: 'xpath'
    },
    forgetPassPopUp: {
      selector: "//span[@class= 'pf-c-alert__title kc-feedback-text' and contains(text(), 'You should receive an email shortly with further instructions.') ]",
      locateStrategy: 'xpath'
    }     
  }
  
  const commands = [
    {
        /**
        * Enters the given name & password into the left form feilds
        * 
        * @param{String} name
        * @param{String} password
        *
        */
        enterNameAndPassword(name, password) {
          return this
              .setValue('@userNameInput', name)
              .setValue('@passwordInput', password);
        }, 
        enterName(name) {
          return this
              .setValue('@userNameInput', name)
        },  
  
        nextCrouselBtn(){
            return this.click('@nextCrousel')
        },

        microsoftLogoBtn(){
            return this.click('@microsoftLogo')
        },

        loginBtn(){
          return this.click('@loginBtn')
        },

        forgetPasswordBtn(){
          return this.click('@forgetPass')
        },

        clickOnTermsofuse(){
          return this.click('@termslink')
        },
        
        clickOnPrivacypolicy(){
          return this.click('@privacyLink')
        },

        RememberMeClick : function(){
          return this
              .waitForElementVisible('@RememberMeBtn',5000)
              .click('@RememberMeBtn')
        },

        submitBtn(){
          return this.click('@submit')
          
        }
        


    }
  
  ]
  
  
  module.exports = {
    elements: elements,
    commands: commands,
  };