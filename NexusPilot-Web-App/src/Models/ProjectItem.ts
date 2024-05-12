class ProjectItem {
  id: string;
  title: string;
  description: string;
  thumbnailImageUrl: string;
  backgroundImageUrl: string;
  startDate: string;
  endDate: string;
  closed: boolean;
  ownerId: string;

  constructor(
    id: string,
    title: string,
    description: string,
    thumbnailImageUrl: string,
    backgroundImageUrl: string,
    startDate: string,
    endDate: string,
    closed: boolean,
    ownerId: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.thumbnailImageUrl = thumbnailImageUrl;
    this.backgroundImageUrl = backgroundImageUrl;
    this.startDate = startDate;
    this.endDate = endDate;
    this.closed = closed;
    this.ownerId = ownerId;
  }
}

export default ProjectItem;
