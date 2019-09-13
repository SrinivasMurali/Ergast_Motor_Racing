package StepDefinitions;

import Data.TestContext;
import Pages.CircuitsPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Circuits {

    private CircuitsPage circuite;
    private TestContext testContext;

    public Circuits(TestContext testContext) throws Exception {
        this.testContext = testContext;
        this.circuite = new CircuitsPage(testContext);
    }

    @Given("^Verify total number of circuits for the year \"(.*?)\" \"(.*?)\"$")
    public void getTotalNumberOfCircuits(int year, int circuiteCount) throws Exception{
        circuite.getTotalCircuits(year, circuiteCount);
    }

    @Then("^Verify status code for get circuite request \"(.*?)\"$")
    public void verifyGetCircuiteStatus(int totalCircuits) throws Exception{
        circuite.verifyGetCircuiteStatus(this.testContext.getLastAPIResponce(), totalCircuits);
    }

    @Then("^Verify total number of circuits \"(.*?)\"$")
    public void verifyTotalNumberOfCircuits(int totalCircuits) throws Exception{
        circuite.verifyTotalCircuits(this.testContext.getLastAPIResponce(), totalCircuits);
    }

    @Then("^Verify circuite id is \"(.*?)\"$")
    public void verifyCircuiteID(String circuiteId) throws Exception{
        circuite.verifyCircuiteId(this.testContext.getLastAPIResponce(), circuiteId);
    }

    @Then("^Verify circuite \"(.*?)\" name is display$")
    public void verifyCircuiteName(String circuiteName) throws Exception{
        circuite.verifyCircuiteName(this.testContext.getLastAPIResponce(), circuiteName);
    }

    @Then("^Verify latitude of the circuite \"(.*?)\" \"(.*?)\"$")
    public void verifyLatitude(String circuiteName, String latitude) throws Exception{
        circuite.verifylatitude(this.testContext.getLastAPIResponce(), circuiteName, latitude);
    }

    @Then("^Verify langitude of the circuite \"(.*?)\" \"(.*?)\"$")
    public void verifyLangitude(String circuiteName, String latitude) throws Exception{
        circuite.verifyLangitude(this.testContext.getLastAPIResponce(), circuiteName, latitude);
    }

    @Then("^Verify loacality of the circuite \"(.*?)\" \"(.*?)\"$")
    public void verifyLoacality(String circuiteName, String locality) throws Exception{
        circuite.verifyLoacality(this.testContext.getLastAPIResponce(), circuiteName, locality);
    }

    @Then("^Verify country of the circuite \"(.*?)\" \"(.*?)\"$")
    public void verifyCountry(String circuiteName, String country) throws Exception{
        circuite.verifyCountry(this.testContext.getLastAPIResponce(), circuiteName, country);
    }
}
