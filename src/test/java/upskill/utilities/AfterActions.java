package upskill.utilities;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;

public class AfterActions {
	
	TakeScreenshot TakeScreenshotObj = new TakeScreenshot();
	
	@After
	public void afterActions(Scenario Scenario) throws Exception{
		
		if(Scenario.isFailed()){
			TakeScreenshotObj.screenshots();
			Scenario.embed(((TakesScreenshot) SetupDrivers.driver).getScreenshotAs(OutputType.BYTES),"image/png");
		}
		
		SetupDrivers.tearDownDriver();
		System.out.println(" ------Test Complete, Browser Closed ");
	}
}