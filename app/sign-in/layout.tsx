import "../global.css";
import "./sign-in.css";
import Image from 'next/image';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="sign-in-layout">
            <div className="sign-in-layout-left">
                {children}
            </div>
            <div className="sign-in-layout-right">
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
