var angularHomepage = require('./AngularHomepage');
describe('Demo of Window Handles', function(){
   it('Demo to test window handles', function(){
      // browser.waitForAngularEnabled(false);
       angularHomepage.get("https://angularjs.org/");
      expect(angularHomepage.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
       //angularHomepage.getNewAngularLink().click();
       var NewAngularLink;
       NewAngularLink= element(by.cssContainingText("a","Try the New Angular")).getAttribute('href').then(function(link){
           NewAngularLink= link;
           console.log(NewAngularLink);
       });

       angularHomepage.get("https://angular.io/");

       browser.sleep(3000);




   });

});