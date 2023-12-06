$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand Outline",
  "description": "\r\nDescription: User should able to filter items by Brand",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 15,
      "id": "ebay-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 16,
      "id": "ebay-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 17,
      "id": "ebay-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 18,
      "id": "ebay-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4670393600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 594858400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4354506400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 3086872900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 912950700,
  "status": "passed"
});
formatter.after({
  "duration": 869184500,
  "status": "passed"
});
formatter.before({
  "duration": 3114555900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 39162700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 5254781200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 4529473300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 864658400,
  "status": "passed"
});
formatter.after({
  "duration": 834540100,
  "status": "passed"
});
formatter.before({
  "duration": 3142819600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 50479200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 3894862100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 3491629200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 327086100,
  "status": "passed"
});
formatter.after({
  "duration": 934093300,
  "status": "passed"
});
formatter.uri("EbayCartDropDown.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Cart Functionality",
  "description": "\r\nDescription: User should able to add items in cart",
  "id": "ebay-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-248"
    }
  ]
});
formatter.before({
  "duration": 3143299800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 33843200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Ebay cart functionality",
  "description": "",
  "id": "ebay-cart-functionality;ebay-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Search for Shirt",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select the first shirt on item list",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Size",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Men Size",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Shade",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Add to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_Shirt()"
});
formatter.result({
  "duration": 3376288600,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_the_first_shirt_on_item_list()"
});
formatter.result({
  "duration": 868128300,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Size()"
});
formatter.result({
  "duration": 5792542700,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Men_Size()"
});
formatter.result({
  "duration": 2339451000,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Shade()"
});
formatter.result({
  "duration": 2156011400,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Quantity()"
});
formatter.result({
  "duration": 2229821000,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.add_to_shopping_cart()"
});
formatter.result({
  "duration": 54978600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(), \u0027Add to cart/ Fail\u0027)]\"}\n  (Session info: chrome\u003d119.0.6045.200)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027RASEL\u0027, ip: \u002710.0.0.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.200, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\rasel\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:54530}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fa860c780f5d396d12ccb572ee9d5877\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(), \u0027Add to cart/ Fail\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbayCartActions.addToCart(EbayCartActions.java:56)\r\n\tat upskill.ebay.stepDef.EbayCartSteps.add_to_shopping_cart(EbayCartSteps.java:34)\r\n\tat ✽.Then Add to shopping cart(EbayCartDropDown.feature:16)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2153983900,
  "status": "passed"
});
formatter.uri("EbaySearch.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3213152000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 197461300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for Shoes",
  "description": "",
  "id": "ebay-search-functionality;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Search for shoes",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Item list should have only shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 23200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_shoes()"
});
formatter.result({
  "duration": 3642468600,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_shoes_related_products()"
});
formatter.result({
  "duration": 739415800,
  "status": "passed"
});
formatter.after({
  "duration": 788380700,
  "status": "passed"
});
formatter.before({
  "duration": 3314249100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 29881300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search for Pants",
  "description": "",
  "id": "ebay-search-functionality;search-for-pants",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Search for Pants",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Item list should have only Pants related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_Pants()"
});
formatter.result({
  "duration": 3492140400,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Pants_related_products()"
});
formatter.result({
  "duration": 728848800,
  "status": "passed"
});
formatter.after({
  "duration": 797749300,
  "status": "passed"
});
formatter.before({
  "duration": 2785380200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 38665800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search for Shirts",
  "description": "",
  "id": "ebay-search-functionality;search-for-shirts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Search for Shirts",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Item list should have only Shirts related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_Shirts()"
});
formatter.result({
  "duration": 5625784500,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Shirts_related_products()"
});
formatter.result({
  "duration": 343933300,
  "status": "passed"
});
formatter.after({
  "duration": 780343800,
  "status": "passed"
});
formatter.uri("EbaySummaryMoseHover.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2693275000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover;ebay-summary-mousehover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover to MyEbay Summary",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 23499000,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.mouse_Hover_to_MyEbay_Summary()"
});
formatter.result({
  "duration": 2264929700,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.click_on_Summary()"
});
formatter.result({
  "duration": 3990261800,
  "status": "passed"
});
formatter.after({
  "duration": 763970200,
  "status": "passed"
});
formatter.uri("PetstoreApiTesting.feature");
formatter.feature({
  "line": 2,
  "name": "Petstore API Testing",
  "description": "",
  "id": "petstore-api-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@api"
    }
  ]
});
formatter.before({
  "duration": 2788921000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Pet CRUD API",
  "description": "",
  "id": "petstore-api-testing;pet-crud-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Create pet",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Get pet",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Update pet",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Get pet",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Delete pet",
  "keyword": "And "
});
formatter.match({
  "location": "PetstoreApiSteps.create_pet()"
});
formatter.result({
  "duration": 3508944800,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreApiSteps.get_pet()"
});
formatter.result({
  "duration": 192816400,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreApiSteps.update_pet()"
});
formatter.result({
  "duration": 209485100,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreApiSteps.get_pet()"
});
formatter.result({
  "duration": 244198000,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreApiSteps.delete_pet()"
});
formatter.result({
  "duration": 192507200,
  "status": "passed"
});
formatter.after({
  "duration": 1265913200,
  "status": "passed"
});
formatter.uri("Shettyiframe.feature");
formatter.feature({
  "line": 2,
  "name": "Rahul Shetty iframe practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-20"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2847568800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Iframe Practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice;iframe-practice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Shetty Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on iFrame Home",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should reload iframe homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ShettyHomepageSteps.open_Shetty_Homepage()"
});
formatter.result({
  "duration": 9262858900,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.click_on_iFrame_Home()"
});
formatter.result({
  "duration": 163556200,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.it_should_reload_iframe_homepage()"
});
formatter.result({
  "duration": 3031291300,
  "status": "passed"
});
formatter.after({
  "duration": 763004300,
  "status": "passed"
});
});