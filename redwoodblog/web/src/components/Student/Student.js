import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($uuid: Int!) {
    deleteStudent(uuid: $uuid) {
      uuid
    }
  }
`

const Student = ({ student }) => {
  const { addMessage } = useFlash()
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.students())
      addMessage('Student deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (uuid) => {
    if (confirm('Are you sure you want to delete student ' + uuid + '?')) {
      deleteStudent({ variables: { uuid } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Student {student.uuid} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>addressstatus</th>
              <td>{student.addressstatus}</td>
            </tr>
            <tr>
              <th>airtableid</th>
              <td>{student.airtableid}</td>
            </tr>
            <tr>
              <th>canvasid</th>
              <td>{student.canvasid}</td>
            </tr>
            <tr>
              <th>emergencycontact</th>
              <td>{student.emergencycontact}</td>
            </tr>
            <tr>
              <th>firstname</th>
              <td>{student.firstname}</td>
            </tr>
            <tr>
              <th>gender</th>
              <td>{student.gender}</td>
            </tr>
            <tr>
              <th>lastname</th>
              <td>{student.lastname}</td>
            </tr>
            <tr>
              <th>phonenumber</th>
              <td>{student.phonenumber}</td>
            </tr>
            <tr>
              <th>photo</th>
              <td>{student.photo}</td>
            </tr>
            <tr>
              <th>primaryemail</th>
              <td>{student.primaryemail}</td>
            </tr>
            <tr>
              <th>region</th>
              <td>{student.region}</td>
            </tr>
            <tr>
              <th>secondaryemail</th>
              <td>{student.secondaryemail}</td>
            </tr>
            <tr>
              <th>uuid</th>
              <td>{student.uuid}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ uuid: student.uuid })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.uuid)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Student
