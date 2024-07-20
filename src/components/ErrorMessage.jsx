import React from "react";

const ErrorMessage = ({ errorCode }) => {
  let message;

  switch (errorCode) {
    case 400:
      message = "Bad Request. Please check your input.";
      break;
    case 401:
      message = "Unauthorized. Please log in.";
      break;
    case 403:
      message =
        "Forbidden. You do not have permission to access this resource.";
      break;
    case 404:
      message = "Not Found. The resource you are looking for does not exist.";
      break;
    case 426:
      message = "A CORS error occurred. Please upgrade your browser.";
      break;
    case 429:
      message = "Too Many Requests. Please try again later.";
      break;
    case 500:
      message = "Internal Server Error. Please try again later.";
      break;
    case 502:
      message = "Bad Gateway. The server is down or being upgraded.";
      break;
    case 503:
      message = "Service Unavailable. Please try again later.";
      break;
    case 504:
      message = "Gateway Timeout. The server is not responding.";
      break;
    default:
      message = "An unknown error occurred. Please try again.";
  }

  return (
    <div className="max-w-md min-h-min:screen mx-auto p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
      <p className="font-bold">Error {errorCode}</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
