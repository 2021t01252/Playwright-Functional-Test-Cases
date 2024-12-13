import { LoginPage } from "../pages/loginPage";
import {test,expect} from "@playwright/test";

test ('correctEmailPassword',async ({page})=>{

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('chamodlakshitha666@gmail.com','Chamod@10023');
    const success = await login.isLoginSuccessful();
    expect(success).toBe(true);
});

test ('inavalidEmail', async({page})=>{

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('kavindu@gmail.com','Chamod@10023');
    const error = await login.isEmailError();
    expect(error).toBe(true);
    
});

test ('inavalidPassword', async({page})=>{

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('chamodlakshitha666@gmail.com','Chamod@123');
    const error = await login.isPasswordError();
    expect(error).toBe(true);
});

test ('invalidEmailPassword', async({page})=>{

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('samansumudith@gmail.com','Saman@234');
    const error = await login.isEmailError();
    expect(error).toBe(true);
});