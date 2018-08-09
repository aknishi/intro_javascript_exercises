class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
  }
}

Student.prototype.name = function () {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function (course) {
  if (!courses.includes(course)) {
    this.courses.push(course);
  };
  if (!course.enrolledStudents.includes(this)) {
    course.enrolledStudents.push(this);
  }
};

Student.prototype.courseLoad = function () {
  const courseLoad = {};

    this.courses.forEach(course => {
      let dpt = course.department;
      courseLoad[dpt] = courseLoad[dpt] || 0;
      courseLoad[dpt] += course.credits;
    });

    return courseLoad;
};

class Course {
  constructor(name, department, credits){
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.enrolledStudents = []
  }
}
