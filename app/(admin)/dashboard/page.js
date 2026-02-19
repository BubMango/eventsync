"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [adminName, setAdminName] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAdminAndFetchData = async () => {
      // 1. Get the current user session
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/login');
        return;
      }

      // 2. Verify they are actually an admin in the profiles table
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error || profile.role !== 'admin') {
        alert("Access Denied: Admins Only");
        router.push('/dashboard'); // Redirect regular users to client dashboard
        return;
      }

      setAdminName(profile.full_name);

      // 3. Fetch all users from the profiles table
      const { data: allProfiles } = await supabase
        .from('profiles')
        .select('*')
        .order('id', { ascending: false });

      setUsers(allProfiles || []);
      setLoading(false);
    };

    checkAdminAndFetchData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center font-black italic uppercase text-2xl">
      Verifying Admin Credentials...
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-2 py-1 rounded text-[10px] font-black uppercase">Admin</div>
          <div className="font-black italic tracking-tighter text-xl uppercase">EventSync HQ</div>
        </div>
        <button 
          onClick={handleLogout}
          className="text-[10px] font-black uppercase tracking-widest border border-gray-200 px-5 py-2 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all"
        >
          Sign Out
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        <header className="mb-10">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">Management Console</h1>
          <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest font-medium">
            Welcome back, {adminName}
          </p>
        </header>

        {/* User Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Registered</p>
            <p className="text-3xl font-bold">{users.length} Users</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Pending Events</p>
            <p className="text-3xl font-bold text-orange-500">0</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">System Status</p>
            <p className="text-3xl font-bold text-green-500">Live</p>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-50 bg-gray-50/50">
            <h2 className="font-black uppercase text-[12px] tracking-widest">User Database</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">
                <th className="px-8 py-4">Name</th>
                <th className="px-8 py-4">Email</th>
                <th className="px-8 py-4">Role</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold">{u.full_name}</td>
                  <td className="px-8 py-5 text-gray-500">{u.email}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                      u.role === 'admin' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}