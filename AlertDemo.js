describe('Protractor Alert demo',function(){

    it('Open Non-Angular js website Alerts',function(){
        browser.waitForAngularEnabled(false);

        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().dismiss().then(function(){
            browser.sleep(2000);
        })
    })

})