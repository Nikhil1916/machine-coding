import React from "react";
import CommentBox from "./CommentBox";
const data = [
  {
    username: "Nikhil 1",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Nikhil 12",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
      {
        username: "Tanya 12",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            username: "Nikhil 123",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            replies: [
              {
                username: "Nikhil 1234",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              },
              {
                username: "Tanya",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              },
            ],
          },
          {
            username: "Tanya",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            replies: [
              {
                username: "Nikhil",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              },
              {
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
    username: "Tanya",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Nikhil",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
      {
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
