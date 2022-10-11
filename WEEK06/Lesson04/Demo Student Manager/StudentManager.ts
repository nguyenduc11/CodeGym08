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
  filterGoodStudent() {
    return this.StudentList.filter((Student) => {
      return Student.rank === "GIOI";
    });
  }

  filterNormalStudent() {
    return this.StudentList.filter((Student) => {
      return Student.rank === "KHA";
    });
  }
  filterBadStudent() {
    return this.StudentList.filter((Student) => {
      return Student.rank === "TB";
    });
  }
}

export default StudentManager;
