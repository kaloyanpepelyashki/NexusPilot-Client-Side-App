class TaskItem {
  id: string;
  summary: string;
  description: string;
  imageUrl: string;
  priority: string;
  startDate: string;
  endDate: string;
  done: boolean;
  projectId: string;
  taskOwnerId: string;
  constructor(
    id: string,
    summary: string,
    description: string,
    imageUrl: string,
    priority: string,
    startDate: string,
    endDate: string,
    done: boolean,
    projectId: string,
    taskOwnerId: string
  ) {
    this.id = id;
    this.summary = summary;
    this.description = description;
    this.imageUrl = imageUrl;
    this.priority = priority;
    this.startDate = startDate;
    this.endDate = endDate;
    this.done = done;
    this.projectId = projectId;
    this.taskOwnerId = taskOwnerId;
  }
}
