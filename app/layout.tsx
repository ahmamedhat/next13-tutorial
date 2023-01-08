import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <Head />
      </head>
      <body className="bg-black min-h-screen flex flex-col justify-between">
        <Header />
        <main className="min-h-[80vh] p-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
