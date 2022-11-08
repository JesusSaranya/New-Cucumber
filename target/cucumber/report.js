$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sarne/Selenium/cucmber/CucumberNew/src/test/java/feature/TechFiosLogin.feature");
formatter.feature({
  "line": 3,
  "name": "Techfios login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Uesr enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 17,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Uesr enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 4335051400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "TestDefinition.user_enters_username_as_demo_techfios_com(String)"
});
formatter.result({
  "duration": 3155952700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "TestDefinition.uesr_enters_password_as(String)"
});
formatter.result({
  "duration": 3080653300,
  "status": "passed"
});
formatter.match({
  "location": "TestDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 4274225100,
  "status": "passed"
});
formatter.match({
  "location": "TestDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 8435900,
  "status": "passed"
});
});