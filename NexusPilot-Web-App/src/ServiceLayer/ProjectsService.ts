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

  /**
   *  This method is necessary to  fetch a single project object (object data)*
   * @param projectId
   * @param jwt
   * @returns ProjectItem or null
   */
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

  /**
   * This method is called to create a new project
   * @param projectTitle
   * @param projectDescription
   * @param projectStartDate
   * @param projectEndDate
   * @param projectThumbnailUrl
   * @param projectBackgroundUrl
   * @param projectOwnerId
   * @param jwt
   * @returns bolean
   */
  public async createNewProject(
    projectTitle: string,
    projectDescription: string,
    projectStartDate: string,
    projectEndDate: string,
    projectThumbnailUrl: string,
    projectBackgroundUrl: string,
    projectOwnerId: string,
    jwt: string
  ): Promise<boolean> {
    try {
      const response = await fetch(`${this.serviceUrl}/api/Creation/project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          userUUId: projectOwnerId,
          title: projectTitle,
          description: projectDescription,
          tumbnailImageUrl: projectThumbnailUrl,
          backgroundImageUrl: projectBackgroundUrl,
          startDate: projectStartDate,
          endDate: projectEndDate,
        }),
      });

      if (response.status == 200) {
        return true;
      }

      console.log("response status: ", response.status);
      return false;
    } catch (e) {
      console.log(`Error creating new project: ${e}`);
      throw e;
    }
  }
  public async closeProject(
    projectUUID: string,
    jwt: string
  ): Promise<boolean> {
    try {
      console.log(projectUUID);
      const response = await fetch(
        `${this.serviceUrl}/api/Mutation/closeProject`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify(`${projectUUID}`),
        }
      );

      if (response.status == 200) {
        return true;
      }

      return false;
    } catch (e) {
      console.log(`Error closing project ${projectUUID}: ${e}`);
      throw e;
    }
  }
}

export default ProjectsService;
