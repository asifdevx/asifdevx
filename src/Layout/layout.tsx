import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";


const Layout = (children:any) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div >
      <Header/>
      <main className="">

        {children}
      </main>
     <Footer/>
    </div>
  );
};

export default Layout;
