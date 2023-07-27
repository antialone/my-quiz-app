import videoHomePage from "../../assets/video-homepage.mp4";
function HomePage(props) {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content relative p-[200px] w-[50%] flex flex-col gap-[20px]">
        <div className="font-semibold text-[50px]">
          There's a better way to ask
        </div>
        <div className="text-[25px]">
          You don't want to make a boring form.
          And your audience won't answer one.
          Create a type form instead-and make everyone happy
        </div>
        <div className="h-[40px] text-[25px]">
          <button>Get's stated. it's free</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
