var angularHomepage = require('./AngularHomepage');
describe('angularjs homepage', function() {
    it('should greet the named user', function() {
       browser.waitForAngularEnabled(false);
        angularHomepage.get();

        angularHomepage.setName('Sujana');


        expect(angularHomepage.getGreetingText()).toEqual('Hello Sujana!');
        expect(angularHomepage.getToDoText()).toEqual('archive');
        expect(angularHomepage.isToDoTextDisplayed()).toBe(true);
        angularHomepage.setAddNewToDoText("Test To Do");
        angularHomepage.getAddButton().click();
        //browser.sleep(3000);

    });
});