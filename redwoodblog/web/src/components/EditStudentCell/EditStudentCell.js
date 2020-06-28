import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StudentForm from 'src/components/StudentForm'

export const QUERY = gql`
  query FIND_STUDENT_BY_ID($uuid: Int!) {
    student: student(uuid: $uuid) {
      addressstatus
      airtableid
      canvasid
      emergencycontact
      firstname
      gender
      lastname
      phonenumber
      photo
      primaryemail
      region
      secondaryemail
      uuid
    }
  }
`
const UPDATE_STUDENT_MUTATION = gql`
  mutation UpdateStudentMutation($uuid: Int!, $input: UpdateStudentInput!) {
    updateStudent(uuid: $uuid, input: $input) {
      uuid
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ student }) => {
  const { addMessage } = useFlash()
  const [updateStudent, { loading, error }] = useMutation(
    UPDATE_STUDENT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.students())
        addMessage('Student updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, uuid) => {
    updateStudent({ variables: { uuid, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Student {student.uuid}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudentForm
          student={student}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
