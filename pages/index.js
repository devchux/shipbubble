import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
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
  const { posts, users, comments } = useSelector(({ state }) => state);
  const { query } = useRouter();
  const loading = posts.loading || users.loading || comments.loading;

  const onSelect = (user) => {
    dispatch(getPostsByUser(user.id));
  };

  const onSubmit = () => {
    if (!inputs.title || !inputs.body) return;
    dispatch(createPost(inputs));
  };

  const currentPosts = useMemo(() => {
    const firstPageIndex = ((query.page || 1) - 1) * 10;
    const lastPageIndex = firstPageIndex + 10;
    return posts.list.slice(firstPageIndex, lastPageIndex);
  }, [posts.list, query.page]);

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
          <div className="flex justify-between items-end">
            <p>{loading && "Please wait..."}</p>
            <div className="w-full max-w-[200px]">
              <Users people={users.list} onSelect={onSelect} />
            </div>
          </div>
        </div>
        <div className="my-5">
          {currentPosts.map(({ title, body, id, userId }) => (
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
          <Paginate
            totalPages={Math.ceil(posts.list.length / 10)}
            currentPage={+query.page || 1}
          />
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
