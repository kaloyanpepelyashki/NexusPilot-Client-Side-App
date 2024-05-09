import { BackButton } from "../UI-Components/Atomic-components/BackButton";

export const SignInScreen: React.FC = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <BackButton />
      <h2>Sign-in page</h2>
    </main>
  );
};
