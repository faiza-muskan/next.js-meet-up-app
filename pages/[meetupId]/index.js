import MeetupDetails from "../../components/meetups/MeetupDetails";

const meetupDetails = (props) => {
  return <MeetupDetails meetupData={props.meetupData} />;
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: [
        {
          image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          id: meetupId,
          key: meetupId,
          title: "first meetup",
          address: "some street",
          description: "this is a first meetup ",
        },
      ],
    },
  };
};
export default meetupDetails;
