import StudentsLayout from 'src/layouts/StudentsLayout'
import StudentCell from 'src/components/StudentCell'

const StudentPage = ({ uuid }) => {
  return (
    <StudentsLayout>
      <StudentCell uuid={uuid} />
    </StudentsLayout>
  )
}

export default StudentPage
