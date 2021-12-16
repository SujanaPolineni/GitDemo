describe('Protractor Radio demo',function(){

    it('Open Non-Angular js website Alerts',function(){
        browser.waitForAngularEnabled(false);

        browser.get('https://rahulshettyacademy.com/AutomationPractice/');

        element.all(by.tagName("input")).each(function(item){
           // console.log("test");
          item.getAttribute("value").then(function(values)
            {
                console.log(values);
                if(values=='radio2'){
                    console.log("selecting radio2");
                    item.click();
                    browser.sleep(2000);
                }
            })


        })
    })

})