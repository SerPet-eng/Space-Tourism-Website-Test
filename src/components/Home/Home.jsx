import Button from '../Button';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-description">
          <p className="home-text">So, you want to travel to</p>
          <p className="home-title">Space</p>
          <p className="home-paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Button />
      </div>
    </>
  );
}
