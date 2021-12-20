describe('Check box Demo', function() {

    it('Check box demo', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
        /* element(by.tagName("select#dropdown-class-example").each(function(item) {
             item.getAttribute("value").then(function (values) {

                 console.log(values);
             })
         })*/
        // console.log(element(by.id('dropdown-class-example')).all(by.tagName('option')).count());

       // element.all(by.cssText("checkBoxOption1")).each(function (item) {
       // element(by.tagName("label#input")).each(function(item)
      //  let items=element.all(by.xpath("//div[@id='checkbox-example']/fieldset/label"));
      // console.log(items.count());
       //console.log(list.count());
        let ct=0;
       element.all(by.xpath("//div[@id='checkbox-example']/fieldset/label")).each(function (item){
          //console.log(item.getAttribute("value").getText());
         // console.log(item.getAttribute("for").getText());
           //console.log(item.getSize());

           item.getAttribute("for").getText().then(function(text){
               if(text=='Option2'){
                   console.log("inside if");

                  element(by.xpath("//input[@id='checkBoxOption2']")).click();
                   browser.sleep(3000);
               }
               console.log(text);
               ct++;
               console.log(ct);
           });
       })






       /* element(by.tagName("select#dropdown-class-example")).sendKeys("option3").then(function () {
            browser.sleep(3000);
        });*/

    })


})