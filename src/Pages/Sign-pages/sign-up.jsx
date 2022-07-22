// Components
import SignUp from "../../Components/Sign/signup";

function SignUpPage() {
  return (
    <>
      <SignUp
        title={"Sign Up"}
        btnText={"Sign Up"}
        hasAccount={"Already have an account?"}
        apiEndPoint={"/api/register"}
        method={"POST"}
        link="/login"
      />
    </>
  );
}

export default SignUpPage;
