import spotifyLogo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
const HomeComponent = () => {
  return (
    <div className="h-full w-full flex">
      <div className=" bg-black w-1/5 flex  flex-col justify-between ">
        <div>
          <div className="p-5">
            <img src={spotifyLogo} alt="Spotify Logo" width={132} />
          </div>
          <IconText iconName={"ion:home"} displayText={"Home"} active />
          <IconText
            iconName={"majesticons:search-line"}
            displayText={"Search"}
          />
          <IconText
            iconName={"clarity:library-solid"}
            displayText={"Library"}
          />
          <div className="mt-10">
            <IconText
              iconName={"ph:plus-fill"}
              displayText={"Create Playlist "}
            />
            <div>
              <IconText
                iconName={"ph:heart-fill"}
                displayText={"Liked Songs "}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="legal text-gray-400 flex flex-col text-xs  ml-3 mb-10 cursor-pointer">
            <div className="flex mb-3 gap-4" >
              <div className="whitespace-nowrap hover:text-white ">Legal</div>
              <div className="whitespace-nowrap hover:text-white">Privacy Center</div>
              <div className="whitespace-nowrap hover:text-white">Privacy Policy</div>
            </div>
            <div className="flex mb-3 gap-4">
              <div className="whitespace-nowrap hover:text-white">Cookies</div>
              <div className="whitespace-nowrap hover:text-white">About Ads</div>
            </div>
            <div className="flex mb-3 ">
              <div className="whitespace-nowrap hover:text-white">Cookies</div>
            </div>
          </div>
          <div className="languageButton border-2 border-gray-400 w-min ml-6 text-white rounded-full flex px-3 py-2 items-center gap-2 hover:border-white mb-3 ">
            <Icon icon="tabler:world" fontSize={20}></Icon> English
          </div>{" "}
        </div>
      </div>

      <div className="text-red-400">HIII</div>
    </div>
  );
};
export default HomeComponent;
