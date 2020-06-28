import gql from 'graphql-tag'

export const schema = gql`
  type Student {
    addressstatus: String
    airtableid: String
    canvasid: String
    emergencycontact: String
    firstname: String
    gender: gen
    lastname: String
    phonenumber: String
    photo: String
    primaryemail: String
    region: String
    secondaryemail: String
    uuid: Int!
  }

  enum gen {
    female
    male
  }

  type Query {
    students: [Student!]!
    student(uuid: Int!): Student!
  }

  input CreateStudentInput {
    addressstatus: String
    airtableid: String
    canvasid: String
    emergencycontact: String
    firstname: String
    gender: gen
    lastname: String
    phonenumber: String
    photo: String
    primaryemail: String
    region: String
    secondaryemail: String
    uuid: Int!
  }

  input UpdateStudentInput {
    addressstatus: String
    airtableid: String
    canvasid: String
    emergencycontact: String
    firstname: String
    gender: gen
    lastname: String
    phonenumber: String
    photo: String
    primaryemail: String
    region: String
    secondaryemail: String
    uuid: Int
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student!
    updateStudent(uuid: Int!, input: UpdateStudentInput!): Student!
    deleteStudent(uuid: Int!): Student!
  }
`
