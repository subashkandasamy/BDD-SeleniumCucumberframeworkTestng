package pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import testBase.BasePage;
import utils.TimeUtil;
import utils.WaitHelper;

public class ActivateSubjectPage extends BasePage {

	WaitHelper waitHelper;

	@FindBy(xpath = "//span[contains(text(),'Activate subject')]")
	WebElement activateSubject;

	@FindBy(xpath = "//span[@class='select2-selection select2-selection--single']")
	WebElement selectSubject;

	@FindBy(xpath = "//a[@class='btn btn-primary']")
	WebElement nextButton;

	@FindBy(xpath = "//span[contains(text(),'A. Staal Grammatica, gr 4')]")
	WebElement selectgroup;

	@FindBy(xpath = "//button[contains(text(),'Activate subject')]")
	WebElement activateSubjectBtn;
	
	@FindBy(xpath = "//div[@class='form-group']//input")
	WebElement subjectname;
	
	@FindBy(xpath = "//button[contains(text(),'Save')]")
	WebElement saveButton;
	
	

	public ActivateSubjectPage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
	}

	public void clickonactivateSubject() {

		waitHelper.WaitForElement(activateSubject, 100);
		activateSubject.click();

	}

	public void selectrekenen(String iSubject) {

		waitHelper.WaitForElement(selectSubject, 100);
		selectSubject.click();
		driver.findElement(By.xpath("//span[contains(text(),'" + iSubject + "')]")).click();

	}

	public void clickonNextbtn() {

		waitHelper.WaitForElement(nextButton, 100);
		nextButton.click();

	}

	public void selectgroupforsubject(String iSubjectGroup) {

		waitHelper.WaitForElement(driver.findElement(By.xpath("//span[contains(text(),'" + iSubjectGroup + "')]")),
				100);
		driver.findElement(By.xpath("//span[contains(text(),'" + iSubjectGroup + "')]")).click();

	}

	public void clickonactivateSubjectbtn() {

		waitHelper.WaitForElement(activateSubjectBtn, 100);
		activateSubjectBtn.click();		

	}

	public void verifyTheCreateSubject(String icreatedsubject) {

		TimeUtil.shortWait();
		waitHelper.WaitForElement(driver.findElement(By.xpath("//strong[contains(text(),'" + icreatedsubject + "')]")),
				100);
		driver.findElement(By.xpath("//strong[contains(text(),'" + icreatedsubject + "')]")).click();

	}
	
	public void clickonEditButton(String isubjectheading) {

		List<WebElement> elementName = driver.findElements(By.xpath("//span[@class='panel-card-heading-text']//strong[1]"));
		int m = 0 ;
		for  (WebElement ielementName : elementName) {
			m++ ;
			if(isubjectheading.equals(ielementName.getText())) {
				
				driver.findElement(By.xpath("//subjectgroup-info-block["+ m +"]/div[1]/div[1]/div[2]")).click();				
				
			}
						
		}
					
	}

	public void editTheNameOfSubject(String isubjectName) {

		waitHelper.WaitForElement(subjectname, 100);
		activateSubjectBtn.clear();
		activateSubjectBtn.sendKeys(isubjectName);
		
	}
	
	public void clickonSaveButton() {

		waitHelper.WaitForElement(saveButton, 100);
		saveButton.click();	
		
	}
	

}
