import SignInReturnObject from "../Models/Auth/SignInReturnObject";
import User from "../Models/Auth/User";

/**
 * This class is in charge of handling all interaction with the authentication service of the system
 */
class AuthenticationService {
  private serviceUrl: string;

  constructor() {
    this.serviceUrl = "http://localhost:5191";
  }

  public async signIn(
    email: string,
    password: string
  ): Promise<SignInReturnObject | undefined> {
    try {
      const response = await fetch(`${this.serviceUrl}/api/Auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status == 200) {
        const data = await response.json();
        return new SignInReturnObject(data.token, data.email, data.id);
      } else {
        throw new Error(
          `Status code does not indicate success: ${response.status} ${response.statusText}`
        );
      }
    } catch (e) {
      console.log(`Error signing in: ${e}`);
      return undefined;
    }
  }

  public async fetchUserProfile(jwt: string, userId: string) {
    try {
      const response = await fetch(
        `${this.serviceUrl}/api/Retrieval/getUser/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.status == 200) {
        const data = await response.json();
        console.log(data);
        return new User(
          data.id,
          data.nickName,
          data.bio,
          data.email,
          data.role,
          data.avatarImageUrl,
          data.accountDeleted
        );
      } else {
        throw new Error(
          `Status code does not indicate success: ${response.status} ${response.statusText}`
        );
      }
    } catch (e) {
      console.log(`Error getting user ${userId}`);
    }
  }
}

export default AuthenticationService;