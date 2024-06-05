import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
 

function Footer() {
  return (
    <div className="w-full py-8 flex justify-center bg-gradient-to-b from-transparent via-transparent to-white">
      <footer className="w-full max-w-7xl flex flex-col items-center gap-4 px-4 text-gray-600">
        <h1 className="font-semibold text-lg text-primary">Samanvith Reddy</h1>
        <nav className="flex gap-8">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#education" className="hover:text-primary">Education</a>
        </nav>
        <div className="flex gap-4">
          <a href={Bio.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FacebookIcon className="text-gray-600" /></a>
          <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><TwitterIcon className="text-gray-600" /></a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><LinkedInIcon className="text-gray-600" /></a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><InstagramIcon className="text-gray-600" /></a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2024 Samanvith Reddy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
