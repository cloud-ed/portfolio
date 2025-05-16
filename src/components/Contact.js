import ContactsIcon from "@mui/icons-material/Contacts";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ContactsIcon
            className="mx-auto inline-block mb-4"
            fontSize="large"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Feel free to reach out to me on any of the following socials. I'm
            always looking for new opportunities to learn and excited to further
            my career.
          </p>
        </div>
        <div className="title-font font-large">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="github"
          >
            <GitHubIcon size="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
