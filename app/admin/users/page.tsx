"use client";

import React, { useState } from "react";
import {
    Users,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Calendar,
    ExternalLink,
    Plus,
    ArrowUpDown,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function UserTracking() {
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeUser, setActiveUser] = useState<any | null>(null);
    const [isUpdating, setIsUpdating] = useState(false);

    // Modal states
    const [showContactUser, setShowContactUser] = useState<any | null>(null);
    const [contactMessage, setContactMessage] = useState("");
    const [profileUploadUser, setProfileUploadUser] = useState<any | null>(null);
    const [showAddUser, setShowAddUser] = useState(false);

    // Edit form state
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editRole, setEditRole] = useState("");

    // Create form state
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/users");
            const data = await res.json();
            if (data.users) {
                setUsers(data.users);
            }
        } catch (error) {
            console.error("Failed to fetch admin users", error);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        fetchUsers();
    }, []);

    const handleCreateUser = async () => {
        if (!newEmail || !newPassword) {
            alert("Email and Password are required");
            return;
        }

        setIsUpdating(true);
        try {
            const res = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newName,
                    email: newEmail,
                    password: newPassword
                })
            });
            const data = await res.json();

            if (res.ok) {
                setShowAddUser(false);
                setNewName("");
                setNewEmail("");
                setNewPassword("");
                fetchUsers();
            } else {
                alert(`Failed to create user: ${data.error || "Unknown error"}\n${data.details || ""}`);
            }
        } catch (error: any) {
            console.error("Error creating user", error);
            alert(`Error: ${error.message}`);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleUpdateUser = async () => {
        if (!activeUser) return;
        setIsUpdating(true);
        try {
            const res = await fetch(`/api/admin/users/${activeUser.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: editName,
                    email: editEmail,
                    role: editRole
                })
            });
            const data = await res.json();

            if (res.ok) {
                setActiveUser(null);
                fetchUsers();
            } else {
                alert(`Failed to update user: ${data.error || "Unknown error"}\n${data.details || ""}`);
            }
        } catch (error: any) {
            console.error("Error updating user", error);
            alert(`Error: ${error.message}`);
        } finally {
            setIsUpdating(false);
        }
    };

    const openEditModal = (user: any) => {
        setActiveUser(user);
        setEditName(user.name);
        setEditEmail(user.email);
        setEditRole(user.role);
    };

    const filteredUsers = users.filter((user: any) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">User Tracking</h2>
                    <p className="text-slate-500 text-sm">Manage and monitor all system users</p>
                </div>
                <button
                    onClick={() => setShowAddUser(true)}
                    className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Add New User
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search users by name or email..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#ea580c] focus:border-[#ea580c] outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors w-full md:w-auto">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors w-full md:w-auto">
                        <ArrowUpDown className="w-4 h-4" />
                        Sort
                    </button>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Orders</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                onClick={() => setProfileUploadUser(user)}
                                                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200 cursor-pointer hover:border-[#ea580c] transition-all"
                                            >
                                                {user.avatar}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-800">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                            user.status === "Active" ? "bg-green-100 text-green-700" :
                                                user.status === "Inactive" ? "bg-red-100 text-red-700" :
                                                    "bg-yellow-100 text-yellow-700"
                                        )}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{user.role}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                            {user.joined}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div>
                                            <span className="text-sm font-bold text-slate-700">{user.orders}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => setShowContactUser(user)}
                                                className="p-2 text-slate-400 hover:text-[#ea580c] hover:bg-orange-50 rounded-lg transition-all"
                                            >
                                                <Mail className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => openEditModal(user)}
                                                className="p-2 text-slate-400 hover:text-[#ea580c] hover:bg-orange-50 rounded-lg transition-all"
                                            >
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Edit User Modal */}
                {activeUser && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h3 className="text-xl font-bold text-slate-800">Edit User Account</h3>
                                <button
                                    onClick={() => setActiveUser(null)}
                                    className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-slate-500" />
                                </button>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Display Name</label>
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ea580c] outline-none text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            value={editEmail}
                                            onChange={(e) => setEditEmail(e.target.value)}
                                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ea580c] outline-none text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Account Role</label>
                                        <select
                                            value={editRole}
                                            onChange={(e) => setEditRole(e.target.value)}
                                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ea580c] outline-none text-sm font-medium"
                                        >
                                            <option value="client">Customer</option>
                                            <option value="admin">Administrator</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                                <button
                                    onClick={() => setActiveUser(null)}
                                    className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleUpdateUser}
                                    disabled={isUpdating}
                                    className="px-8 py-2 bg-[#ea580c] text-white font-bold rounded-xl shadow-lg hover:bg-[#c2410c] transition-all text-sm disabled:opacity-50"
                                >
                                    {isUpdating ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Client Modal */}
                {showContactUser && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-800">Contact Client</h3>
                                <button onClick={() => setShowContactUser(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <X className="w-6 h-6 text-slate-400" />
                                </button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Recipient</label>
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">
                                        {showContactUser.name} ({showContactUser.email})
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Subject</label>
                                    <input className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl mb-4 text-sm" defaultValue={`Update regarding your request`} />
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Message</label>
                                    <textarea
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] min-h-[150px] text-sm"
                                        placeholder="Type your email message..."
                                        value={contactMessage}
                                        onChange={(e) => setContactMessage(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                                <button
                                    onClick={() => setShowContactUser(null)}
                                    className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        alert(`Email sent successfully to ${showContactUser.email}`);
                                        setShowContactUser(null);
                                        setContactMessage("");
                                    }}
                                    className="px-8 py-2 bg-[#ea580c] text-white font-bold rounded-xl shadow-lg hover:bg-[#c2410c] transition-all text-sm"
                                >
                                    Send Email
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Profile Picture Upload Modal */}
                {profileUploadUser && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-800">Update Profile</h3>
                                <button onClick={() => setProfileUploadUser(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <X className="w-6 h-6 text-slate-400" />
                                </button>
                            </div>
                            <div className="p-8 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-3xl text-slate-400 font-bold border-4 border-slate-50 shadow-inner mb-6">
                                    {profileUploadUser.avatar}
                                </div>
                                <p className="text-sm text-slate-500 text-center mb-6">Click below to upload a new profile picture for <span className="font-bold text-slate-800">{profileUploadUser.name}</span></p>
                                <label className="w-full">
                                    <input type="file" className="hidden" onChange={(e) => {
                                        if (e.target.files?.[0]) {
                                            alert("Image selected: Upload simulation successful!");
                                            setProfileUploadUser(null);
                                        }
                                    }} />
                                    <div className="w-full py-3 bg-[#ea580c] text-white font-bold rounded-xl shadow-lg hover:bg-[#c2410c] transition-all text-sm text-center cursor-pointer">
                                        Choose New Photo
                                    </div>
                                </label>
                                <p className="mt-4 text-[10px] text-slate-400 italic font-medium">JPG, PNG or GIF. Max 5MB allowed.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Add New User Modal */}
                {showAddUser && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-800">Add New Client</h3>
                                <button onClick={() => setShowAddUser(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <X className="w-6 h-6 text-slate-400" />
                                </button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Email Address (Required)</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm font-bold"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Password (Required)</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ea580c] text-sm"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <p className="mt-2 text-[10px] text-slate-400">Give these credentials to the client so they can track their application in the user panel.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                                <button
                                    onClick={() => setShowAddUser(false)}
                                    className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateUser}
                                    disabled={isUpdating}
                                    className="px-8 py-2 bg-[#ea580c] text-white font-bold rounded-xl shadow-lg hover:bg-[#c2410c] transition-all text-sm disabled:opacity-50"
                                >
                                    {isUpdating ? "Creating..." : "Create Account"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Pagination approximation */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-sm text-slate-500">
                    <p>Showing {filteredUsers.length} of {users.length} users</p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white bg-white font-bold text-[#ea580c]">1</button>
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
