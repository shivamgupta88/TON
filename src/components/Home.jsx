
import React, { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [active, setActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState(90); // 1 minute 30 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setActive((prevActive) => !prevActive);
          return active ? 30 : 90; // Switch between 30s break and 90s active period
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [active]);

  function getRandomPosition() {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const newTop = Math.floor(Math.random() * (screenHeight - 50)) + 'px'; // 50 is the height of the button
    const newLeft = Math.floor(Math.random() * (screenWidth - 50)) + 'px'; // 50 is the width of the button
    return { top: newTop, left: newLeft };
  }

  function handleClick() {
    if (active) {
      setCount(count + 1);
      setPosition(getRandomPosition());
      console.log("count is ", count);
    }
  }

  return (
    <div className="bg-[#020C1D] text-white p-4 flex flex-col items-center min-h-screen relative">
      <div className="flex justify-between items-center w-full mb-4">
        <div className="leading-none">
          <div className="text-[#8696BB] text-sm text-center">Hello,</div>
          <div className="flex items-center justify-center">
            <div className="text-[#FFFFFF] font-bold text-lg mr-1">
              Hi James
            </div>
            <img
              className="w-5 h-5"
              src="../../icons/crown.png"
              alt="crown-img"
            />
          </div>
        </div>
        <div>
          <img className="w-10 h-10 rounded-full" src="../../icons/mask__beam.png" alt="" />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="mr-3">
          <img src="../../icons/coin.png" alt="" />
        </div>
        <div className="text-xl font-bold leading-none">
          10,667
        </div>
      </div>

      {active ? (
        <button
          onClick={handleClick}
          style={{ position: 'absolute', top: position.top, left: position.left }}
          className="transform -translate-x-1/2 -translate-y-1/2"
        >
          <img src="../../icons/coin.png" alt="coin button" />
        </button>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Break time! Next round starts in {timeLeft} seconds.
        </div>
      )}

      <div className="flex-grow"></div>

      <div className="w-full">
        <div className="bg-custom-gradient p-3 rounded-lg mb-4 w-full text-center">
          <div className="bg-custom-gradient border-2 w-24 rounded-lg p-1 text-center mb-2 mx-auto">
            VIP
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-center">
              Upgrade to VIP for an enhanced NTP experience
            </div>
            <div>
              <img className="w-6 h-6" src="../../icons/crownlog.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full bg-[#020C1D] py-2">
          <div className="flex flex-col items-center text-sm">
            <img className="w-6 h-6 mb-1" src="../../icons/Home.png" alt="" />
            Home
          </div>
          <div className="flex flex-col items-center text-sm">
            <img className="w-6 h-6 mb-1" src="../../icons/Rocket.png" alt="" />
            Explore
          </div>
          <div className="flex flex-col items-center text-sm">
            <img className="w-6 h-6 mb-1" src="../../icons/Profile.png" alt="" />
            Profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
