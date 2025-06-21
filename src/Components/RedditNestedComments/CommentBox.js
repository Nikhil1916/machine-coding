import React from "react";

const CommentBox = ({ data }) => {
  return data?.map((comments) => {
    return (
      <div className="p-2 border-black border-l-2 ml-2 mt-2">
        <div className="flex">
          <img src="https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=25230580211a4613502539e7ce286623fc28bc8f" />
          <div className="ml-2">
            <p>{comments.username}</p>
            <p>{comments.comment}</p>
          </div>
        </div>
        {comments.replies && <CommentBox data={comments.replies} />}
      </div>
    );
  });
};

export default CommentBox;
