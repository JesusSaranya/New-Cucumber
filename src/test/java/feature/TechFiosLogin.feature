
@LoginFeature
Feature: Techfios login functionality validation



Scenario Outline: User should be able to login with valid credentials
Given user is on techfios login page
When user enters username as "<username>"
When Uesr enters password as "<password>"
And User clicks on signin button
Then User should land on Dashboard page


Examples:
|username|password|
|demo@techfios.com|abc123|