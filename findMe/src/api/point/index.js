import instance from ".."
/**
 * This function loads paginated requests from the server.
 */
export async function getAllPoints() {
  try {
    console.log(process.env.REACT_APP_BACKEND_URL)
    const response = await instance.get("/points");

    console.log(response.data);

    if (response.status === 200) {
      return {
        data: response.data.data,
        count: response.data.count,
      };
    }

    return {
      error: "Error loading  points",
    };
  } catch (error) {
    return {
      error: "Error loading points.",
    };
  }
}