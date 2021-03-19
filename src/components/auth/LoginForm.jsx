import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form label-position="top">
      <div>
        <input type="email" name="email" v-model="email" />
      </div>
      <div>
        <input type="password" name="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Login</button>
        <Link to="/register" className="link">
          or register?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
