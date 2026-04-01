import "../globals.css";
import "./sign-up.css";
import Image from 'next/image';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="sign-up-layout">
            <div className="sign-up-layout-left">
                {children}
            </div>
            <div className="sign-up-layout-right">
                <div className="img-container">
                    <Image
                        src="/assets/images/sign-up/sign-up-right.png"
                        alt="screen du produit"
                        fill
                        className="img"
                    />
                </div>
            </div>
        </div>
    );
}
