

const Validate = (email,password) => {
  const isEmail=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  // const isPassword=/^[A-Za-z]\w{7,14}$/.test(password);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isEmail)return "Invalid Email";
  if(!isPassword)return "Invalid Password"
  return null;
}

export default Validate;
