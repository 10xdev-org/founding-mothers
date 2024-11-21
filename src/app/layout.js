import Screensaver from "./components/Screensaver";
import { ScreensaverProvider } from "./ScreensaverContext";
import "./globals.css";

export const metadata = {
  title: "Founding Mothers",
  description: "Learn about founding mothers of our constitution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScreensaverProvider>
          <Screensaver />
          {children}
        </ScreensaverProvider>
      </body>
    </html>
  );
}
