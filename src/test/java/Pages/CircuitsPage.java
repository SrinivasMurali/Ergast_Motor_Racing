package Pages;

import Data.TestContext;
import WebServices.APIConnector;
import org.json.JSONArray;
import org.json.JSONObject;
import org.testng.Assert;

import java.util.HashMap;

public class CircuitsPage {
    private TestContext testContext;
    APIConnector connector = new APIConnector();

    public CircuitsPage(TestContext testContext) {
        this.testContext = testContext;
    }

    public void getTotalCircuits(int year) throws Exception {
        JSONObject jsonObject = connector.getTotalCircuits(this.testContext.getLastAPIResponce(), year);
        JSONObject data = jsonObject.getJSONObject("MRData");
        String total = data.getString("total");
        this.testContext.setLastAPIResponce(jsonObject);
    }

    public void verifyGetCircuiteStatus(JSONObject jsonObject, int status) throws Exception {
        // JSONObject jsonObject = connector.getTotalCircuits(this.testContext.getLastAPIResponce(), circuits);
        Assert.assertEquals(jsonObject.getInt("status"), status);
    }

    public void verifyTotalCircuits(JSONObject jsonObject, int circuits) throws Exception {
        JSONObject total = jsonObject.getJSONObject("MRData");
        String cir = total.getString("total");
        int total_circuts = Integer.parseInt(cir);
        Assert.assertEquals(circuits, total_circuts);
    }

    public void verifyCircuiteId(JSONObject jsonObject, String circuiteId) throws Exception {
        String circuiteid = "";
        JSONArray circuites = jsonObject.getJSONObject("MRData").getJSONObject("CircuitTable").getJSONArray("Circuits");
        for (int i = 0; i < circuites.length(); i++) {
            JSONObject jsonObject1 = circuites.getJSONObject(i);
            circuiteid = jsonObject1.get("circuitId").toString();
            if(circuiteId.equals(circuiteid)) {
                break;
            }
        }
        Assert.assertEquals(circuiteid, circuiteId);
    }

    public void verifyCircuiteName(JSONObject jsonObject, String circuite_name) throws Exception {
        String circuiteName = "";
        JSONArray circuites = jsonObject.getJSONObject("MRData").getJSONObject("CircuitTable").getJSONArray("Circuits");
        for (int i = 0; i < circuites.length(); i++) {
            JSONObject jsonObject1 = circuites.getJSONObject(i);
            circuiteName = jsonObject1.get("circuitName").toString();
            if (circuite_name.equals(circuiteName)) {
                break;
            }
        }
            Assert.assertEquals(circuiteName, circuite_name);
      }

    public void verifylatitude(JSONObject jsonObject, String circuite_name) throws Exception {
        String circuiteName = "";
        JSONArray circuites = jsonObject.getJSONObject("MRData").getJSONObject("CircuitTable").getJSONArray("Circuits");
        for (int i = 0; i < circuites.length(); i++) {
            JSONObject jsonObject1 = circuites.getJSONObject(i);

            circuiteName = jsonObject1.get("circuitName").toString();
            if (circuite_name.equals(circuiteName)) {
                break;
            }
        }

    }
}