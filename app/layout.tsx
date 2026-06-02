import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Տիգրան և Նելլի",
  description: "Տիգրան և Նելլի",
  openGraph: {
    title: "Տիգրանի և Նելլիի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://tigran-nelli.vercel.app",
    siteName: "Տիգրան և Նելլի",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
