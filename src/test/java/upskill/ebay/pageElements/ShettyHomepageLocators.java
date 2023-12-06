package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShettyHomepageLocators {

	//Home button
	@FindBy(xpath="//*[contains(text(),'Home')]")
	public WebElement btnHome;
}
