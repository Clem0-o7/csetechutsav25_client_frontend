import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#1c2127] text-[#bed4e9] text-base sm:text-lg py-6">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 sm:px-8 lg:px-16 text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <h1 className="font-bold text-xl sm:text-2xl text-[#e7f1fb]">INNOHACKS&apos;25</h1>
          <p className="text-sm sm:text-base">THIAGARAJAR COLLEGE OF ENGINEERING, MADURAI</p>
        </div>

        {/*Copyright Section */}
        <div className="mb-4 sm:mb-0 text-sm sm:text-base">
          <p>© 2025. All rights reserved by TCE</p>
        </div>

        {/*Social Media Links */}
        <div className="flex gap-5 sm:gap-6 justify-center sm:justify-end">
          <a href="https://www.linkedin.com/school/thiagarajar-college-of-engineering/">
            <img className="w-6 sm:w-7 h-6 sm:h-7" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/tce_madurai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img className="w-6 sm:w-7 h-6 sm:h-7" src={instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/tceofficialpage">
            <img className="w-6 sm:w-7 h-6 sm:h-7" src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;