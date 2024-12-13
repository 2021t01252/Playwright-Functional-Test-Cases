import { LoginPage } from "../pages/loginPage"; // import loginPage.ts file from pages related to page object model(pom)
import {test,expect} from "@playwright/test"; // import playwright module to this page

test ('correctEmailPassword',async ({page})=>{ // create test case for both vallid email password

    const login = new LoginPage(page); // create a object using LoginPage class
    await login.gotoLoginPage(); // using that obect(login) call the function gotoLoginPage
    await login.login('chamodlakshitha666@gmail.com','Chamod@10023'); // using login object call the login function that pass two parameters email & password
    const success = await login.isLoginSuccessful(); // using login object call the isLoginSuccessful function and store in success variable
    expect(success).toBe(true); // variable success include value is checked whether it is true
});

test ('inavalidEmail', async({page})=>{ // create test case for invalid email

    const login = new LoginPage(page); // create a object using LoginPage class
    await login.gotoLoginPage(); // using that obect(login) call the function gotoLoginPage
    await login.login('kavindu@gmail.com','Chamod@10023'); // using login object call the login function that pass two parameters email & password
    const error = await login.isEmailError(); // using login object call the isLoginSuccessful function and store in error variable
    expect(error).toBe(true); // variable error include value is checked whether it is true
    
});

test ('inavalidPassword', async({page})=>{ // create test for invalid password

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('chamodlakshitha666@gmail.com','Chamod@123');
    const error = await login.isPasswordError();
    expect(error).toBe(true);
});

test ('invalidEmailPassword', async({page})=>{ // create test for both invalid email password

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('samansumudith@gmail.com','Saman@234');
    const error = await login.isEmailError();
    expect(error).toBe(true);
});