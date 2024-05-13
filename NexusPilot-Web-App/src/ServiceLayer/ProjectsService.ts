import ProjectItem from "../Models/ProjectItem";

/**
 * This class is in charge of handling all interaction with the projects service of the system
 * The class provides methods for fetching projects for a user, based on user id and all of the other CRUD operations
 */
class ProjectsService {
  private serviceUrl: string;
  constructor() {
    this.serviceUrl = "http://localhost:5278";
  }

  /**
   * This mmethod returns all projects, belonging to a user
   * The method expects to receive userId and jwt as arguments
   * @param userId
   * @param jwt
   */
  public async getAllProjectsForUser(userId: string, jwt: string) {
    try {
      const response = await fetch(
        `https://nexuspilot-projects-service-latest.onrender.com/api/Retrieval/allProjectsForUser/${userId}`,
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

        return data;
      }
    } catch (e) {
      console.log(`Error getting all projects for id ${userId}: ${e}`);
    }
  }
}

export default ProjectsService;
