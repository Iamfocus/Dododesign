import BeatLoader from "react-spinners/BeatLoader";

export const Loader = () => {
  return (
    <div className="w-full flex justify-center py-12 ">
      <BeatLoader color="#f1b130" size={24} />
    </div>
  );
};
