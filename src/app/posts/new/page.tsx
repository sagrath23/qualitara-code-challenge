'use client';

import { addNewPost } from "@/api";
import { SyntheticEvent } from "react";

const NewPostPage = () => {
  const handlePostSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    // @ts-expect-error
    const title = event.target[0].value;
    // @ts-expect-error
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
