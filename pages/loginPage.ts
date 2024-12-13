import { Page } from 'playwright';

export class LoginPage {
    private page: Page;
    private loginButton1: string;
    private individualLink: string;
    private continueEmail:string
    private emailInput:string
    private passwordInput:string
    private continuePassword:string
    private emailDoesNotExist:string
    private wrongPassword:string

    constructor(page: Page) {
        this.page = page;
        this.loginButton1 = '#indivLogin';
        this.individualLink = "//a[normalize-space()='Individual login']";
        this.continueEmail ="//button[@id='sign-in-btn']";
        this.emailInput = "//input[@id='email-input']";
        this.passwordInput = "//input[@id='pass-input']";
        this.continuePassword = "//button[@id='password-sign-in-btn']";
        this.emailDoesNotExist = "//p[@class='MuiTypography-root MuiTypography-body1 css-rf437f']";
        this.wrongPassword = "//small[@id='password-error-message']";

    }
    
    async gotoLoginPage(){ 
        await this.page.goto('https://onlinelibrary.wiley.com/');
       
    }
    
    async login(email: string, password: string){
        
        await this.page.locator(this.loginButton1).click();
        await this.page.locator(this.individualLink).click();
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.continueEmail).click();
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.continuePassword).click();
        

    }
    async isLoginSuccessful() {
        try {
            const currentUrl = this.page.url();
            if (currentUrl === 'https://onlinelibrary.wiley.com/') {
                return true; 
            }
            return false; 
        } catch (error) {
            return false; 
        }
    }

    async isEmailError() {
        try {
            const errorMessageLocator = this.page.locator(this.emailDoesNotExist);
            const isVisible = await errorMessageLocator.isVisible();
            
            if (isVisible) {
                
                const text = await errorMessageLocator.textContent();
                if (text && text.includes("We couldn 't find any account with this email")) {
                    return true; 
                }
            }
            return false; 
        } catch (error) {
            return false; 
        }
    }
    async isPasswordError() {
        try {
            const errorMessageLocator = this.page.locator(this.wrongPassword);
            const isVisible = await errorMessageLocator.isVisible();
            
            if (isVisible) {
                
                const text = await errorMessageLocator.textContent();
                if (text && text.includes("Wrong password. Please try again.")) {
                    return true; 
                }
            }
            return false; 
        } catch (error) {
            return false; 
        }
    }
    
    
    
}
