// Components
import SignUp from "../../Components/Sign/signup";

function SignInPage() {
  return (
    <>
      <SignUp
        title={"Sign In"}
        btnText={"Sign In"}
        hasAccount={"Don't have an account?"}
        apiEndPoint={"/api/login"}
        method={"POST"}
        link={"/signup"}
      />
    </>
  );
}

export default SignInPage;
