import MeetupList from "../components/meetups/MeetupList";

const dummyData = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "test address",
    description: " this is our first meet-up",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "test address",
    description: " this is our second meet-up",
  },
];

const HomePage = () => {
  return (
    <>
      <MeetupList meetups={dummyData} />
    </>
  );
};

export default HomePage;
