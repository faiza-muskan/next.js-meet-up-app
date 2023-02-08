import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const dummyData = [
//   {
//     id: "m1",
//     title: "first meetup",
//     image:
//       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     address: "test address",
//     description: " this is our first meet-up",
//   },
//   {
//     id: "m2",
//     title: "second meetup",
//     image:
//       "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     address: "test address",
//     description: " this is our second meet-up",
//   },
// ];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://faiza:SdLM%405ZNgniFbwG@cluster0.lnlp98m.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
