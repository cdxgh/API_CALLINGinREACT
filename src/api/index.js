export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.cypress.io/posts", {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Log the data to the console

    return data; // Return the data
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error to handle it further up the call stack if needed
  }
};
