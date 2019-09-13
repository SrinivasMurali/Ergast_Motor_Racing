@CircuiteName
Feature: Find Formula 1 races, drivers, circuits etc..

Scenario Outline: Find the total number of circuits in differrent years
  Given Verify total number of circuits for the year "<year>" "<circuites>"
  #Then Verify status code for get circuite request "<status>"
  Then Verify total number of circuits "<circuits>"
  Examples:
    | year   | |circuites| | status  | | circuits   |
    | 2016   | |    21   | |  200    | |   21       |
    | 2017   | |    20   | |  200    | |   20       |
    | 2018   | |    21   | |  200    | |   21       |
    | 2019   | |    21   | |  200    | |   21       |