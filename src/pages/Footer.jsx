import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#1c2127] text-[#bed4e9] text-lg py-6">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:px-[4rem] px-[2rem] border-[#3373b0]/40">
        {/* Left Section - Website Name */}
        <div className="text-left flex-1">
          <h1 className="font-bold text-2xl text-[#e7f1fb]">TECHUTSAV&apos;25</h1>
          <p className="text-base text-[#bed4e9]">
            THIAGARAJAR COLLEGE OF ENGINEERING, MADURAI
          </p>
        </div>

        {/* Center - Copyright Section */}
        <div className="text-lg text-[#e7f1fb] py-2 pl-12">
          <p>© 2025. All rights reserved by TCE</p>
        </div>

        {/* Right - Social Media Links */}
        <div className="flex gap-6 flex-1 justify-end">
          <a href="https://www.linkedin.com/school/thiagarajar-college-of-engineering/">
            <img
              className="w-7 h-7"
              src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.instagram.com/tce_madurai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img className="w-7 h-7" src={instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/tceofficialpage">
            <img
              className="w-7 h-7"
              src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;