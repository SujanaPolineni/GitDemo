var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
    var ToDOText = element(by.linkText('archive'));
    var AddNewTODoText = element(by.model('todoList.todoText'));
    var AddButton = element(by.xpath("//input[@type='submit']"));
    var Title = "Title";
       /* browser.getTitle().then(function(text){
                    Title=text;
                 });*/

        //element(by.partialLinkText('New Angular'));


    this.get = function(url) {
        browser.get(url);
    };
   this.getTitle = function(){
       Title=browser.getTitle();
        return Title;
    }
    this.getNewAngularLink = function() {
        return NewAngularLink;
    }
    this.isToDoTextDisplayed = function() {
        return ToDOText.isDisplayed();
    }

    this.setName = function(name) {
        nameInput.sendKeys(name);
    };

    this.getGreetingText = function() {
        return greeting.getText();
    };

    this.getToDoText = function() {
        return ToDOText.getText();
    }
    this.setAddNewToDoText = function(newToDo) {
         AddNewTODoText.sendKeys(newToDo);
    }
    this.getAddButton = function(){
        return AddButton;
    }
};
module.exports = new AngularHomepage();