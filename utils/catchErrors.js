function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // request was made but server responded with status code not in the 200s
    errorMsg = error.response.data;
    console.error("Error response", errorMsg);

    // for Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // request was made but no response was received
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    // something else happened in making the request that triggered the error
    errorMsg = error.message;
    console.error("Error message", errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
