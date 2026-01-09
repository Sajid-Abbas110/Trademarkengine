import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function PrivacySettingsPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Privacy Settings</h1>
                <p className="text-xl text-slate-600 mb-8">Manage your data and privacy preferences.</p>
                <Link href="/" className="text-[#ea580c] font-bold hover:underline">Back to Home</Link>
            </main>
            <Footer />
        </div>
    );
}
