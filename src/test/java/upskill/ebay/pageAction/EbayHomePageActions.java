package upskill.ebay.pageAction;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import upskill.ebay.pageElements.EbayHomePageLocators;
import upskill.utilities.SetupDrivers;

public class EbayHomePageActions {
	
	EbayHomePageLocators EbayHomePageLocatorsObj;
	
	public EbayHomePageActions(){
		EbayHomePageLocatorsObj = new EbayHomePageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayHomePageLocatorsObj);
	}
	
	public void searchShoes(){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Shoes");
		
//		EbayHomePageLocatorsObj.btnSearch.click();
		
		JavascriptExecutor js = (JavascriptExecutor)SetupDrivers.driver;	//Creating JS object	
//		js.executeScript("EbayHomePageLocatorsObj.btnSearch.click();");
		
		js.executeScript("arguments[0].click();", EbayHomePageLocatorsObj.btnSearch);
	}
	
	public void searchShirt(){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Shirts");
		EbayHomePageLocatorsObj.btnSearch.click();
	}
	
	public void searchPent(){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Pants");
		EbayHomePageLocatorsObj.btnSearch.click();
	}
	
	public void searchCottonTee(){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Big & Tall Cotton Tee");
		EbayHomePageLocatorsObj.btnSearch.click();
	}
	
	public void searchItems(String items){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(items);
//		EbayHomePageLocatorsObj.btnSearch.click();
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.ENTER);
	}
	
	
	public void mouseHoverEbay() throws Exception{
		
		Actions actions = new Actions(SetupDrivers.driver);
		actions.moveToElement(EbayHomePageLocatorsObj.linkMyEbay);
		actions.perform();
		Thread.sleep(2000);
	}
	
	
	public void clickSummary() throws Exception{
		EbayHomePageLocatorsObj.linkSummary.isEnabled();
		EbayHomePageLocatorsObj.linkSummary.click();
		Thread.sleep(2000);
	}
	
	
	public void synchronization(){
		/*	Selenium Wait : 
				1. Implicit wait(Global), 
				2. Explicit wait(Conditional), 
				3. Fluent wait(intermittent) */
			
		//Implicit Wait
		SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		//Explicit Wait
		WebDriverWait explicitWait = new WebDriverWait(SetupDrivers.driver, 10);
		explicitWait.until(ExpectedConditions.elementToBeClickable(EbayHomePageLocatorsObj.btnSearch));
		
		//Fluent Wait
		FluentWait fluentWait = new FluentWait(SetupDrivers.driver);								
		fluentWait.withTimeout(10, TimeUnit.SECONDS);
		fluentWait.pollingEvery(2, TimeUnit.SECONDS);
	}
	
	public void keyboardKeys(){
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.ENTER);
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.UP);
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.DOWN);
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.CLEAR);
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.DELETE);
	}
	
	public void handleAlert(){
		SetupDrivers.driver.switchTo().alert().accept();
		SetupDrivers.driver.switchTo().alert().dismiss();
		SetupDrivers.driver.switchTo().alert().sendKeys("Good service");
		SetupDrivers.driver.switchTo().alert().getText();
	}
	
	public void javaScriptExecutor(){
		JavascriptExecutor js = (JavascriptExecutor)SetupDrivers.driver;	//Creating JS object
		
		js.executeScript("");
		
		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.click();"); //Clicking on element
		
		js.executeScript("EbayHomePageLocatorsObj.txtbxSearch.value ='shirt';"); //Writing something
		
		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.checked=true;"); //Interect Checkbox
		
		js.executeScript("window.location = 'http://upskill.com';"); // initializing location
		
		js.executeScript("location.reload()"); 						//Refresh browser
		
		js.executeScript("alert('Confirmation');");					//Alert
		
		js.executeScript("window.scrollBy(0,500)", ""); 			//Scroll down to specific pixel
		
		js.executeScript("window.scrollBy(0,-500)", ""); 			//Scroll up to specific pixel
		
		js.executeScript("arguments[0].scrollIntoView();", EbayHomePageLocatorsObj.btnSearch);  //Scroll to a object
		
		js.executeScript("window.scrollBy(0,document.body.scrollHeight)"); //Scroll down to bottom of website
	}
}