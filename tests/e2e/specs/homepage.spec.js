//import { Browser } from "selenium-webdriver";

describe('Homepage', function() {
    it('perform a search into the api page', function() {
        browser.get('#/api');
        
        element(by.css('#searchInput')).sendKeys('restart');
        element(by.css('.depth-1')).click();

        expect(element(by.css('.api-title')).getText()).toContain('browser.restart');
    });
});