import { Browser } from "selenium-webdriver";

describe('Homepage', function() {
    it('perform a search into the api page', function() {
        browser.get('#/api');

        Element(by.model('searchTerm')).sendKeys('restart');
        Element(by.css('.depth-1')).click();

        expect(Element(by.css('.api-title')).getText()).toContain('browser.restart');
    });
});