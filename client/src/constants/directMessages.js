export const directMessages = [
  {
    id: 1,
    senderId: 1,
    username: "John_Doe",
    lastMessage: "Yo",
    updatedAt: "11:58 PM",

    messages: [
      {
        id: 1,
        senderId: 1,
        text: "Yo",
        createdAt: "11:55 PM",
      },
      {
        id: 2,
        senderId: 0,
        text: "What's up?",
        createdAt: "11:56 PM",
      },
      {
        id: 3,
        senderId: 1,
        text: "Nothing much",
        createdAt: "11:58 PM",
      },
    ],
  },

  {
    id: 2,
    senderId: 2,
    username: "Dwayne",
    lastMessage: "Hello World",
    updatedAt: "12:01 PM",

    messages: [
      {
        id: 1,
        senderId: 2,
        text: "Hello World",
        createdAt: "12:01 PM",
      },
      {
        id: 2,
        senderId: 0,
        text: "Classic programmer message 😂",
        createdAt: "12:03 PM",
      },
    ],
  },

  {
    id: 3,
    senderId: 3,
    username: "Battery",
    lastMessage: "My nigga",
    updatedAt: "01:28 PM",

    messages: [
      {
        id: 1,
        senderId: 3,
        text: "My nigga",
        createdAt: "01:28 PM",
      },
      {
        id: 2,
        senderId: 0,
        text: "😂😂😂",
        createdAt: "01:29 PM",
      },
    ],
  },
];
