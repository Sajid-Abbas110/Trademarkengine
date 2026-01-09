"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyrightFAQList from "../components/copyright-faqs/CopyrightFAQList";

export default function CopyrightFAQsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <CopyrightFAQList />
            </main>
            <Footer />
        </div>
    );
}
