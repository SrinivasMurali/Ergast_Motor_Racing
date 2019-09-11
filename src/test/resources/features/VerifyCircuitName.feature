@CircuiteName
Feature: Verify the circuit name and it's location details

  Scenario Outline: Verify circuit of the americas's location details are as expected
    Given Get total number of circuits for the year "<year>"
    Then Verify circuite id is "<circuiteID>"
    When Verify circuite "<Circuite_Name>" name is display
    Then Verify latitude of the circuite "<Circuite_Name>" "<latitude>"
    Then Verify langitude of the circuite "<Circuite_Name>" "<langitude>"
    Then Verify loacality of the circuite "<Circuite_Name>" "<locality>"
    Then Verify country of the circuite "<Circuite_Name>" "<country>"

    Examples:
    | year | | circuiteID | | Circuite_Name           | | latitude | | langitude | | locality |  | country |
    | 2016 | | americas   | | Circuit of the Americas | | -37.8497 | | 144.968   | | Melbourne | | Australia |