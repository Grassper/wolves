import React, { useEffect } from "react";
import "./homepage.styles.css";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing actions
import { fetchPostCollectionAsyncStart } from "../../redux/post/post.actions";

// importing components
import PostCard from "../../components/postCard/postCard.components";

// importing selector
import { selectPost } from "../../redux/post/post.selectors";

// importing off the self
import Skeleton from "react-loading-skeleton";

const Homepage = ({ fetchCollection, postArray }) => {
  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  if (postArray.length === 0) {
    return (
      <div>
        <div className="loader-Container">
          <div className="loader">
            <Skeleton count={1} height={100} />
            <Skeleton count={3} height={25} />
          </div>
          <div className="loader">
            <Skeleton count={1} height={100} />
            <Skeleton count={3} height={25} />
          </div>
          <div className="loader">
            <Skeleton count={1} height={100} />
            <Skeleton count={3} height={25} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="photofolio-container">
        {postArray.map((post) => {
          return (
            <PostCard
              key={post._id}
              _id={post._id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchPostCollectionAsyncStart()),
});

const mapStateToProps = createStructuredSelector({
  postArray: selectPost,
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
