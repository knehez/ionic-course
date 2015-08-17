
// Describe a feature
describe('Testing My App', function () {

    it('There are three tabs', function () {
        var threeTabs = element.all(by.css('ion-tab'));
        expect(threeTabs.count()).toEqual(3);
    });

    it('Click the second tab', function () {
        var chatTab = element(by.xpath('/html/body/ion-nav-view/ion-tabs/div/a[2]'));
        chatTab.click();
    });

    it('Click Add person button', function () {
        expect(element.all(by.repeater('chat in chats')).count()).toEqual(5);
        var button = element(by.id('mybutton')).click();
    });

    it('One more items added', function () {
        expect(element.all(by.repeater('chat in chats')).count()).toEqual(6);
    })
});