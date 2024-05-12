/**
 * This model is in charge of generating an object, after user sign-in action. The model encapsulates the importatn values of the authentication state.
 */
class SignInReturnObject {
  //Jwt mmust be used as authentication baearer for every request send to the tasks and projects services
  public jwt: string;
  public userEmail: string;
  public userId: string;
  constructor(jwt: string, userEmail: string, userId: string) {
    this.jwt = jwt;
    this.userEmail = userEmail;
    this.userId = userId;
  }
}

export default SignInReturnObject;
