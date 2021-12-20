describe('New Drop Down Demo', function(){

    it('Check Drop Down', function (){
        browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
      /* element(by.tagName("select#dropdown-class-example").each(function(item) {
           item.getAttribute("value").then(function (values) {

               console.log(values);
           })
       })*/
       // console.log(element(by.id('dropdown-class-example')).all(by.tagName('option')).count());

        element.all(by.tagName("select#dropdown-class-example")).each(function(item) {

           item.getText().then(function (text) {
                console.log(text);

            });

        });

        element(by.tagName("select#dropdown-class-example")).sendKeys("option3").then(function(){
            browser.sleep(3000);
        });

    })


})