import ErrorPage from "@/components/ErrorPage";

const NotFound = () => {
  return (
    <ErrorPage 
      title="404 - Page Not Found"
      message="The page you're looking for doesn't exist."
      showButton={true}
    />
  );
};

export default NotFound;
