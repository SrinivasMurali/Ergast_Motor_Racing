package WebServices;

import org.json.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;

public class APIConnector {
 private String Circuites_endPoint1 = "http://ergast.com/api/f1/",
                circuite_endPoint2 = "/circuits.json";

    public JSONObject getTotalCircuits(JSONObject lastAPIResponce, int year) throws Exception{
        Connection.Response response =(Connection.Response) Jsoup.connect(Circuites_endPoint1 + year + circuite_endPoint2).ignoreContentType(true)
                .method(Connection.Method.GET)
                .execute();
        String result = response.body();
        JSONObject data = new JSONObject(result);
        return data;
    }
}