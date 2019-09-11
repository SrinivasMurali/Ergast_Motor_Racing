$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/VerifyCircuitName.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the circuit name and it\u0027s location details",
  "description": "",
  "id": "verify-the-circuit-name-and-it\u0027s-location-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CircuiteName"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify circuit of the americas\u0027s location details are as expected",
  "description": "",
  "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Get total number of circuits for the year \"\u003cyear\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify circuite id is \"\u003ccircuiteID\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify circuite \"\u003cCircuite_Name\u003e\" name is display",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify latitude of the circuite \"\u003clatitude\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify langitude of the circuite \"\u003clangitude\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify loacality of the circuite \"\u003clocality\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify country of the circuite \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected;",
  "rows": [
    {
      "cells": [
        "year",
        "",
        "circuiteID",
        "",
        "Circuite_Name",
        "",
        "latitude",
        "",
        "langitude",
        "",
        "locality",
        "",
        "country"
      ],
      "line": 14,
      "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected;;1"
    },
    {
      "cells": [
        "2016",
        "",
        "americas",
        "",
        "Circuit of the Americas",
        "",
        "-37.8497",
        "",
        "144.968",
        "",
        "Melbourne",
        "",
        "Australia"
      ],
      "line": 15,
      "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Verify circuit of the americas\u0027s location details are as expected",
  "description": "",
  "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CircuiteName"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Get total number of circuits for the year \"2016\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify circuite id is \"americas\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify circuite \"Circuit of the Americas\" name is display",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify latitude of the circuite \"-37.8497\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify langitude of the circuite \"144.968\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify loacality of the circuite \"Melbourne\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify country of the circuite \"Australia\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2016",
      "offset": 43
    }
  ],
  "location": "Circuits.getTotalNumberOfCircuits(int)"
});
formatter.result({
  "duration": 697150500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "americas",
      "offset": 23
    }
  ],
  "location": "Circuits.verifyCircuiteID(String)"
});
formatter.result({
  "duration": 3471100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Circuit of the Americas",
      "offset": 17
    }
  ],
  "location": "Circuits.verifyCircuiteName(String)"
});
formatter.result({
  "duration": 18036793800,
  "status": "passed"
});
formatter.match({});
