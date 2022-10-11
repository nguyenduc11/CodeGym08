import Student from "./Student";
import StudentManager from "./StudentManager";
let neymar = new Student("neymar", 7, 8, 9);

console.log(neymar.getAveScore());
console.log(neymar.getRank());
let messi = new Student("messi", 8, 8, 10);

console.log(messi.getAveScore());
console.log(messi.getRank());

let haaland = new Student("haaland", 6, 7, 8);
console.log(haaland.getAveScore());
console.log(haaland.getRank());

let lewy = new Student("lewy", 9, 9, 9);
console.log(lewy.getAveScore());
console.log(lewy.getRank());

let salah = new Student("salah", 4, 5, 6);
console.log(salah.getAveScore());
console.log(salah.getRank());

let StudentManager01 = new StudentManager();
StudentManager01.add(neymar);
StudentManager01.add(messi);
StudentManager01.add(haaland);
StudentManager01.add(lewy);
StudentManager01.add(salah);

StudentManager01.getAll();
console.log(StudentManager01);

let GoodStudent = StudentManager01.filterGoodStudent();
console.log("So Hoc Sinh Gioi: " + GoodStudent.length);
console.log(GoodStudent);

let NormalStudent = StudentManager01.filterNormalStudent();
console.log("So Hoc Sinh Kha: " + NormalStudent.length);
console.log(NormalStudent);

let BadStudent = StudentManager01.filterBadStudent();
console.log("So Hoc Sinh TB: " + BadStudent.length);
console.log(BadStudent);
