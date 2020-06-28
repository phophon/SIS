import StudentsLayout from 'src/layouts/StudentsLayout'
import EditStudentCell from 'src/components/EditStudentCell'

const EditStudentPage = ({ uuid }) => {
  return (
    <StudentsLayout>
      <EditStudentCell uuid={uuid} />
    </StudentsLayout>
  )
}

export default EditStudentPage
