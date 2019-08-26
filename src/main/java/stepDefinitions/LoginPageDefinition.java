package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import testBase.BasePage;

public class LoginPageDefinition extends BasePage {

	LoginPage loginpage = new LoginPage(driver);

	@When("^Enter the username \"([^\"]*)\"$")
	public void enter_the_username(String usernmae) throws Throwable {
		loginpage.enterUserName(usernmae);
	}

	@When("^Enter the password \"([^\"]*)\"$")
	public void enter_the_password(String password) throws Throwable {
		loginpage.enterPassword(password);
	}

	@And("^click on login button$")
	public void click_on_login_button() throws Throwable {
		loginpage.clickLoginButton();
	}

	@Then("^Verify the user name \"([^\"]*)\"$")
	public void verify_the_user_name(String userid) throws Throwable {
		loginpage.verifyUserName(userid);
	}

	@Then("^Verify the error message \"([^\"]*)\"$")
	public void verify_the_error_message(String errormessage) throws Throwable {
		loginpage.verifyRequiredMessage(errormessage);
	}

}
