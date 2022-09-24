import styles from "../styles/contact.module.css"

const contact = () => {
  return <div className="contact_form_root">
    <h3>Form</h3>
    <div className="form">
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name"  />
      </div>
    </div>
  </div>
}

export default contact