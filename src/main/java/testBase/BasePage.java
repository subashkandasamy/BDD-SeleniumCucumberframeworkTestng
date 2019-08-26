package testBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import utils.LoggerUtils;
import utils.TimeUtil;
import cucumber.api.Scenario;

public class BasePage {

	public static WebDriver driver;
	public static Properties prop;
	TimeUtil timeutils;
	Logger log = LoggerUtils.getLogger(BasePage.class);
	



	/**
	 * This method is used to initialize the webdriver
	 * 
	 * @param prop
	 * @return driver
	 */
	public WebDriver initialize_driver() {

		String browserName = prop.getProperty("browser");
		String proxyName = prop.getProperty("proxy");

		if (browserName.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().proxy(proxyName).setup();
			driver = new ChromeDriver();

		} else if (browserName.equalsIgnoreCase("firefox")) {
			WebDriverManager.firefoxdriver().proxy(proxyName).setup();
			driver = new FirefoxDriver();

		} else if (browserName.equalsIgnoreCase("ie")) {
			WebDriverManager.iedriver() .proxy(proxyName).setup();
			driver = new InternetExplorerDriver();

		}else {
			System.out.println("Browser" + browserName
					+ "is not defined in properties file, please give the correct browser name");
		}

		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.get(prop.getProperty("url"));
		TimeUtil.mediumWait();
		return driver;

	}

	/**
	 * This method is used to initialize the properties and it will return
	 * properties reference
	 * 
	 * @return prop
	 */
	public BasePage() {

		prop = new Properties();
		try {
			FileInputStream ip = new FileInputStream(System.getProperty("user.dir") +"/src/main/java/config/config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}


	}

	/**
	 * take screenshot
	 */
	public void getScreenshot(Scenario scenario) {
		try {
		final byte[] screenshot =  ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
		}catch(WebDriverException e) {			
			e.printStackTrace();
		}
		
	}
	
	
	public <TPage extends BasePage > TPage getInstance(Class<TPage> pageClass) {
		try {
			return pageClass.getDeclaredConstructor(WebDriver.class).newInstance(driver);			
				} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
