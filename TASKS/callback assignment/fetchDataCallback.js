function fetchDataWithCallback(callback) {
  setTimeout(() => {
    let error = false; // Change to true to simulate an error
    try {
      if (error) {
        throw new Error("Fetch failed");
      } else {
        callback("Data fetched");
      }
    } catch (err) {
      console.error("Error: " + err.message);
    }
  }, 2000);
}

// Example usage:
fetchDataWithCallback(function(result) {
  console.log(result);
});