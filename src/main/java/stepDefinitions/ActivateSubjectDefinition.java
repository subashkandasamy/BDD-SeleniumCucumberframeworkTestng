package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ActivateSubjectPage;
import pages.LoginPage;
import testBase.BasePage;

public class ActivateSubjectDefinition extends BasePage {

	ActivateSubjectPage activatsubjectpage = new ActivateSubjectPage(driver);

	@When("^Login to application$")
	public void login_to_application() throws Throwable {
		LoginPage loginpage = new LoginPage(driver);
		loginpage.simplelogin();
	}

	@When("^click on activate subject link$")
	public void click_on_activate_subject_link() throws Throwable {
		activatsubjectpage.clickonactivateSubject();
	}

	@And("^select a Subject \"([^\"]*)\"$")
	public void select_a_Subject(String iSubject) throws Throwable {
		activatsubjectpage.selectrekenen(iSubject);
	}

	@And("^click on next button$")
	public void click_on_next_button() throws Throwable {
		activatsubjectpage.clickonNextbtn();
	}

	@And("^select a subject group \"([^\"]*)\"$")
	public void select_a_subject_group(String iSubjectGroup) throws Throwable {
		activatsubjectpage.selectgroupforsubject(iSubjectGroup);
	}

	@And("^click on activate subject button$")
	public void click_on_activate_subject_button() throws Throwable {
		activatsubjectpage.clickonactivateSubjectbtn();
	}

	@Then("^Verify the added subject \"([^\"]*)\"$")
	public void verify_the_added_subject(String isubjecttitle) throws Throwable {
		activatsubjectpage.verifyTheCreateSubject(isubjecttitle);
	}

	@And("^click on edit button \"([^\"]*)\"$")
	public void click_on_edit_button(String isubjectheading) throws Throwable {
		activatsubjectpage.clickonEditButton(isubjectheading);
	}

	@And("^change the subject name \"([^\"]*)\"$")
	public void change_the_subject_name(String iSubjectName) throws Throwable {
		activatsubjectpage.editTheNameOfSubject(iSubjectName);	   
	}

	@And("^click on save button$")
	public void click_on_save_button() throws Throwable {	   
		
		activatsubjectpage.clickonSaveButton();
		
	}
	
}
