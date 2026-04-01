import Cta from "@/components/ui/cta/Cta";
import "../globals.css";
import "./sign-up.css";
import Image from 'next/image';
import Link from 'next/link';
import FieldPlaceHolderTop from "@/components/ui/field-placeholder-top/FieldPlaceHolderTop";
import FieldPassword from "@/components/ui/field-password/FieldPassword";

export default function SignUp() {
  return (
    <>
      <Image
        src="/assets/images/Favicon.svg"
        alt="Logo"
        width={32}
        height={32}
        className="logo"
      />
      <form className="form-container">
        <h3>Créer un compte</h3>
        <div className="alternative-logins-container">
          <Link href="/sign-in" className="cta-connexion-alternative-google-apple h6">
            <Image
              src="/assets/images/sign-up/google.svg"
              alt="Logo Google"
              width={20}
              height={20}
            />
            <span className="cta-connexion-alternative-link">Google</span>
          </Link>
          <Link href="/sign-in" className="cta-connexion-alternative-google-apple h6">
            <Image
              src="/assets/images/sign-up/apple.svg"
              alt="Logo Apple"
              width={16}
              height={20}
            />
            <span className="cta-connexion-alternative-link">Apple</span>
          </Link>
        </div>
        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text body-s">Ou</span>
          <div className="divider-line"></div>
        </div>
        <div className="form-inputs-container">
          <div className="form-double-input-line-container">
            <FieldPlaceHolderTop className="body-s">Votre prénom</FieldPlaceHolderTop>
            <FieldPlaceHolderTop className="body-s">Votre nom</FieldPlaceHolderTop>
          </div>
          <FieldPlaceHolderTop className="body-s">Votre email</FieldPlaceHolderTop>
          <FieldPassword className="body-s">Choisissez un mot de passe</FieldPassword>
        </div>
        <Cta color="black" size="m" className="w-full">Je m’inscris</Cta>
      </form>
      <Link href="/sign-in" className="cta-connexion-alternative h7">
        <span className="text-dark-grey">Déjà un compte ?</span>
        <span className="cta-connexion-alternative-link">Connectez-vous</span>
      </Link>
    </>
  );
}
