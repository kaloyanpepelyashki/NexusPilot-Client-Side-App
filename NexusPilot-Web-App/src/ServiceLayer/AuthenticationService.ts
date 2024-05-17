import SignInReturnObject from "../Models/Auth/SignInReturnObject";
import User from "../Models/Auth/User";

/**
 * This class is in charge of handling all interaction with the authentication service of the system
 */
class AuthenticationService {
  private serviceUrl: string;

  constructor() {
    this.serviceUrl =
      "https://nexuspilot-authentication-service-latest.onrender.com";
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

  public async fetchUserProfile(jwt: string, userId: string): Promise<User> {
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
      throw e;
    }
  }

  public async createNewUserProfile(
    nickName: string,
    bio: string,
    role: string,
    email: string,
    password: string
  ): Promise<boolean> {
    const response = await fetch(`${this.serviceUrl}/api/Auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickName: nickName,
        bio: bio,
        role: role,
        email: email,
        password: password,
      }),
    });
    if (response.status == 200) {
      return true;
    } else {
      return false;
    }
  }
}

export default AuthenticationService;
