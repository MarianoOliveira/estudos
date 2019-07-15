//import { name } from 'protractor';

describe('Login', function() {
    it('Perform login into staging', function() {
        browser.get('initial/login');
        
        element(by.name('email_name')).sendKeys('mbabyh16');
        //element(by.css('name=""')).sendKeys('mp2018');
        
        //element(by.className('#btn btn-login')).click();

        //expect(browser.get('main/home/featured'));
    });
});