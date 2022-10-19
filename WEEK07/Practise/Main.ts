import Student from "./Student";
import StudentManager from "./StudentManager";
let neymar = new Student("neymar", "PSG", 8, 6);

// console.log(neymar.getRank());
let messi = new Student("messi", "PSG", 10, 10);

console.log(messi.getAveScore());
// console.log(messi.getRank());

let haaland = new Student("haaland", "MC", 10, 8);
console.log(haaland.getAveScore());
// console.log(haaland.getRank());

let lewy = new Student("lewy", "BARCA", 10, 6);
console.log(lewy.getAveScore());
// console.log(lewy.getRank());

let salah = new Student("salah", "LIVERPOOL", 6, 6);
console.log(salah.getAveScore());
// console.log(salah.getRank());

let StudentManager01 = new StudentManager();
StudentManager01.add(neymar);
neymar.getAveScore();
StudentManager01.add(messi);
messi.getAveScore();
StudentManager01.add(haaland);
haaland.getAveScore();
StudentManager01.add(lewy);
lewy.getAveScore();
StudentManager01.add(salah);
salah.getAveScore();

StudentManager01.getAll();
console.log(StudentManager01);
console.log("Tong so hoc sinh la " + StudentManager01.getStudentQuatity());
let PSGStudent = StudentManager01.filterStudentGroup();
console.log("So Hoc Sinh PSG: " + PSGStudent.length);
console.log(PSGStudent);
console.log("Tim hoc sinh co ten la Messi");
console.log(StudentManager01.filterByName("messi"));
console.log("Tim hoc sinh Group PSG");
StudentManager01.filterByName("PSG");
console.log(StudentManager01.filterByGroup("PSG"));
console.log(" Sap Xep Hoc Sinh");
console.log(StudentManager01.sortStudentLargeToSmall());
// let NormalStudent = StudentManager01.filterNormalStudent();
// console.log("So Hoc Sinh Kha: " + NormalStudent.length);
// console.log(NormalStudent);

// let BadStudent = StudentManager01.filterBadStudent();
// console.log("So Hoc Sinh TB: " + BadStudent.length);
// console.log(BadStudent);
