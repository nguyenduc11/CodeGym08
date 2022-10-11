import Footballer from "./Footballer";
import FootballManager from "./FootballManager";
let neymar = new Footballer("neymar", 29, 300);
// neymar.logger();
let messi = new Footballer("messi", 34, 800);
// messi.logger();
let haaland = new Footballer("haaland", 22, 100);
let lewy = new Footballer("lewy", 33, 500);
// haaland.logger();
// console.log(neymar, messi, haaland);
// let ArrayFootballer = [neymar, messi, haaland];
// console.log(ArrayFootballer);
// console.log(ArrayFootballer[1]);
let newFootballManager = new FootballManager();
newFootballManager.add(neymar);
newFootballManager.add(messi);
newFootballManager.add(haaland);
newFootballManager.add(lewy);
newFootballManager.getAll();
console.log(newFootballManager);
let filteredAge = newFootballManager.filterAge();
console.log(filteredAge);
let filteredGoal = newFootballManager.filterGoal();
console.log(filteredGoal);
