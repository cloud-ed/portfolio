import Button from '@mui/material/Button';

export default function About() {
  return (
    <div id='about'>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm clouded.
            <br className="hidden lg:inline-block" />I love to learn new things and build functional solutions.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a young developer building a career in web development and software engineering. I'm always looking for ways to improve my work so feel free to give me some feedback or tips!
          </p>
          <div className="flex justify-center">
            <Button color="inherit" href='#contact'>Get In Touch</Button>
            <Button color="inherit" href='#projects'>See My Past Work</Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./logo512.png"
          />
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./logo512.png"
          />
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./logo512.png"
          />
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./logo512.png"
          />
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./logo512.png"
          />
        </div>
      </div>
    </div>
  );
}
