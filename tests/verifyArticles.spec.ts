import { VerifyArticles } from "../pages/verifyArticles"; // import VerifyArticles.ts file from pages related to page object model(pom)
import {test,expect} from "@playwright/test"; // import playwright module to this page

test ('validKeyword',async ({page})=>{ // create test case for valid keyword

    const verify = new VerifyArticles(page); // create a object using VerifyArticles class
    await verify.gotoPage(); // using that obect(verify) call the function gotoPage()
    await verify.searchKeyword("science"); // using veryfy object call the searchKeyword function with send string parameter
    const isDisplayed = await verify.isArticleDisplayed(); //using verify object call isArticleDisplyed() function and store it retun value in variable
    expect(isDisplayed).toBeTruthy(); // check the retun value is true
   
});

test ('inavalidKeyword', async({page})=>{ // create test case for invalid keyword

    const verify = new VerifyArticles(page); // create a object using VerifyArticles class
    await verify.gotoPage(); // using that obect(verify) call the function gotoPage()
    await verify.searchKeyword("sdghjke234567"); // using veryfy object call the searchKeyword function with send string parameter
    const isDisplayed = await verify.isArticleDisplayed();  //using verify object call isArticleDisplyed() function and store it retun value in variable
    expect(isDisplayed).toBeFalsy(); // check the retun value is false

});

