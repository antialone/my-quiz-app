function FormSignIn() {
  return <div> 
<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control"/>
  </div>

  <div className="col-md-6">
    <label for="inputCity" className="form-label">UserName</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">Role</label>
    <select id="inputState" className="form-select">
      <option selected >User</option>
      <option>Admin</option>
    </select>
  </div>
  <input type="file" />

</form>

  </div>
}

export default FormSignIn;
