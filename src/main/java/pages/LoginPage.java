package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testBase.BasePage;
import utils.TimeUtil;
import utils.WaitHelper;

public class LoginPage extends BasePage {

	// WebDriver driver;
	WaitHelper waitHelper;

	@FindBy(xpath = "//input[@id='UserName' and @type='text']")
	WebElement userName;

	@FindBy(xpath = "//input[@id='Password' and @type='password' ]")
	WebElement passWord;

	@FindBy(xpath = "//button[@class='btn btn-primary btn-login']")
	WebElement loginButton;

	public LoginPage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
	}

	public void enterUserName(String username) {
		waitHelper.WaitForElement(userName, 60);
		userName.sendKeys(username);
	}

	public void enterPassword(String password) {

		waitHelper.WaitForElement(passWord, 60);
		passWord.sendKeys(password);
	}

	public void clickLoginButton() {
		loginButton.click();
	}

	public boolean verifyUserName(String userName) {

		TimeUtil.longWait();
		waitHelper.WaitForElement(driver.findElement(By.xpath("//strong[contains(text(),'" + userName + "')]")), 60);
		return driver.findElement(By.xpath("//strong[contains(text(),'" + userName + "')]")).isDisplayed();
	}

	public boolean verifyRequiredMessage(String errorMessage) {

		waitHelper.WaitForElement(driver.findElement(By.xpath("//span[contains(text(),'" + errorMessage + "')]")), 60);
		return driver.findElement(By.xpath("//span[contains(text(),'" + errorMessage + "')]")).isDisplayed();
	}

	public void simplelogin() {

		enterUserName(prop.getProperty("username"));
		enterPassword(prop.getProperty("password"));
		clickLoginButton();
		TimeUtil.mediumWait();
	}

}
