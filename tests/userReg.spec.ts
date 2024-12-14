import { UserRegister } from "../pages/userRegister"; // import UserRegister.ts file from pages related to page object model(pom)
import {test,expect} from "@playwright/test"; // import playwright module to this page

test ('emailInvalid',async ({page})=>{ // create test case for valid keyword

    const verify = new UserRegister(page); // create a object using UserRegister class
    await verify.gotoPage(); // using that obect(verify) call the function gotoPage()
    await verify.sendEmail("chamodlakshitha666@gmail.com"); // using veryfy object call the sendEmail function with send string parameter
    const isDisplayed = await verify.isEmailInvalid(); //using verify object call isEmailInvalid() function and store it retun value in variable
    expect(isDisplayed).toBeTruthy(); // check the retun value is true
   
});

test ('validEmail', async({page})=>{ // create test case for invalid keyword

    const verify = new UserRegister(page); // create a object using UserRegister class
    await verify.gotoPage(); // using that obect(verify) call the function gotoPage()
    await verify.sendEmail("chamodlakshitha666@gmail.com"); // using veryfy object call the sendEmail function with send string parameter
    const isDisplayed = await verify.isEmailInvalid(); //using verify object call isEmailInvalid() function and store it retun value in variable
    expect(isDisplayed).toBeFalsy(); // check the retun value is false

});

