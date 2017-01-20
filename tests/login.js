var cleanup = require('./cleanupUtil');

module.exports = {
    before : function(browser, done) {
        cleanup(done)
    },
    'User can log in': function(browser) {
        browser
            .url(browser.launch_url + 'account')
            .waitForElementVisible('#username')
            .setValue('#username', 'npoptomov@gmail.com')
            .waitForElementVisible('#password')
            .setValue('#password', 'nikola')
            .click('button[type=submit]')
            .waitForElementVisible('h1')
            .assert.containsText('h1', 'Dashboard')
    },
    'User can log out': function(browser) {
        browser
            .waitForElementVisible('#logout')
            .click('#logout')
            .waitForElementVisible('h1')
            .assert.containsText('h1', '24/7 SUPPORT');
    },
    "User can't access dashboard when logged out": function(browser) {
        browser
            //.waitForElementVisible('#inputUsername')
            .url(browser.launch_url + 'dashboard')
            //.waitForElementVisible('.alert.alert-danger')
            //.assert.containsText('.alert.alert-danger', 'You have to be logged in to access the page.')
            .end()
    }
};