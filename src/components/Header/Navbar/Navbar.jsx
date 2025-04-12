import { useEffect, useRef, useState } from 'react';
import GitHubButton from '../../Global/GitHubButton';
import gsap from 'gsap';

function Navbar() {
  const [openBar, setOpenBar] = useState(false);

  const mobileNavbar = useRef(null);
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const experience = useRef(null);
  const about = useRef(null);
  const gitBtn = useRef(null);

  useEffect(() => {
    if (openBar) {
      gsap.to(mobileNavbar.current, {
        translateX: '0%',
        duration: 0.7,
        ease: 'expo.inOut',
        opacity: 1,
        onComplete: () => {
          gsap.to(
            [
              home.current,
              skills.current,
              projects.current,
              experience.current,
              about.current,
              gitBtn.current,
            ],
            {
              translateX: '0%',
              opacity: 1,
              display: 'flex',
              duration: 0.6,
              ease: 'expo.out',
              stagger: 0.1,
            }
          );
        },
      });
    } else {
      gsap.to(
        [
          gitBtn.current,
          about.current,
          experience.current,
          projects.current,
          skills.current,
          home.current,
        ],
        {
          translateX: '50%',
          opacity: 0,
          duration: 0.5,
          ease: 'expo.in',
          stagger: 0.1,
          onComplete: () => {
            gsap.to(mobileNavbar.current, {
              translateX: '100%',
              duration: 0.7,
              ease: 'expo.inOut',
            });
          },
        }
      );
    }
  }, [openBar]);

  return (
    <nav className="flex justify-between items-center px-4 py-4 h-20 relative">
      <h1 className="inline-block text-2xl font-black">SHARIF</h1>

      <ul className="nav-links hidden gap-4 md:flex items-center">
        <li className="nav-link">
          <a href="#">HOME</a>
        </li>
        <li className="nav-link">
          <a href="#">SKILLS</a>
        </li>
        <li className="nav-link">
          <a href="#">PROJECTS</a>
        </li>
        <li className="nav-link">
          <a href="#">EXPERIENCE</a>
        </li>
        <li className="nav-link">
          <a href="#">ABOUT US</a>
        </li>
        <li className="nav-link">
          <GitHubButton text="Hire Me" />
        </li>
      </ul>

      <svg
        className="md:hidden scale-125 cursor-pointer"
        onClick={() => setOpenBar((prev) => !prev)}
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z"
          fill="#ffffff"
        />
      </svg>

      <ul
        ref={mobileNavbar}
        className="mobile-navbar absolute top-0 right-0 h-screen md:hidden flex flex-col items-center gap-6 justify-center z-50 w-[75%] backdrop-blur-[16px] backdrop-saturate-[180%] bg-[rgba(0,0,0,0.9)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] translate-x-full"
      >
        <li
          ref={home}
          className="nav-link text-2xl p-4 translate-x-[50%] opacity-0"
        >
          <a href="#">HOME</a>
        </li>
        <li
          ref={skills}
          className="nav-link text-2xl p-4 translate-x-[50%] opacity-0"
        >
          <a href="#">SKILLS</a>
        </li>
        <li
          ref={projects}
          className="nav-link text-2xl p-4 translate-x-[50%] opacity-0"
        >
          <a href="#">PROJECTS</a>
        </li>
        <li
          ref={experience}
          className="nav-link text-2xl p-4 translate-x-[50%] opacity-0"
        >
          <a href="#">EXPERIENCE</a>
        </li>
        <li
          ref={about}
          className="nav-link text-2xl p-4 translate-x-[50%] opacity-0"
        >
          <a href="#">ABOUT US</a>
        </li>
        <li ref={gitBtn} className="nav-link p-4 translate-x-[50%] opacity-0">
          <GitHubButton text="Hire Me" />
        </li>
        <li className="nav-link absolute top-10 right-4 translate-y-[50%]">
          <a href="#">
            <svg
              className="scale-125"
              onClick={() => setOpenBar((prev) => !prev)}
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z"
                fill="#ffffff"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
