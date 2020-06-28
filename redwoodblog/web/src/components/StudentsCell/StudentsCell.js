import { Link, routes } from '@redwoodjs/router'

import Students from 'src/components/Students'

export const QUERY = gql`
  query STUDENTS {
    students {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No students yet. '}
      <Link to={routes.newStudent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ students }) => {
  return <Students students={students} />
}
