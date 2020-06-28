import { db } from 'src/lib/db'

export const students = () => {
  return db.student.findMany()
}

export const student = ({ uuid }) => {
  return db.student.findOne({
    where: { uuid },
  })
}

export const createStudent = ({ input }) => {
  return db.student.create({
    data: input,
  })
}

export const updateStudent = ({ uuid, input }) => {
  return db.student.update({
    data: input,
    where: { uuid },
  })
}

export const deleteStudent = ({ uuid }) => {
  return db.student.delete({
    where: { uuid },
  })
}
