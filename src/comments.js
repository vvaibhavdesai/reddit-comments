export let comments = {
  name: "Vaibhav",
  comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam similique atque porro quidem reiciendis.",
  hasNestedComment: true,
  parentId: null,
  childrenId: 1,
  comments: [
    {
      name: "shabash",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam similique atque porro quidem reiciendis.",
      hasNestedComment: true,
      parentId: 1,
      childrenId: 1,
      comments: [
        {
          name: "alfred",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam similique atque porro quidem reiciendis.",
          hasNestedComment: false,
          parentId: 1,
          childrenId: 1,
        },
        {
          name: "david",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam similique atque porro quidem reiciendis.",
          hasNestedComment: true,
          parentId: 1,
          childrenId: 2,
          comments: [
            {
              name: "alfred",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam similique atque porro quidem reiciendis.",
              hasNestedComment: false,
              parentId: 1,
              childrenId: 1,
            },
            {
              name: "alfred",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam similique atque porro quidem reiciendis.",
              hasNestedComment: false,
              parentId: 1,
              childrenId: 1,
            },
            {
              name: "alfred",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam similique atque porro quidem reiciendis.",
              hasNestedComment: false,
              parentId: 1,
              childrenId: 1,
            },  
          ],
        },
      ],
    },
  ],
};
