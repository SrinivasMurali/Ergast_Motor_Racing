@Circuits
Feature: Find Formula 1 races, drivers, circuits etc..

Scenario Outline: Find the total number of circuits in differrent years
  Given Get total number of circuits for the year "<year>"
  #Then Verify status code for get circuite request "<status>"
  Then Verify total number of circuits "<circuits>"
  Examples:
    | year   | | status  | | circuits |
    | 2016   | |  200    | | 21       |
    | 2017   | |  200    | | 20       |
    | 2018   | |  200    | | 21       |
    | 2019   | |  200    | | 21       |

