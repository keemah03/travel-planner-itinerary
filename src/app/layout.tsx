import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/layout/header";
import NavBar from "@/components/layout/navbar";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Travel Itinerary Website",
  description: "Track your travel itineraries with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="bg-neutral-300 mx-auto max-w-screen-2xl">
          <Header />

          <section className="w-full md:p-8 gap-10 flex justify-center">
            <NavBar />
            <div className="w-full">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
