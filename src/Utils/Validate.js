

const Validate = (email,password) => {
  const isEmail=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const isPassword=/^[A-Za-z]\w{7,14}$/.test(password);
  if(!isEmail)return "Invalid Email";
  if(!isPassword)return "Invalid Password"
  return null;
}

export default Validate;