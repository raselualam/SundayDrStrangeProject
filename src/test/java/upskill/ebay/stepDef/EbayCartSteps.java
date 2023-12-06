package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbayCartActions;

public class EbayCartSteps {
	
	EbayCartActions EbayCartActionsObj = new EbayCartActions();

	@When("^Select Size$")
	public void select_Size() throws Throwable {
		EbayCartActionsObj.switchNewWindow();
		EbayCartActionsObj.selectSizeTypeDD();
	}

	@When("^Select Men Size$")
	public void select_Men_Size() throws Throwable {
		EbayCartActionsObj.selectMenSizeDD();
	}

	@When("^Select Shade$")
	public void select_Shade() throws Throwable {
		EbayCartActionsObj.selectShadeDD();
	}

	@When("^Select Quantity$")
	public void select_Quantity() throws Throwable {
		EbayCartActionsObj.enterQuantity();
	}

	@Then("^Add to shopping cart$")
	public void add_to_shopping_cart() throws Throwable {
		EbayCartActionsObj.addToCart();
	}
}