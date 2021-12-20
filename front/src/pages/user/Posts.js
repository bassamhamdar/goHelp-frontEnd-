import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slider.css";
import { Donate } from "../../components/Donate.js";
import { Fetchposts } from "../../redux/actions/user/userActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const Posts = () => {
  const [visible, setVisible] = useState(false);
  const [orgId, setOrgId] = useState("");
  const [postId, setPostId] = useState("");
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(Fetchposts()), [dispatch]);
  return (
    <div className="postsWrapper">
      {visible ? (
        <Donate setVisible={setVisible} org_id={orgId} post_id={postId} />
      ) : null}
      <h2 style={{ textAlign: "center", color: "grey", marginTop: "5rem" }}>
        Posts from Organizations
      </h2>
      {console.log("posts", posts)}
      <ul className="post-list" style={{ paddingTop: "5rem", margin: "auto" }}>
        {posts.length > 0 &&
          posts.map((data, i) => (
            <div className="post" style={{ height: "150px" }}>
              <div className="img">
                <img
                  src={`http://localhost:8000/${data.image}`}
                  alt="help"
                  style={{ width: "150px", marginRight: "1rem" }}
                />
              </div>
              <div>
                <h4>
                  From:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {data.organization.name}
                  </span>
                </h4>
                <h3 className="post-title" title="title">
                  Title:{" "}
                  <span style={{ fontWeight: "normal" }}>{data.title}</span>
                </h3>

                <h6 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  date: 30 min ago
                </h6>
                <hr style={{ height: "1px" }} />
                <p
                  title="post content"
                  style={{ marginBottom: "10px", marginTop: "20px" }}
                >
                  {data.description}
                </p>
                <button
                  className="donate__btn"
                  onClick={() => {
                    setVisible(true);
                    setOrgId(data.org_id);
                    setPostId(data.id);
                  }}
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};
