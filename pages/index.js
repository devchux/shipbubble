import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../src/components/buttons/button";
import Post from "../src/components/cards/post";
import Users from "../src/components/dropdown/users";
import Input from "../src/components/inputs/input";
import Textarea from "../src/components/inputs/textarea";
import Paginate from "../src/components/pagination/paginate";
import {
  createPost,
  getPosts,
  getPostsByUser,
  getUsers,
} from "../src/redux/actions";

export default function Home() {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const dispatch = useDispatch();
  const { posts, users } = useSelector(({ state }) => state);

  const onSelect = (user) => {
    dispatch(getPostsByUser(user.id));
  };

  const onSubmit = () => {
    if (!inputs.title || !inputs.body) return;
    dispatch(createPost(inputs));
  };

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>ShipBubble</title>
      </Head>
      <div className="max-w-6xl m-auto p-4 sm:p-8">
        <div>
          <div className="flex justify-end">
            <div className="w-full max-w-[200px]">
              <Users people={users.list} onSelect={onSelect} />
            </div>
          </div>
        </div>
        <div className="my-5">
          {posts.list.map(({ title, body, id, userId }) => (
            <div className="mb-3" key={id}>
              <Post
                id={id}
                title={title}
                body={body}
                user={users.list.find(({ id }) => id === userId)}
              />
            </div>
          ))}
        </div>
        <div>
          <Paginate />
        </div>
        <div className="max-w-lg mx-auto mt-12">
          <div className="mt-3">
            <Input
              type="text"
              label="Title"
              name="title"
              placeholder="Enter Post Title"
              value={inputs.title}
              onChange={({ target: { value } }) =>
                setInputs({ ...inputs, title: value })
              }
              required
            />
          </div>
          <div className="mt-3">
            <Textarea
              label="Body"
              name="body"
              placeholder="Enter Post Content"
              value={inputs.body}
              onChange={({ target: { value } }) =>
                setInputs({ ...inputs, body: value })
              }
              required
            />
          </div>
          <div className="mt-3">
            <Users
              init={users.list[0]}
              people={users.list}
              onSelect={({ id }) => setInputs({ ...inputs, userId: id })}
            />
          </div>
          <div className="py-3 text-right">
            <Button type="button" onClick={onSubmit}>
              Create Post
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
