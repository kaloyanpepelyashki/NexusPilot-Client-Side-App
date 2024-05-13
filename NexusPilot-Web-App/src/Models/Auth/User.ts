/**
 * This class represents the full and complete user entity
 */
class User {
  public id: string;
  public nickName: string;
  public bio: string;
  public email: string;
  public role: string;
  public avatartImageUrl: string;
  public accountDeleted: boolean;

  constructor(
    id: string,
    nickname: string,
    bio: string,
    email: string,
    role: string,
    avatarImageUrl: string,
    accountDeleted: boolean
  ) {
    this.id = id;
    this.nickName = nickname;
    this.bio = bio;
    this.email = email;
    this.role = role;
    this.avatartImageUrl = avatarImageUrl;
    this.accountDeleted = accountDeleted;
  }
}

export default User;
