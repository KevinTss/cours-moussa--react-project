import NavMenu from "../components/layouts/NavMenu";
import LoginForm from "../components/auth/LoginForm";

const HomePage = () => {
  return (
    <div>
      <NavMenu />
      <main>
        <h1>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default HomePage;
