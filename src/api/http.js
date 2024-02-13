export async function fetchPostLists() {
  const response = await fetch("서버주소");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return resData.posts;
}
