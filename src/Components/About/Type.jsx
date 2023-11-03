import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Full Stack Web Engineer", 
            "Backend Developer", 
            "Data Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
