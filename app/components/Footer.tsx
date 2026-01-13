import Link from "next/link";
import { Phone, Facebook, Linkedin, Twitter, CreditCard } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Contact Column */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8 group">
                            <Logo textClassName="text-white" />
                        </Link>

                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-2">Any Questions?</h3>
                            <p className="text-slate-400 text-sm">
                                Use the Live Chat for any immediate assistance.
                            </p>
                        </div>

                        <a href="tel:03142281115" className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-4 inline-flex hover:bg-[#334155] transition-colors">
                            <div className="bg-[#334155] p-2 rounded-md">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Call Us</p>
                                <p className="font-bold text-lg">03142281115</p>
                                <p className="text-xs text-slate-400">Mon-Fri 9AM-6PM</p>
                            </div>
                        </a>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/registration" className="font-semibold hover:text-[#ea580c] transition-colors">Trademark Registration</Link></li>
                            <li><Link href="/comprehensive-search" className="font-semibold hover:text-[#ea580c] transition-colors">Comprehensive Search</Link></li>
                            <li><Link href="/monitoring" className="font-semibold hover:text-[#ea580c] transition-colors">Trademark Monitoring</Link></li>
                            <li><Link href="/free-search" className="font-semibold hover:text-[#ea580c] transition-colors">Free Trademark Search</Link></li>
                            <li><Link href="/copyright" className="font-semibold hover:text-[#ea580c] transition-colors">Copyright Registration</Link></li>
                            <li><Link href="/office-action" className="font-semibold hover:text-[#ea580c] transition-colors">Office Action Response</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">Company</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/about" className="font-semibold hover:text-[#ea580c] transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="font-semibold hover:text-[#ea580c] transition-colors">Careers</Link></li>
                            <li><Link href="/guarantee" className="font-semibold hover:text-[#ea580c] transition-colors">Our Guarantee</Link></li>
                            <li><Link href="/privacy-settings" className="font-semibold hover:text-[#ea580c] transition-colors">Privacy Settings</Link></li>
                        </ul>
                    </div>

                    {/* Connect With Us Column */}
                    <div>
                        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">Connect With Us</h3>
                        <ul className="flex flex-col gap-4 mb-12">
                            <li><Link href="/contact" className="font-semibold hover:text-[#ea580c] transition-colors">Contact Us</Link></li>
                            <li><Link href="/blog" className="font-semibold hover:text-[#ea580c] transition-colors">Blog</Link></li>
                        </ul>

                        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-[#ea580c] transition-colors"><Linkedin className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-[#ea580c] transition-colors">
                                {/* X Icon approximation */}
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </Link>
                            <Link href="#" className="hover:text-[#ea580c] transition-colors"><Facebook className="w-6 h-6" /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="max-w-2xl">
                        <h4 className="font-bold mb-2">Privacy Policy</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Trademark Engine provides information and software only. Trademark Engine is not a "lawyer referral service" and does not provide legal advice or participate in any legal representation. Use of Trademark Engine is subject to our <Link href="/terms" className="text-[#ea580c] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#ea580c] hover:underline">Privacy Policy</Link>.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        {/* Payment Icons */}
                        <div className="flex gap-2 text-slate-400">
                            {/* Using simple text/icon representation as we don't have SVGs handy for all cards */}
                            <span className="font-bold text-white italic text-lg tracking-tighter">VISA</span>
                            <div className="w-8 h-5 bg-[#eb001b] rounded-sm flex items-center justify-center overflow-hidden relative">
                                <div className="w-4 h-4 bg-[#f79e1b] rounded-full absolute left-1 opacity-80"></div>
                                <div className="w-4 h-4 bg-[#eb001b] rounded-full absolute right-1"></div>
                            </div>
                            <span className="font-bold text-blue-400 text-sm border border-blue-400 px-1 rounded">AMEX</span>
                            <span className="font-bold text-orange-500 text-sm">DISCOVER</span>
                        </div>
                        <p className="text-slate-500 text-xs">
                            &copy; Copyright 2025 Trademark Engine, LLC
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
