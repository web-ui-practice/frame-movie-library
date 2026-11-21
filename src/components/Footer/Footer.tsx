import { TEXTS } from '../../constants/texts';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">{TEXTS.footer.about}</p>
      <p className="footer__text">{TEXTS.footer.ratings}</p>
    </footer>
  );
}

export default Footer;
