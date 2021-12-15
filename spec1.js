describe('angularjs homepage todo list', function() {
    it('should add', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('5');
        element(by.id('gobutton')).click();
        /*element(by.css("select='operator'")).getText().then(function(text){
            console.log(text);
        })*/
        let result;
       expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

        element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
            result=text;
            console.log(text);
            console.log(result);
        });
    });
    it('should add a todo', function() {
        browser.get('https://angularjs.org');

       element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');
        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);


    });
});