@CircuiteName
Feature: Verify the circuit name and it's location details

  Scenario Outline: Verify circuit of the americas's location details are as expected
    Given Get total number of circuits for the year "<year>"
    Then Verify circuite id is "<circuiteID>"
    When Verify circuite "<Circuite_Name>" name is display
    Then Verify latitude of the circuite "<circuiteID>" "<latitude>"
    Then Verify langitude of the circuite "<circuiteID>" "<langitude>"
    Then Verify loacality of the circuite "<circuiteID>" "<locality>"
    Then Verify country of the circuite "<circuiteID>" "<country>"

    Examples:
    | year | | circuiteID | | Circuite_Name           | | latitude | | langitude | | locality | | country |
    | 2016 | | americas   | | Circuit of the Americas | | 30.1328  | | -97.6411  | | Austin   | | USA |
    | 2017 | | suzuka     | | Suzuka Circuit          | | 34.8431  | | 136.541   | | Suzuka   | | Japan |
    | 2018 | | albert_park     | | Albert Park Grand Prix Circuit          | | -37.8497  | | 144.968   | | Melbourne   | | Australia |
    | 2019 | | americas     | | Circuit of the Americas          | | 30.1328  | | -97.6411   | | Austin   | | USA |