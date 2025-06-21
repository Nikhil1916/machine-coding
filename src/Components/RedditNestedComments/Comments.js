import React from "react";
import CommentBox from "./CommentBox";
const data = [
  {
    username: "Nikhil 1",
    id:1,
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    showReplies: true,
    replies: [
      {
        id:2,
        username: "Nikhil 12",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        showReplies: true,
      },
      {
        id:3,
        username: "Tanya 12",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        showReplies: true,
        replies: [
          {
            username: "Nikhil 123",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            showReplies: true,
            id:4,
            replies: [
              {
                id:5,
                username: "Nikhil 1234",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              },
              {
                id:6,
                username: "Tanya",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              },
            ],
          },
          {
            id:7,
            username: "Tanya",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            showReplies: true,
            replies: [
              {
                id:8,
                username: "Nikhil",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              },
              {
                id:9,
                username: "Tanya",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id:10,
    username: "Tanya",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    showReplies: true,
    replies: [
      {
        id:11,
        username: "Nikhil",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
      {
        id:12,
        username: "Tanya",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
];

const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
