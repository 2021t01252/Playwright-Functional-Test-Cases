import { Page } from 'playwright'; // import playwright module to this page

export class VerifyArticles { // create class for store variables and store functions 
    private page: Page; // crate page instance using page 
    private searchBar: string; // all variables pre defined as string
    private searchButton: string; // all variables pre defined as string
    private errorMassage:string // all variables pre defined as string

    constructor(page: Page) { // create constructor for store vraibles
        this.page = page;
        this.searchBar = "//input[@id='searchField1']"; /*all variables location stored in this constructor using xpath,id*/
        this.searchButton = "//button[@title='Search']";
        this.errorMassage ="//span[@class='result__current']";
    }
    
    async gotoPage(){  // create function gotoLoginPage
        await this.page.goto('https://onlinelibrary.wiley.com/'); // navigate to the website 
       
    }
    
    async searchKeyword(text: string){ // create login function and pass two parameters email and password
        
        await this.page.locator(this.searchBar).fill(text); // using locator click the component using their xpath,id
        await this.page.locator(this.searchButton).click(); // using locator click the component using their xpath,id

    }
    async isArticleDisplayed() { // create function for check the article is dasplayed or not is display retun true otherwise retun false
        
        const resultText = await this.page.locator(this.errorMassage).innerText(); // take the inner text of search reult span tag
        const searchResult = parseInt(resultText); // convert string into interger
        if(searchResult > 0){ // converted integer checked whether it is greater than to 0 
            return true; // retun true
        }
        return false; //retun false
    }

    
}
