/**
 * This class is in charge of handling all interaction with the task service of the system
 * The class provides methods for fetchin tasks for a user, based on user id and all of the other CRUD operations
 */
class TasksService {
  private serviceUrl: string;

  constructor() {
    this.serviceUrl = "https://nexuspilot-tasks-service-latest.onrender.com";
  }

  public async getAllProjectTasks(
    projectId: string,
    jwt: string
  ): Promise<TaskItem[] | null> {
    try {
      const response = await fetch(
        `${this.serviceUrl}/api/Retrieval/allProjectTasks/${projectId}`,
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
      console.log(`Error getting project tasks for project ${projectId}: ${e}`);
      throw e;
    }
  }
}

export default TasksService;
