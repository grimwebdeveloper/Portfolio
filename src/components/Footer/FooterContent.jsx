function FooterContent() {
  return (
    <div className="flex flex-col items-center lg:flex-row md:py-8 lg:py-16 py-6">
      <div className="flex items-center gap-6 mb-4">
        <img
          src="https://avatars.githubusercontent.com/u/93424020?v=4"
          alt="user-pic"
          className="rounded-full w-[20vw] md:w-[153.6px]"
        />
        <h3 className="flex flex-col text-lg font-semibold leading-none font11vw">
          <span>LET'S</span>
          <span>CONNECT!</span>
        </h3>
      </div>

      <div className="space-y-4 flex flex-wrap justify-between gap-x-4 lg:gap-x-6 lg:flex-col lg:ml-auto">
        <div id="email" className="text-left sm:min-w-56 lg:max-w-fit">
          <div className="font-medium text-gray-400 italic text-lg">
            Email Address
          </div>
          <div>
            <a
              href="mailto:msijmpshaan369@gmail.com"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              msijmpshaan369@gmail.com
            </a>
          </div>
        </div>

        <div id="contact" className="text-left sm:min-w-56 lg:max-w-fit">
          <div className="font-medium text-gray-400 italic text-lg">Contact</div>
          <div>
            <a
              href="tel:+919931377054"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              +91 9931377054
            </a>
          </div>
        </div>

        <div id="linkedin" className="text-left sm:min-w-56 lg:max-w-fit">
          <div className="font-medium text-gray-400 italic text-lg">LinkedIn</div>
          <div>
            <a
              href="https://www.linkedin.com/in/grimwebdeveloper/"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              @grimwebdeveloper
            </a>
          </div>
        </div>

        <div id="github" className="text-left sm:min-w-56 lg:max-w-fit">
          <div className="font-medium text-gray-400 italic text-lg">GitHub</div>
          <div>
            <a
              href="https://github.com/grimwebdeveloper"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              @grimwebdeveloper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
