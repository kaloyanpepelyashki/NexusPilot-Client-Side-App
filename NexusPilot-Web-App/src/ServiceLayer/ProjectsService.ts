/**
 * This class is in charge of handling all interaction with the projects service of the system
 * The class provides methods for fetching projects for a user, based on user id and all of the other CRUD operations
 */
class ProjectsService {
  private serviceUrl: string;
  constructor() {
    this.serviceUrl = "http://localhost:5278";
  }

  public async getAllProjectsForUser(userId: string, jwt: string) {
    try {
      await fetch(
        `http://localhost:5278/api/Retrieval/allProjectsForUser/d4199734-7b37-40f9-b674-e940183c0c8e`,
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            //'Authorization': 'Bearer ${jwt}'
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            console.log(`response: ${response}`);
            return response.json();
          } else {
            console.log(response);
            throw new Error(
              `Status code does not indicate success: ${response.status} ${response.statusText}`
            );
          }
        })
        .then((data) => {
          console.log(data);
        });
    } catch (e) {
      console.log(`Error getting all projects for id ${userId}: ${e}`);
    }
  }
}

export default ProjectsService;
