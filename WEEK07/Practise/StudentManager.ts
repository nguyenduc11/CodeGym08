import Student from "./Student";

class StudentManager {
  public StudentList: Student[] = [];
  constructor() {}
  add(Student: any): void {
    this.StudentList.push(Student);
  }
  getAll() {
    return this.StudentList;
  }
  getStudentQuatity(): number {
    return this.StudentList.length;
  }
  filterStudentGroup() {
    return this.StudentList.filter((Student) => {
      return Student.group === "PSG";
    });
  }
  filterByName(targetName: string) {
    // let targetName: string = "Messi";
    let filterArrName: any[] = new Array(0);
    for (let i = 0; i < this.StudentList.length; i++) {
      if (this.StudentList[i].name === targetName) {
        filterArrName.push(this.StudentList[i]);
      }
    }
    return filterArrName;
  }
  filterByGroup(targetGroup: string) {
    // let targetName: string = "Messi";
    let filterArrGroup: any[] = new Array(0);
    for (let i = 0; i < this.StudentList.length; i++) {
      if (this.StudentList[i].group === targetGroup) {
        filterArrGroup.push(this.StudentList[i]);
      }
    }
    return filterArrGroup;
  }
  sortStudentLargeToSmall() {
    let size: number = this.StudentList.length;
    for (let i = 0; i < size; i++) {
      let min: number = i;
      for (let j = i + 1; j < size; j++) {
        if (
          this.StudentList[j].getAveScore() <
          this.StudentList[min].getAveScore()
        ) {
          min = j;
        }
        if (min != i) {
          let temp = this.StudentList[i];
          this.StudentList[i] = this.StudentList[min];
          this.StudentList[min] = temp;
        }
      }
    }
    return this.StudentList;
  }
  // filterNormalStudent() {
  //   return this.StudentList.filter((Student) => {
  //     return Student.rank === "KHA";
  //   });
  // }
  // filterBadStudent() {
  //   return this.StudentList.filter((Student) => {
  //     return Student.rank === "TB";
  //   });
  // }
}

export default StudentManager;
