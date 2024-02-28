const elements = {
    timeLine : {
        selector: '.timeline.w-100.mx-1',
        locateStrategy: 'css selector'
    },
    contribution : {
        selector: 'li.nav-item.my-1.cursor-pointer.text-bold.p-2.newTabs',
        locateStrategy: 'css selector'
    },
}

const commands = [
    {
        contributionBtn : function(){
            return this
                .waitForElementVisible('@contribution', 10000) // Increased wait time
                .click('@contribution')
        }
    }
]

module.exports = {
    elements: elements,
    commands: commands,
};
