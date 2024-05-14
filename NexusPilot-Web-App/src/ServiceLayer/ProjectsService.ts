import ProjectItem from "../Models/ProjectItem";

/**
 * This class is in charge of handling all interaction with the projects service of the system
 * The class provides methods for fetching projects for a user, based on user id and all of the other CRUD operations
 */
class ProjectsService {
  private serviceUrl: string;
  constructor() {
    this.serviceUrl = "https://nexuspilot-projects-service-latest.onrender.com";
  }

  /**
   * This mmethod returns all projects, belonging to a user
   * The method expects to receive userId and jwt as arguments
   * @param userId
   * @param jwt
   */
  public async getAllProjectsForUser(
    userId: string,
    jwt: string
  ): Promise<ProjectItem[] | null> {
    try {
      const response = await fetch(
        `${this.serviceUrl}/api/Retrieval/allProjectsForUser/${userId}`,
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
      return null;
    } catch (e) {
      console.log(`Error getting all projects for id ${userId}: ${e}`);
      throw e;
    }
  }

  public async getProjectData(
    projectId: string,
    jwt: string
  ): Promise<ProjectItem | null> {
    try {
      const response = await fetch(
        `${this.serviceUrl}/api/Retrieval/project/${projectId}`,
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
      return null;
    } catch (e) {
      console.log(`Error getting project ${projectId}: ${e}`);
      throw e;
    }
  }
}

export default ProjectsService;
