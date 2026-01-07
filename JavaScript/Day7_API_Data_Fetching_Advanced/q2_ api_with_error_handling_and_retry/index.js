const api = "https://jsonplaceholder.typicode.com/posts/1";

const fetchWithRetry = async (url, maxRetries = 3, delay = 500) => {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;

    } catch (error) {
      attempt++;

      if (attempt == maxRetries) {
        console.error("All retry attempts failed");
        throw error;
      }

      const backoffTime = delay * Math.pow(2, attempt - 1);

      console.log(`Attempt ${attempt} failed. Retrying in ${backoffTime}ms`);

      await new Promise((resolve) => setTimeout(resolve, backoffTime));
    }
  }
};

fetchWithRetry(api)
  .then((data) => {
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    console.error("Final Error:", error.message);
  });