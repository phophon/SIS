import Student from 'src/components/Student'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Student not found</div>

export const Success = ({ student }) => {
  return <Student student={student} />
}
