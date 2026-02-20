"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function SignupPage() {
  const router = useRouter();
  
  // Form State
  const [step, setStep] = useState(1); // 1: Details, 2: Role Selection, 3: Institution Search, 4: Institution Reg
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '', middleName: '', lastName: '',
    email: '', secondaryEmail: '', mobile: '',
    province: '', zipCode: '', barangay: '', city: '',
    houseNo: '', street: '',
    password: '', confirmPassword: '',
    clientType: 'private', // 'private' or 'institutional'
    institutionId: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setStep(2); // Move to role selection
  };

  const finalizeSignup = async (type, instId = null) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: `${formData.firstName} ${formData.lastName}`,
            role: 'client',
            client_type: type,
            institution_id: instId
          }
        }
      });

      if (signUpError) throw signUpError;
      router.push('/client/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 py-20">
      <div className="w-full max-w-4xl bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Join EventSync</h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-2">Create your mission control account</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-[10px] font-black uppercase tracking-widest text-center">
            {error}
          </div>
        )}

        {/* STEP 1: PERSONAL DETAILS */}
        {step === 1 && (
          <form onSubmit={handleCreateAccount} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="First Name" name="firstName" onChange={handleChange} required />
              <Input label="Middle Name" name="middleName" onChange={handleChange} />
              <Input label="Last Name" name="lastName" onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Primary Email" name="email" type="email" onChange={handleChange} required />
              <Input label="Secondary Email" name="secondaryEmail" type="email" onChange={handleChange} />
              <Input label="Mobile Number" name="mobile" onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Input label="Province" name="province" onChange={handleChange} required />
              <Input label="Zip Code" name="zipCode" onChange={handleChange} required />
              <Input label="Barangay" name="barangay" onChange={handleChange} required />
              <Input label="City" name="city" onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="House/Building No." name="houseNo" onChange={handleChange} required />
              <Input label="Street" name="street" onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-100">
              <div className="relative">
                <Input label="Password" name="password" type={showPassword ? "text" : "password"} onChange={handleChange} required />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-10 text-[9px] font-black uppercase tracking-tighter hover:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <Input label="Retype Password" name="confirmPassword" type={showPassword ? "text" : "password"} onChange={handleChange} required />
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <button 
                type="submit"
                className="flex-1 bg-black text-white py-4 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-[6px_6px_0px_0px_rgba(212,212,212,1)]"
              >
                Create Account
              </button>
              <button 
                type="button"
                onClick={() => router.push('/login')}
                className="flex-1 border-2 border-black py-4 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-zinc-100 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: ACCOUNT TYPE SELECTION */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-center text-xs font-black uppercase tracking-widest border-b pb-4">Select Account Purpose</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectionCard 
                title="Private Client" 
                desc="Personal events, weddings, and private parties." 
                onClick={() => finalizeSignup('private')}
              />
              <SelectionCard 
                title="Institutional" 
                desc="Corporate, Government, or Organization representative." 
                onClick={() => setStep(3)}
              />
            </div>
          </div>
        )}

        {/* STEP 3: INSTITUTION SEARCH / REDIRECT */}
        {step === 3 && (
          <div className="space-y-8 text-center animate-in fade-in">
            <h2 className="text-xs font-black uppercase tracking-widest">Institutional Registration</h2>
            <p className="text-sm font-bold uppercase text-zinc-400">Is your company or government office already registered?</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={() => alert("Search Logic Here")} className="px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest">Yes, Search List</button>
              <button onClick={() => setStep(4)} className="px-8 py-4 border-2 border-black text-[10px] font-black uppercase tracking-widest">No, Register Institution</button>
            </div>
          </div>
        )}

        {/* STEP 4: REGISTER INSTITUTION */}
        {step === 4 && (
          <form className="space-y-6 animate-in fade-in">
            <h2 className="text-center text-xs font-black uppercase tracking-widest border-b pb-4">Institution Details</h2>
            <Input label="Institution Name" name="instName" required />
            <Input label="Office Address" name="instAddress" required />
            <button 
              type="button"
              onClick={() => finalizeSignup('institutional')}
              className="w-full bg-black text-white py-4 text-[11px] font-black uppercase tracking-[0.3em]"
            >
              Finalize Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Custom Sub-Components
function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 ml-1">{label}</label>
      <input 
        className="border-2 border-zinc-100 bg-zinc-50 p-3 text-xs font-bold uppercase tracking-tight focus:border-black focus:outline-none transition-colors"
        {...props}
      />
    </div>
  );
}

function SelectionCard({ title, desc, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="p-8 border-2 border-zinc-100 text-left hover:border-black hover:bg-zinc-50 transition-all group"
    >
      <h3 className="text-lg font-black italic uppercase tracking-tighter group-hover:underline decoration-2 underline-offset-4">{title}</h3>
      <p className="text-[10px] text-zinc-400 uppercase font-bold mt-2 leading-relaxed">{desc}</p>
    </button>
  );
}