package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import page.BaseTest;

import page.LoginPage;

public class TestDefinition extends BaseTest{
 LoginPage loginpage;


	   @Given("^user is on techfios login page$")
	   public void user_is_on_techfios_login_page()
	   {
		   initDriver();
		   driver.get("https://techfios.com/billing/?ng=admin");
	   }
 
 
	@When("^user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as_demo_techfios_com(String userName) 
	{
	   loginpage = PageFactory.initElements(driver, LoginPage.class);
	   loginpage.enterUserName(userName); 
	}

	@When("^Uesr enters password as \"([^\"]*)\"$")
	public void uesr_enters_password_as(String password){
	    loginpage.enterpassword(password);
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button(){
	    loginpage.clickSigninbutton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page(){
	 String expectedTitle= "Dashboard- iBilling";
	 String actualTitle = loginpage.getPageTitle();
	 Assert.assertEquals("Page not found" ,actualTitle, expectedTitle);
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
