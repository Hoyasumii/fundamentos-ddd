import { Entity } from "@/core/entities/entity";

type StudentProps = { name: string };

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: string) {
    const student = new Student(props, id);

    return student;
  }
}
