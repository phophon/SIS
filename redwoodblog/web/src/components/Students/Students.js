import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($uuid: Int!) {
    deleteStudent(uuid: $uuid) {
      uuid
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const StudentsList = ({ students }) => {
  const { addMessage } = useFlash()
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      addMessage('Student deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (uuid) => {
    if (confirm('Are you sure you want to delete student ' + uuid + '?')) {
      deleteStudent({ variables: { uuid }, refetchQueries: ['STUDENTS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>addressstatus</th>
            <th>airtableid</th>
            <th>canvasid</th>
            <th>emergencycontact</th>
            <th>firstname</th>
            <th>gender</th>
            <th>lastname</th>
            <th>phonenumber</th>
            <th>photo</th>
            <th>primaryemail</th>
            <th>region</th>
            <th>secondaryemail</th>
            <th>uuid</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.uuid}>
              <td>{truncate(student.addressstatus)}</td>
              <td>{truncate(student.airtableid)}</td>
              <td>{truncate(student.canvasid)}</td>
              <td>{truncate(student.emergencycontact)}</td>
              <td>{truncate(student.firstname)}</td>
              <td>{truncate(student.gender)}</td>
              <td>{truncate(student.lastname)}</td>
              <td>{truncate(student.phonenumber)}</td>
              <td>{truncate(student.photo)}</td>
              <td>{truncate(student.primaryemail)}</td>
              <td>{truncate(student.region)}</td>
              <td>{truncate(student.secondaryemail)}</td>
              <td>{truncate(student.uuid)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.student({ uuid: student.uuid })}
                    title={'Show student ' + student.uuid + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStudent({ uuid: student.uuid })}
                    title={'Edit student ' + student.uuid}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete student ' + student.uuid}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(student.uuid)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsList
