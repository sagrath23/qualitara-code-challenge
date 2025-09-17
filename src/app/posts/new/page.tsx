'use client';

import { addNewPost } from "@/api";

const NewPostPage = () => {
  const handlePostSubmit = (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const body = event.target[1].value;
    const payload = { title, body };
    const addPostPromise = addNewPost(payload);

    addPostPromise.then((data) => {
      console.log(data, 'saved');
    })
  }

  return (
    <form onSubmit={handlePostSubmit}>
      <label>Title</label>
      <input type="text" name="title" style={{ backgroundColor: 'white', color: 'black' }}/>
      <label>Body</label>
      <input type="text" name="body" style={{ backgroundColor: 'white', color: 'black' }}/>
      <button type="submit">Create</button>
    </form>
  );
}

export default NewPostPage;
