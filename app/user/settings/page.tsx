"use client";

import React from "react";
import { User, Mail, Shield, Save } from "lucide-react";

export default function SettingsPage() {
    const [user, setUser] = React.useState<any>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isSaving, setIsSaving] = React.useState(false);

    React.useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (data.user) setUser(data.user);
            } catch (error) {
                console.error("Failed to fetch user", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUser();
    }, []);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;

        try {
            const res = await fetch("/api/auth/me", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            if (res.ok) {
                alert("Profile updated successfully!");
                const data = await res.json();
                setUser(data.user);
            } else {
                alert("Failed to update profile.");
            }
        } catch (error) {
            console.error("Update failed", error);
            alert("Something went wrong.");
        } finally {
            setIsSaving(false);
        }
    };

    const [showPasswordForm, setShowPasswordForm] = React.useState(false);

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const currentPassword = (form.elements.namedItem("currentPassword") as HTMLInputElement).value;
        const newPassword = (form.elements.namedItem("newPassword") as HTMLInputElement).value;

        try {
            const res = await fetch("/api/auth/password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            const data = await res.json();
            if (res.ok) {
                alert("Password changed successfully!");
                setShowPasswordForm(false);
                form.reset();
            } else {
                alert(data.error || "Failed to change password");
            }
        } catch (error) {
            console.error("Password change failed", error);
            alert("Something went wrong");
        }
    };

    if (isLoading) return <div className="p-8 text-center">Loading settings...</div>;

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Profile Form (existing code) */}
            <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {/* ... existing profile form content ... */}
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-800">Profile Settings</h2>
                    <p className="text-sm text-slate-500">Manage your account information and preferences.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-400">
                            {user?.name?.[0] || "U"}
                        </div>
                        <div>
                            <button type="button" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                                Change Avatar
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-full space-y-2">
                            <label className="text-sm font-bold text-slate-700">Full Name</label>
                            <div className="relative">
                                <User className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={user?.name || ""}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:bg-white transition-all text-sm font-medium"
                                />
                            </div>
                        </div>

                        <div className="col-span-full space-y-2">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <div className="relative">
                                <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    name="email"
                                    type="email"
                                    defaultValue={user?.email || ""}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:bg-white transition-all text-sm font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-[#ea580c] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-100 disabled:opacity-50"
                        >
                            <Save className="w-4 h-4" />
                            {isSaving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            </form>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-800">Security</h2>
                </div>
                <div className="p-8">
                    {!showPasswordForm ? (
                        <button
                            onClick={() => setShowPasswordForm(true)}
                            className="text-slate-600 font-bold border border-slate-200 px-4 py-2 rounded-lg hover:border-[#ea580c] hover:text-[#ea580c] transition-all flex items-center gap-2"
                        >
                            <Shield className="w-4 h-4" />
                            Change Password
                        </button>
                    ) : (
                        <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md animate-in fade-in slide-in-from-top-2">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Current Password</label>
                                <input
                                    name="currentPassword"
                                    type="password"
                                    required
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">New Password</label>
                                <input
                                    name="newPassword"
                                    type="password"
                                    required
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                                    Update Password
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordForm(false)}
                                    className="text-slate-500 font-bold px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
