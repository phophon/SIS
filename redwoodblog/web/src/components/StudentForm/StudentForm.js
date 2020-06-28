import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const StudentForm = (props) => {
  const onSubmit = (data) => {
    data.uuid = parseInt(data.uuid)
    props.onSave(data, props?.student?.uuid)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="addressstatus"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Addressstatus
        </Label>
        <TextField
          name="addressstatus"
          defaultValue={props.student?.addressstatus}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="addressstatus" className="rw-field-error" />

        <Label
          name="airtableid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Airtableid
        </Label>
        <TextField
          name="airtableid"
          defaultValue={props.student?.airtableid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="airtableid" className="rw-field-error" />

        <Label
          name="canvasid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Canvasid
        </Label>
        <TextField
          name="canvasid"
          defaultValue={props.student?.canvasid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="canvasid" className="rw-field-error" />

        <Label
          name="emergencycontact"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Emergencycontact
        </Label>
        <TextField
          name="emergencycontact"
          defaultValue={props.student?.emergencycontact}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="emergencycontact" className="rw-field-error" />

        <Label
          name="firstname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Firstname
        </Label>
        <TextField
          name="firstname"
          defaultValue={props.student?.firstname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="firstname" className="rw-field-error" />

        <Label
          name="gender"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender
        </Label>
        <TextField
          name="gender"
          defaultValue={props.student?.gender}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="gender" className="rw-field-error" />

        <Label
          name="lastname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lastname
        </Label>
        <TextField
          name="lastname"
          defaultValue={props.student?.lastname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="lastname" className="rw-field-error" />

        <Label
          name="phonenumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phonenumber
        </Label>
        <TextField
          name="phonenumber"
          defaultValue={props.student?.phonenumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="phonenumber" className="rw-field-error" />

        <Label
          name="photo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Photo
        </Label>
        <TextField
          name="photo"
          defaultValue={props.student?.photo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="photo" className="rw-field-error" />

        <Label
          name="primaryemail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Primaryemail
        </Label>
        <TextField
          name="primaryemail"
          defaultValue={props.student?.primaryemail}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="primaryemail" className="rw-field-error" />

        <Label
          name="region"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Region
        </Label>
        <TextField
          name="region"
          defaultValue={props.student?.region}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="region" className="rw-field-error" />

        <Label
          name="secondaryemail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Secondaryemail
        </Label>
        <TextField
          name="secondaryemail"
          defaultValue={props.student?.secondaryemail}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="secondaryemail" className="rw-field-error" />

        <Label
          name="uuid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Uuid
        </Label>
        <TextField
          name="uuid"
          defaultValue={props.student?.uuid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="uuid" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StudentForm
