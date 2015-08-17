exports.config = {
    capabilities: {
        // chrome, firefox, phantoms, safari, IE (-_-)
        'browserName': 'chrome'
    },
    specs: [
        'test/*.spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
    },
    allScriptsTimeout: 20000,
    onPrepare: function () {
        browser.driver.get('http://localhost:8100/#tab/dash');
    }
};