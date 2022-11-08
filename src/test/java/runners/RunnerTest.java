package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		features="C:\\Users\\sarne\\Selenium\\cucmber\\CucumberNew\\src\\test\\java\\feature\\TechFiosLogin.feature",
		glue="steps",
		tags="@LoginFeature",
		monochrome=true,
		dryRun=false,
		plugin= {
				"pretty",
				"html:target/cucumber",
				"json:target/cucumber.json"
		}
		
		
		)


public class RunnerTest {

}
