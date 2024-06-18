import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      {/* <button onClick={logGoogleUser}>
        Sign in with Google Popups
      </button> */}
      <Button buttonType="google" onclick={logGoogleUser}>
        Sign in with Google Popups
      </Button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
