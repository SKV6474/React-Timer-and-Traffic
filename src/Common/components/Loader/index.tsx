import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <ThreeDots color="#3b82f6" height={50} width={50} />
    </div>
  );
};

export default Loader;
