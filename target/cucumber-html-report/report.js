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
  "name": "Verify latitude of the circuite \"\u003ccircuiteID\u003e\" \"\u003clatitude\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify langitude of the circuite \"\u003ccircuiteID\u003e\" \"\u003clangitude\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify loacality of the circuite \"\u003ccircuiteID\u003e\" \"\u003clocality\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify country of the circuite \"\u003ccircuiteID\u003e\" \"\u003ccountry\u003e\"",
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
        "30.1328",
        "",
        "-97.6411",
        "",
        "Austin",
        "",
        "USA"
      ],
      "line": 15,
      "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected;;2"
    },
    {
      "cells": [
        "2017",
        "",
        "suzuka",
        "",
        "Suzuka Circuit",
        "",
        "34.8431",
        "",
        "136.541",
        "",
        "Suzuka",
        "",
        "Japan"
      ],
      "line": 16,
      "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected;;3"
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
  "name": "Verify latitude of the circuite \"americas\" \"30.1328\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify langitude of the circuite \"americas\" \"-97.6411\"",
  "matchedColumns": [
    2,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify loacality of the circuite \"americas\" \"Austin\"",
  "matchedColumns": [
    2,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify country of the circuite \"americas\" \"USA\"",
  "matchedColumns": [
    2,
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
  "duration": 702519500,
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
  "duration": 3343100,
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
  "duration": 112300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "americas",
      "offset": 33
    },
    {
      "val": "30.1328",
      "offset": 44
    }
  ],
  "location": "Circuits.verifyLatitude(String,String)"
});
formatter.result({
  "duration": 538900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "americas",
      "offset": 34
    },
    {
      "val": "-97.6411",
      "offset": 45
    }
  ],
  "location": "Circuits.verifyLangitude(String,String)"
});
formatter.result({
  "duration": 251600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "americas",
      "offset": 34
    },
    {
      "val": "Austin",
      "offset": 45
    }
  ],
  "location": "Circuits.verifyLoacality(String,String)"
});
formatter.result({
  "duration": 275500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "americas",
      "offset": 32
    },
    {
      "val": "USA",
      "offset": 43
    }
  ],
  "location": "Circuits.verifyCountry(String,String)"
});
formatter.result({
  "duration": 271800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify circuit of the americas\u0027s location details are as expected",
  "description": "",
  "id": "verify-the-circuit-name-and-it\u0027s-location-details;verify-circuit-of-the-americas\u0027s-location-details-are-as-expected;;3",
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
  "name": "Get total number of circuits for the year \"2017\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify circuite id is \"suzuka\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify circuite \"Suzuka Circuit\" name is display",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify latitude of the circuite \"suzuka\" \"34.8431\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify langitude of the circuite \"suzuka\" \"136.541\"",
  "matchedColumns": [
    2,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify loacality of the circuite \"suzuka\" \"Suzuka\"",
  "matchedColumns": [
    2,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify country of the circuite \"suzuka\" \"Japan\"",
  "matchedColumns": [
    2,
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2017",
      "offset": 43
    }
  ],
  "location": "Circuits.getTotalNumberOfCircuits(int)"
});
formatter.result({
  "duration": 282747700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suzuka",
      "offset": 23
    }
  ],
  "location": "Circuits.verifyCircuiteID(String)"
});
formatter.result({
  "duration": 218000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuka Circuit",
      "offset": 17
    }
  ],
  "location": "Circuits.verifyCircuiteName(String)"
});
formatter.result({
  "duration": 278900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suzuka",
      "offset": 33
    },
    {
      "val": "34.8431",
      "offset": 42
    }
  ],
  "location": "Circuits.verifyLatitude(String,String)"
});
formatter.result({
  "duration": 1095900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suzuka",
      "offset": 34
    },
    {
      "val": "136.541",
      "offset": 43
    }
  ],
  "location": "Circuits.verifyLangitude(String,String)"
});
formatter.result({
  "duration": 3049800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suzuka",
      "offset": 34
    },
    {
      "val": "Suzuka",
      "offset": 43
    }
  ],
  "location": "Circuits.verifyLoacality(String,String)"
});
formatter.result({
  "duration": 604700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suzuka",
      "offset": 32
    },
    {
      "val": "Japan",
      "offset": 41
    }
  ],
  "location": "Circuits.verifyCountry(String,String)"
});
formatter.result({
  "duration": 572100,
  "status": "passed"
});
});