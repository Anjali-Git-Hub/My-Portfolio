import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
function Socials() {
  const socialRef = useRef(null);
  useEffect(() => {
    const socialDiv = socialRef.current;
    const tl = gsap.timeline();
    gsap.set(socialDiv, { y: "100vh" });

    tl.to(socialDiv, {
      duration: 2,
      y: 0,
      ease: "power2.inOut",
    });
    // Cleanup GSAP animation
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={socialRef} className="socials">
      <Link style={{ color: "black" }} to="https://twitter.com/codecwriter" target="_blank">
        <FaSquareXTwitter />
      </Link>

      <Link style={{ color: "black" }} to="https://www.linkedin.com/in/anjali-0352b1248/" target="_blank">
        <FaLinkedin />
      </Link>

      <Link style={{ color: "black" }} to="https://github.com/Anjali-Git-Hub" target="_blank">
        <FaSquareGithub />
      </Link>

      <div className="line"></div>
    </div>
  );
}
export default Socials;
