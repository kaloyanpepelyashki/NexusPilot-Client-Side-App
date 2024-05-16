import React, { useState } from "react";
import CreateProjectFirstStep from "../Small-Components/CreateProjectFirstStep";
import CreateProjectSecondStep from "../Small-Components/CreateProjectSecondStep";
import { Dayjs } from "dayjs";
import CreateProjectLastStep from "../Small-Components/CreateProjectLastStep";
import ProjectsService from "../../ServiceLayer/ProjectsService";

type CreateProjectOverlayProps = {
  setCloseState: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
  jwt: string;
};

const CreateProjectOverlay: React.FC<CreateProjectOverlayProps> = ({
  setCloseState,
  setShouldReload,
  userId,
  jwt,
}) => {
  /** Hooks */
  //In charge of handling which component to render on screen
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [title, setTitle] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState<
    string | undefined
  >("");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<
    string | undefined
  >("");
  //

  //Function declarations
  const firstStepNextAction = (): void => {
    if (
      !title ||
      title.length == 0 ||
      !description ||
      description.length == 0
    ) {
      return window.alert("Please fill out all fields");
    }

    setCurrentStep(2);
  };

  const secondStepNextAction = (): void => {
    if (!startDate || !endDate) {
      return window.alert("Please fill out all fields");
    }

    setCurrentStep(3);
  };

  const finishProjectCreationAction = async (): Promise<void> => {
    try {
      if (
        !title ||
        !description ||
        !thumbnailImageUrl ||
        !backgroundImageUrl ||
        !startDate ||
        !endDate
      ) {
        return window.alert("Please fill out all fields");
      }

      //Converts the dates in the specific format required by the server and casts them to a string
      const startDateString: string = startDate
        .format("YYYY-MM-DDTHH:mm:ss.SSSZ")
        .toString();
      const endDateString: string = endDate
        .format("YYYY-MM-DDTHH:mm:ss.SSSZ")
        .toString();

      const projectsService = new ProjectsService();
      const result: boolean = await projectsService.createNewProject(
        title,
        description,
        startDateString,
        endDateString,
        thumbnailImageUrl,
        backgroundImageUrl,
        userId,
        jwt
      );
      if (result) {
        setCloseState(false);
        setShouldReload(true);
        return;
      }
      setCloseState(false);
      return window.alert("Error creating project, try again");
    } catch (e) {
      window.alert("Error creating project, try again");
    }
  };

  return (
    <div className="create-project-overlay-wrapper w-full h-full absolute inset-0 flex flex-col items-center justify-center ">
      <div className="create-project-overlay-background w-full h-full absolute inset-0 bg-background-2 opacity-30"></div>
      {currentStep == 1 ? (
        <CreateProjectFirstStep
          setCloseState={setCloseState}
          setTitle={setTitle}
          setDescription={setDescription}
          nextAction={firstStepNextAction}
        />
      ) : currentStep == 2 ? (
        <CreateProjectSecondStep
          setCloseState={setCloseState}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          setCurrentStep={setCurrentStep}
          nextAction={secondStepNextAction}
        />
      ) : currentStep == 3 ? (
        <CreateProjectLastStep
          setCloseState={setCloseState}
          setThumbnailImageUrl={setThumbnailImageUrl}
          setBackgroundImageUrl={setBackgroundImageUrl}
          setCurrentStep={setCurrentStep}
          nextAction={finishProjectCreationAction}
        />
      ) : (
        " "
      )}
    </div>
  );
};
export default CreateProjectOverlay;
