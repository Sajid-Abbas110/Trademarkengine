"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQList from "../components/trademark-faqs/FAQList";

export default function TrademarkFAQsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <FAQList />
            </main>
            <Footer />
        </div>
    );
}
