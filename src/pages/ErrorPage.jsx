import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-4xl text-center mt-40">Oops!</h1>
      <p className="text-center text-2xl mt-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl text-center mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
        <Link to='/'>
         <p className="text-center mt-3"> <button className="btn  text-center"> Back to home</button></p>
        </Link>
    </div>
  );
}


