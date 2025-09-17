// GET https://jsonplaceholder.typicode.com/posts
// POST https://jsonplaceholder.typicode.com/posts
// GET https://jsonplaceholder.typicode.com/posts/{id}/comments

export const getPosts = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  return response.json();
};

export const getPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return response.json();
}

export const getPostCommentsByPostId = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  return response.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addNewPost = async (body: any) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body });

  return response.json();
}
