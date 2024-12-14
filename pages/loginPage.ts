import { Page } from 'playwright'; // import playwright module to this page

export class LoginPage { // create class for store variables and store functions 
    private page: Page; // crate page instance using page 
    private loginButton1: string; // all variables pre defined as string
    private individualLink: string; // all variables pre defined as string
    private continueEmail:string // all variables pre defined as string
    private emailInput:string // all variables pre defined as string
    private passwordInput:string // all variables pre defined as string
    private continuePassword:string // all variables pre defined as string
    private emailDoesNotExist:string // all variables pre defined as string
    private wrongPassword:string // all variables pre defined as string

    constructor(page: Page) { // create constructor for store vraibles
        this.page = page;
        this.loginButton1 = '#indivLogin'; /*all variables location stored in this constructor using xpath,id*/
        this.individualLink = "//a[normalize-space()='Individual login']";
        this.continueEmail ="//button[@id='sign-in-btn']";
        this.emailInput = "//input[@id='email-input']";
        this.passwordInput = "//input[@id='pass-input']";
        this.continuePassword = "//button[@id='password-sign-in-btn']";
        this.emailDoesNotExist = "//p[@class='MuiTypography-root MuiTypography-body1 css-rf437f']";
        this.wrongPassword = "//small[@id='password-error-message']";

    }
    
    async gotoLoginPage(){  // create function gotoLoginPage
        await this.page.goto('https://onlinelibrary.wiley.com/'); // navigate to the website 
       
    }
    
    async login(email: string, password: string){ // create login function and pass two parameters email and password
        
        await this.page.locator(this.loginButton1).click(); // using locator click the component using their xpath,id
        await this.page.locator(this.individualLink).click(); // using locator click the component using their xpath,id
        await this.page.locator(this.emailInput).fill(email); // using locator fill the component value using their xpath,id
        await this.page.locator(this.continueEmail).click(); // using locator click the component using their xpath,id
        await this.page.locator(this.passwordInput).fill(password); // using locator fill the component value using their xpath,id
        await this.page.locator(this.continuePassword).click(); // using locator click the component using their xpath,id
        

    }
    async isLoginSuccessful() { // create function for check the login success
        try {
            const currentUrl = this.page.url(); // after login, store the current url in varible
            if (currentUrl === 'https://onlinelibrary.wiley.com/') { // check that url is expected one and return true
                return true; 
            }
            return false; // otherwise return false
        } catch (error) {
            return false; 
        }
    }

    async isEmailError() { // create function for check the email error
        try {
            const errorMessageLocator = this.page.locator(this.emailDoesNotExist); // after infalid email send, store the current locator value in varible
            const isVisible = await errorMessageLocator.isVisible(); // check the varible value is visible and store in varible
            
            if (isVisible) { // check varible value 
                
                const text = await errorMessageLocator.textContent(); // then visible extract the the value inside that locate
                if (text && text.includes("We couldn 't find any account with this email")) { // check that value is expected one
                    return true; // then return true
                }
            }
            return false; // else return false
        } catch (error) {
            return false; 
        }
    }
    async isPasswordError() { // create function for check the password error
        try {
            const errorMessageLocator = this.page.locator(this.wrongPassword); // after invalid password send, store the current locator value in varible
            const isVisible = await errorMessageLocator.isVisible(); // check the varible value is visible and store in varible
            
            if (isVisible) { // check varible value 
                
                const text = await errorMessageLocator.textContent(); // then visible extract the the value inside that locate
                if (text && text.includes("Wrong password. Please try again.")) { // check that value is expected one
                    return true; //if it then retun true
                }
            }
            return false; // if not then retun false
        } catch (error) {
            return false; 
        }
    }
    
    
    
}
