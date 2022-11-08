package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	WebDriver driver;
	
	public LoginPage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	
	//WEBELEMENTS
	@FindBy(how = How.XPATH ,using= "//input[@id='username']")WebElement USERNAME_ELEMENT;
	@FindBy(how = How.XPATH , using ="//input[@id='password']")WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")WebElement SIGNIN_ELEMENT;
	
	
	//CORRESPONDING METHOD===========
	public void enterUserName(String userName)
	{
		USERNAME_ELEMENT.sendKeys(userName);
		try
		{
		Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
		e.printStackTrace();	
		}
	}
	
	
	public void enterpassword(String passWord)
	{
		PASSWORD_ELEMENT.sendKeys(passWord);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	public void clickSigninbutton()
	{
		 SIGNIN_ELEMENT.click();
		 try
		 {
			 Thread.sleep(3000);
		 }
		 catch(InterruptedException e)
		 {
			 e.printStackTrace();
		 }
	}
	
	
	public String getPageTitle()
	{
		return driver.getTitle();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
