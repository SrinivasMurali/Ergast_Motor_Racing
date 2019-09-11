package Data;

import org.json.JSONObject;

public class TestContext {
private JSONObject lastAPIResponce;

    public JSONObject getLastAPIResponce() {
        return lastAPIResponce;
    }

    public void setLastAPIResponce(JSONObject lastAPIResponce) {
        this.lastAPIResponce = lastAPIResponce;
    }
}
