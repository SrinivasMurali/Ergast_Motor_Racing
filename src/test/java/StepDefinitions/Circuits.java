package StepDefinitions;

import Data.TestContext;
import Pages.CircuitsPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Circuits {

    private CircuitsPage circuite;
    private TestContext testContext;

    public Circuits(TestContext testContext) throws Exception {
       this.testContext = testContext;
       this.circuite = new CircuitsPage(testContext);
    }

    @Given("^Get total number of circuits for the year \"(.*?)\"$")
    public void getTotalNumberOfCircuits(int year) throws Exception{
        circuite.getTotalCircuits(year);
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
    public void verifyLatitude(int latitude) throws Exception{
        circuite.verifylatitude(this.testContext.getLastAPIResponce(), circuiteName);
    }

    @Then("^Verify langitude of the circuite \"(.*?)\" \"(.*?)\"$")
    public void verifyLatitude(int latitude) throws Exception{
        circuite.verifyCircuiteName(this.testContext.getLastAPIResponce(), circuiteName);
    }

    @Then("^Verify loacality of the circuite \"(.*?)\" \"(.*?)\"$")
    public void verifyLatitude(int latitude) throws Exception{
        circuite.verifyCircuiteName(this.testContext.getLastAPIResponce(), circuiteName);
    }

    @Then("^Verify country of the circuite \"(.*?)\" \"(.*?)\"$")
    public void verifyLatitude(int latitude) throws Exception{
        circuite.verifyCircuiteName(this.testContext.getLastAPIResponce(), circuiteName);
    }


}
