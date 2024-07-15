const Login = ({ handleLogin }) => {
  return (
    <>
      <h1>Login</h1>
      <button className='btn btn-primary' onClick={handleLogin}>
        Giriş Yap..
      </button>
    </>
  );
};

export default Login;
