"use client";

import React from "react";
import {
    Settings as SettingsIcon,
    Bell,
    Shield,
    Database,
    Mail,
    Save,
    User,
    Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminSettings() {
    const [activeTab, setActiveTab] = React.useState("General");
    const [platformName, setPlatformName] = React.useState("TradeMarkEngine");
    const [supportEmail, setSupportEmail] = React.useState("support@trademarkengine.com");
    const [maintenanceMode, setMaintenanceMode] = React.useState(false);
    const [isSaving, setIsSaving] = React.useState(false);

    // Security state
    const [twoFactor, setTwoFactor] = React.useState(true);

    // Notification state
    const [notifSettings, setNotifSettings] = React.useState({
        orders: true,
        critical: true,
        weekly: false
    });

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            alert(`${activeTab} settings saved successfully!`);
        }, 800);
    };

    const sidebarItems = [
        { name: "General", icon: SettingsIcon },
        { name: "Account Security", icon: Shield },
        { name: "Notifications", icon: Bell },
        { name: "Database", icon: Database },
        { name: "Email Templates", icon: Mail },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "General":
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Platform Name</label>
                                <input
                                    type="text"
                                    value={platformName}
                                    onChange={(e) => setPlatformName(e.target.value)}
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support Email</label>
                                <input
                                    type="email"
                                    value={supportEmail}
                                    onChange={(e) => setSupportEmail(e.target.value)}
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-slate-800">Maintenance Mode</h4>
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div>
                                    <p className="text-sm font-bold text-slate-700">Disable registration forms</p>
                                    <p className="text-xs text-slate-500">Temporarily stop accepting new service requests</p>
                                </div>
                                <div
                                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                                    className={cn(
                                        "w-12 h-6 rounded-full relative cursor-pointer transition-colors",
                                        maintenanceMode ? "bg-[#ea580c]" : "bg-slate-200"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                                        maintenanceMode ? "left-7" : "left-1"
                                    )}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Account Security":
                return (
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-slate-800">Change Admin Password</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="password" placeholder="Current Password" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ea580c]" />
                                <input type="password" placeholder="New Password" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ea580c]" />
                            </div>
                        </div>
                        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500 rounded-lg text-white">
                                    <Lock className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-blue-900">Two-Factor Authentication</p>
                                    <p className="text-xs text-blue-700">Adds an extra layer of security to your account</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setTwoFactor(!twoFactor)}
                                className={cn("px-4 py-1.5 rounded-lg text-xs font-bold transition-all", twoFactor ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-blue-600 text-white hover:bg-blue-700")}
                            >
                                {twoFactor ? "Disable" : "Enable"}
                            </button>
                        </div>
                    </div>
                );
            case "Notifications":
                return (
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-slate-800">Email Alerts</h4>
                        <div className="space-y-3">
                            {[
                                { id: 'orders', label: 'New Order Notifications', desc: 'Receive an email for every new service request' },
                                { id: 'critical', label: 'System Critical Alerts', desc: 'Get notified about server issues or database errors' },
                                { id: 'weekly', label: 'Weekly Performance Summary', desc: 'A summarized report of all weekly activities' },
                            ].map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div>
                                        <p className="text-sm font-bold text-slate-700">{item.label}</p>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                    <div
                                        onClick={() => setNotifSettings(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof prev] }))}
                                        className={cn(
                                            "w-12 h-6 rounded-full relative cursor-pointer transition-colors",
                                            notifSettings[item.id as keyof typeof notifSettings] ? "bg-[#ea580c]" : "bg-slate-200"
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                                            notifSettings[item.id as keyof typeof notifSettings] ? "left-7" : "left-1"
                                        )}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "Database":
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                                <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                <p className="text-xs font-bold text-green-800 uppercase tracking-widest">Health</p>
                                <p className="text-xl font-bold text-green-900">Excellent</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                                <User className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                <p className="text-xs font-bold text-blue-800 uppercase tracking-widest">Size</p>
                                <p className="text-xl font-bold text-blue-900">12.4 MB</p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                                <Lock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                <p className="text-xs font-bold text-orange-800 uppercase tracking-widest">Backups</p>
                                <p className="text-xl font-bold text-orange-900">Daily</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => alert("Mirror backup started...")} className="flex-1 py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-900 transition-all">Manual Backup Now</button>
                            <button onClick={() => alert("Integrity check in progress...")} className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">Integrity Check</button>
                        </div>
                    </div>
                );
            case "Email Templates":
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h4 className="text-sm font-bold text-slate-800">System Templates</h4>
                            <button onClick={() => alert("Creating new template...")} className="text-[#ea580c] font-bold text-xs hover:underline">+ New Template</button>
                        </div>
                        <div className="space-y-3">
                            {[
                                { name: 'Welcome Email', trigger: 'User Registration' },
                                { name: 'Order Confirmation', trigger: 'New Service Request' },
                                { name: 'Invoice Generated', trigger: 'Payment Step Completion' },
                                { name: 'Password Reset', trigger: 'Forgot Password' },
                            ].map((tmpl, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-all group">
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{tmpl.name}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Trigger: {tmpl.trigger}</p>
                                    </div>
                                    <button onClick={() => alert("Email Template Editor coming soon!")} className="p-2 text-slate-400 hover:text-[#ea580c] hover:bg-orange-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                        <SettingsIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Portal Settings</h2>
                    <p className="text-slate-500 text-sm">Configure system preferences and admin notifications</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-100 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    System Live
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1 space-y-2">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                                activeTab === item.name
                                    ? "bg-[#ea580c] text-white shadow-lg shadow-orange-100 translate-x-1"
                                    : "text-slate-500 hover:bg-white hover:text-slate-800"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                            {activeTab === item.name && <ChevronRight className="w-4 h-4 ml-auto" />}
                        </button>
                    ))}
                </div>

                {/* Main Settings Panel */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[500px] flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-800">{activeTab}</h3>
                            <p className="text-xs text-slate-400 font-medium">Last modified: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="p-8 flex-1">
                            {renderContent()}
                        </div>
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-2.5 px-10 rounded-xl shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                            >
                                <Save className="w-4 h-4" />
                                {isSaving ? "Saving Changes..." : "Apply Settings"}
                            </button>
                        </div>
                    </div>

                    <div className="bg-red-50 rounded-2xl border border-red-100 p-8 flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-bold text-red-800">Danger Zone</h4>
                            <p className="text-xs text-red-600 font-medium">The following actions are destructive and cannot be undone.</p>
                        </div>
                        <button
                            onClick={() => {
                                if (confirm("Are you sure you want to reset database stats? This action is permanent.")) {
                                    alert("Database statistics have been reset.");
                                }
                            }}
                            className="px-6 py-2 bg-white text-red-600 border border-red-200 text-xs font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                        >
                            Reset Database Stats
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Additional import needed for ChevronRight
import { ChevronRight } from "lucide-react";
