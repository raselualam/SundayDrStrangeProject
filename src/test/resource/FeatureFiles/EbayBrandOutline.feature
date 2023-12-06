@regression @smoke @us-246
Feature: Ebay Brand Outline

Description: User should able to filter items by Brand

	Background: 
		Given Open Ebay Homepage
	
	Scenario Outline: Filter items by Brand
		Given Search for "<Items>"
		When Filter by "<Brand>"
		Then Item list should have products of "<Brand>"
	
	Examples:
		|Items		|Brand		|
		|Shoes		|Nike		|
		|Shirts		|Adidas		|
		|Pants		|Unbranded	|
		
		
#	Scenario Outline: Filter items by Color 
#		Given Search for "<Items>"
#		When Specific color of "<Color>"
#		Then Item list should have "<Color>"
	
#	Examples:
#		|Items		|Color			|
#		|Shoes		|Black			|
#		|Shirts		|White			|
#		|Pants		|Blue 			|
		
#	Scenario Outline: Selenium Alert 
#		Given Open Shetty Homepage
#		When Click on "<Button>"
#		Then Click on "<Alert>"
	
#	Examples:
#		|Button		|Alert		|
#		|Alert		|OK			|
#		|Confirm	|OK			|
#		|Confirm	|Cancel 	|