package stepDefinitions;


import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriverException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import testBase.BasePage;
import utils.LoggerUtils;

public class ServiceHooks extends BasePage {

	public BasePage basepage;
	Logger log = LoggerUtils.getLogger(ServiceHooks.class);
	

	@Before
	public void initializeTest() {
		System.out.println("i am in ServiceHooks");
		basepage = new BasePage();
		basepage.initialize_driver();
		
	}

	@After
	public void endTest(Scenario scenario) {
		if (scenario.isFailed()) {

			try {
				log.info(scenario.getName() + " is Failed");
				basepage.getScreenshot(scenario);
			} catch (WebDriverException e) {
				e.printStackTrace();
			}

		} else {
			try {
				log.info(scenario.getName() + " is pass");
				basepage.getScreenshot(scenario);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		driver.quit();
	}

}
