import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Wrapper from "./Wrapper";
import Footer from "./Footer";
import Menu from "./Menu";

const Post = () => {
  const [postContent, setPostcontent] = useState("");

  const url = window.location.href;
  const currentBlog = url.split("/post/")[1].split("%20").join(" ");

  useEffect(() => {
    import(`../database/posts/${currentBlog}.md`).then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div>
      <Wrapper>
        <article>
          <main className="post-wrapper">
            <Markdown>{postContent}</Markdown>
          </main>
        </article>
        <Menu></Menu>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
};

export default Post;
