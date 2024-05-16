import React from "react";

const Loader: React.FC = () => {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="spinner"></div>
        <h3 className="text-lg font-bold text-heading mt-10">
          Stand still, <br />
          loading...
        </h3>
      </main>
    </>
  );
};
export default Loader;
