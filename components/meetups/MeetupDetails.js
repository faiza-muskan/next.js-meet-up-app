import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <section className={classes.detail}>
      {props.meetupData.map((meetup) => (
        <>
          <img src={meetup.image} alt={meetup.title} />
          <h1>{meetup.title}</h1>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </>
      ))}
    </section>
  );
};

export default MeetupDetails;
