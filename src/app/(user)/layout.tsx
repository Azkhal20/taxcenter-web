import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
