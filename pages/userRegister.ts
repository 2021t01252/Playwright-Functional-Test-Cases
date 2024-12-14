import { Page } from 'playwright'; // import playwright module to this page

export class UserRegister { // create class for store variables and store functions 
    private page: Page; // crate page instance using page 
    private registerButton: string; // all variables pre defined as string
    private emailInput: string; // all variables pre defined as string
    private emailButton:string // all variables pre defined as string
    private button1:string // all variables pre defined as string
    private errorMassage:string // all variables pre defined as string
    

    constructor(page: Page) { // create constructor for store vraibles
        this.page = page;
        this.button1 ="//button[@id='indivLogin']"
        this.registerButton = "//a[normalize-space()='REGISTER']"; /*all variables location stored in this constructor using xpath,id*/
        this.emailInput = "//input[@id='email-input']";
        this.emailButton ="//button[@id='sign-up-btn']";
        this.errorMassage ="//small[@id='email-error-message']";
    }
    
    async gotoPage(){  // create function gotoLoginPage
        await this.page.goto('https://onlinelibrary.wiley.com/'); // navigate to the website 
       
    }
    
    async sendEmail(email: string){ // create login function and pass parameter email 
        
        await this.page.locator(this.button1).click(); // using locator click the component using their xpath,id
        await this.page.locator(this.registerButton).click(); // using locator click the component using their xpath,id
        await this.page.locator(this.emailInput).fill(email); // using locator fill the component using their xpath,id
        await this.page.locator(this.emailButton).click(); // using locator click the component using their xpath,id

    }
    async isEmailInvalid() { // create function for check the email is valid or not
        
        const resultText = await this.page.locator(this.errorMassage); // take the inner text of search reult span tag
        const isVisible = await resultText.isVisible(); // check the element is visible
        if(isVisible === true){ //check the true or false
            return true; // retun true
        }
        return false; //retun false
    }

    
}
