// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!

  test("orginization should be equal to nonprofit", function() {
    expect(launchcode.orginization).toBe("nonprofit");
  });

  test("executiveDirector should be equal to Jeff", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("100% of the employees are cool", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programs offered should contain an array with Web Development, Data Analysis, and Liftoff", function() {
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('Liftoff');
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("launchOutput should return 'Launch!' if passed a number that is only divisble by 2", function(){
    expect(launchcode.launchOutput(4)).toBe('Launch!');
  });

  test("launchOutput should return 'Code!' if  passed a number that is only divisble by 3", function(){
    expect(launchcode.launchOutput(9)).toBe('Code!');
  });

  test("launchOutput should return 'Rocks!' if passed a number that is only divisble by 5", function() {
    expect(launchcode.launchOutput(25)).toBe('Rocks!');
  });

  test("launchOutput should return 'LaunchCode!' if passed a number that is divisble by 2 and 3", function() {
    expect(launchcode.launchOutput(12)).toBe('LaunchCode!');
  });

  test("launchOutput should return 'Code Rocks!' if passed a number that is divisble by 3 and 5", function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  test("launchOutput should return 'Launch Rocks!' if passed a number that is divisble by 2 and 5", function(){
    expect(launchcode.launchOutput(20)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("launchOutput should return 'LaunchCode Rocks!' if passed a number that is divisble by 2, 3, and 5", function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });
  
  test("launchOutput should return 'Rutabagas! That doesn't work.' if passed a number that is not divisble by 2, 3, or 5", function(){
    expect(launchcode.launchOutput(19)).toBe("Rutabagas! That doesn't work.")
  });
});