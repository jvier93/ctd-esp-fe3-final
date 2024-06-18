import { useAppContext } from "../Hooks/useAppContext";

const Footer = () => {
  const { appState } = useAppContext();

  const socialLinks = [
    {
      name: "Facebook",
      ico: "./images/ico-facebook.png",
      icoDark: "./images/ico-facebook.png",
    },
    {
      name: "Instagram",
      ico: "./images/ico-instagram.png",
      icoDark: "./images/ico-instagram.png",
    },
    {
      name: "TikTok",
      ico: "./images/ico-tiktok.png",
      icoDark: "./images/ico-tiktok-dark.png",
    },
  ];

  return (
    <footer className={` w-full   ${appState.theme === "dark" && "dark"}`}>
      <div className="mx-auto h-44 flex justify-between gap-40 items-center max-w-[1080px]">
        <div>
          <p className="pb-6">Social</p>
          <ul className="flex gap-2 ">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href="#">
                  <img
                    className="w-8"
                    src={appState.theme === "light" ? link.ico : link.icoDark}
                    alt={link.name}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-6">Contact us</p>
          <img
            className="w-8"
            src={"./images/ico-whatsapp.png"}
            alt="DH-logo"
          />
        </div>
        <div>
          <p className="pb-6">Powered by</p>
          <img
            className="w-44"
            src={`${
              appState.theme === "light"
                ? "./images/DH.png"
                : "./images/DH-dark.png"
            }`}
            alt="DH-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
