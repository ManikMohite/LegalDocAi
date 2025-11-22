import "./globals.css";           // TAILWIND
 // CUSTOM CSS
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <Providers>
       <Navbar/>
      {children}
       <Footer/>
      
       </Providers>
        
     
        {/* Your custom script */}
  

      </body>
    </html>
  );
}
