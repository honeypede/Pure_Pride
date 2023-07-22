import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.scss";
import Menu from "@/components/menu/Menu";

export const metadata = {
  title: "Pure Pride",
  description: "PurePride Super Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="w-full sticky top-0 z-[99999] bg-black bg-opacity-40 mb-7 backdrop-blur-xl items-center flex max-h-12 md:max-h-16">
            <Navbar />
          </div>

          <div className="flex">
            <div className="mt-20 lg:pb-64 pb-16 px-7 hidden md:block fixed top-0 left-0 h-full overflow-y-auto lg:w-64 md:w-52">
              <Menu />
            </div>
            <div className="contentContainer md:ml-52 lg:ml-64">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
