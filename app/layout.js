import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.scss";
import Menu from "@/components/menu/Menu";

export const metadata = {
  title: "Pure Pride",
  description: "PurePride Super Admin Pannel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className=" w-full relative top-0 z-[99999] bg-black bg-opacity-40 mb-7 backdrop-blur-xl items-center flex max-h-12 md:max-h-16">
            <Navbar />
          </div>

          <div className="flex">
            <div className="menuContainer hidden md:block">
              <Menu />
            </div>
            <div className="contentContainer">{children}</div>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
