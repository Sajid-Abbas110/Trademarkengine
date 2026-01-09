import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function GuaranteePage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Our Guarantee</h1>
                <p className="text-xl text-slate-600 mb-8">We stand behind our services with a 100% satisfaction guarantee.</p>
                <Link href="/" className="text-[#ea580c] font-bold hover:underline">Back to Home</Link>
            </main>
            <Footer />
        </div>
    );
}
