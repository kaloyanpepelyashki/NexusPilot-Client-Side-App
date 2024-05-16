import TaskItem from "../Models/TskItem";

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

  public async createTask(
    summary: string,
    description: string,
    startDate: string,
    endDate: string,
    priority: string,
    userId: string,
    projectId: string,
    jwt: string
  ): Promise<boolean> {
    try {
      const response = await fetch(`${this.serviceUrl}/api/Creation/newTask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          taskOwnerUUID: userId,
          projectUUID: projectId,
          summary: summary,
          description: description,
          imageUrl: "test",
          startDate: startDate,
          endDate: endDate,
          priority: priority,
        }),
      });

      if (response.status == 200) {
        return true;
      }

      return false;
    } catch (e) {
      console.log(`Error creating task: ${e}`);
      throw e;
    }
  }
}

export default TasksService;
