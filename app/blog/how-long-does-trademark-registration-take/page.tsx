"use client";

import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function TimelinePage() {
  const post = {
    title: "How Long Does Trademark Registration Take? — Timeline and Stages",
    date: "August 8, 2025",
    category: "Trademark",
    readTime: "6 min read",
    author: "Alexis Kenworthy",
    image: "/hero.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <section className="relative py-12 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-sm">{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="relative h-96 bg-gray-200 overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Many business owners ask: how long does it take to get a trademark registered? The timeline depends on the jurisdiction,
            the accuracy of the application, whether there are objections or oppositions, and whether the filing is based on use in commerce
            or intent-to-use. Below is a practical guide to the typical stages and what can speed or slow the process.
          </p>

          <h2>What to Do Before Filing</h2>
          <p>
            Do a comprehensive trademark search to identify prior marks that could block registration. Prepare a distinctive,
            registrable mark and identify the correct classes of goods/services. Decide whether you'll file based on actual use in commerce
            or an intent-to-use basis.
          </p>

          <h2>Trademark Registration Steps & Typical Timing</h2>
          <ol>
            <li>
              <strong>Comprehensive Search (1–2 weeks):</strong> Searching the USPTO and other databases helps avoid conflicts. Using counsel
              or professional search tools yields a more thorough result.
            </li>
            <li>
              <strong>Application Preparation & Filing (1–2 weeks):</strong> Drafting goods/services descriptions and selecting the correct classes.
            </li>
            <li>
              <strong>USPTO Examination (3–6 months):</strong> After filing, the USPTO assigns an examining attorney who reviews the application. The examiner
              may issue an office action requiring changes or clarifications — responding promptly reduces delays.
            </li>
            <li>
              <strong>Publication (if approved) (1 month):</strong> If the examiner approves the mark, it is published in the Official Gazette for opposition.
            </li>
            <li>
              <strong>Opposition Period (2–3 months):</strong> Third parties have a window (typically 30–60 days) to oppose the registration; oppositions can extend the
              timeline considerably if contested.
            </li>
            <li>
              <strong>Registration or Statement of Use (if intent-to-use) (3–8+ months):</strong> For intent-to-use filings, you must later file a Statement of Use showing
              actual commerce; once accepted, registration follows.
            </li>
          </ol>

          <h2>Common Issues That Delay Registration</h2>
          <ul>
            <li>Office actions for descriptiveness or likelihood of confusion</li>
            <li>Incomplete or inaccurate application information</li>
            <li>Oppositions filed during publication</li>
            <li>Slow responses from applicants or third parties</li>
          </ul>

          <h2>Costs to Expect</h2>
          <p>
            USPTO filing fees vary depending on the filing option and number of classes. Expect government filing charges per class,
            plus attorney fees if you use counsel, and potential additional costs for oppositions or legal representation.
          </p>

          <h2>Bottom Line</h2>
          <p>
            A simple, uncontested application can register in roughly 8–14 months in the U.S., while intent-to-use filings or matters with
            office actions and oppositions can take 1–3+ years. Preparation, accurate filings, and quick responses significantly shorten the timeline.
          </p>

          <h2>Frequently Asked Questions</h2>
          <h3>Can Your Trademark Be Expedited?</h3>
          <p>In some cases, priority or special processing options exist, but they are limited. Fast-track options are rare and typically apply only to
            certain urgent situations.</p>

          <h3>What Happens If Your Application Is Rejected?</h3>
          <p>If rejected, you can respond to office actions, amend claims, appeal, or consider refiling. Consulting an experienced attorney is recommended.</p>

          <h3>How Long Does a USPTO Opposition Take?</h3>
          <p>Opposition proceedings before the TTAB can take many months to years depending on the complexity of the dispute.</p>

          <p><em>Originally published on August 8, 2025; last edited on December 29, 2025.</em></p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-semibold">Share this article:</span>
            <div className="flex gap-3">
              <button className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
