"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function SignupPage() {
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '', middleName: '', lastName: '',
    email: '', secondaryEmail: '', mobile: '',
    province: '', zipCode: '', barangay: '', city: '',
    houseNo: '', street: '',
    password: '', confirmPassword: '',
    clientType: 'private'
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
    setStep(2);
  };

  const finalizeSignup = async (type, instId = null) => {
    setLoading(true);
    setError(null);
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: `${formData.firstName} ${formData.lastName}`,
            role: 'client',
            client_type: type
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
    <div className="min-h-screen bg-white flex flex-col items-center p-6 py-20 text-[#0F172A]">
      {/* HEADER SECTION */}
      <div className="mb-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Registration</p>
        <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-none">
          Join <span className="text-gray-900">EventSync</span>
        </h1>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-4 italic">
          Create your mission control account
        </p>
      </div>

      {/* MAIN CONTAINER - Matched to Packages/Contact Page visuals */}
      <div className="w-full max-w-5xl bg-[#F3F4F6] border border-gray-100 rounded-[45px] p-12 transition-all">
        
        {error && (
          <div className="mb-8 p-4 bg-red-50 rounded-2xl text-red-600 text-[10px] font-black uppercase tracking-widest text-center">
            {error}
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleCreateAccount} className="space-y-8">
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input label="First Name" name="firstName" placeholder="Rhaiah" onChange={handleChange} required />
              <Input label="Middle Name" name="middleName" placeholder="D." onChange={handleChange} />
              <Input label="Last Name" name="lastName" placeholder="Franccizca" onChange={handleChange} required />
            </div>

            {/* Row 2: Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input label="Primary Email" name="email" type="email" placeholder="hello@hqp.com" onChange={handleChange} required />
              <Input label="Secondary Email" name="secondaryEmail" type="email" placeholder="backup@hqp.com" onChange={handleChange} />
              <Input label="Mobile Number" name="mobile" placeholder="09XX XXX XXXX" onChange={handleChange} required />
            </div>

            {/* Row 3: Location Part 1 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Input label="Province" name="province" placeholder="Davao del Sur" onChange={handleChange} required />
              <Input label="Zip Code" name="zipCode" placeholder="8000" onChange={handleChange} required />
              <Input label="Barangay" name="barangay" placeholder="Buhangin" onChange={handleChange} required />
              <Input label="City" name="city" placeholder="Davao City" onChange={handleChange} required />
            </div>

            {/* Row 4: Location Part 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="House/Building No." name="houseNo" placeholder="Bldg 123" onChange={handleChange} required />
              <Input label="Street" name="street" placeholder="JP Laurel Ave" onChange={handleChange} required />
            </div>

            {/* Row 5: Security */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="relative">
                <Input label="Password" name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" onChange={handleChange} required />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-[46px] text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <Input label="Retype Password" name="confirmPassword" type={showPassword ? "text" : "password"} placeholder="••••••••" onChange={handleChange} required />
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-6 pt-6">
              <button 
                type="submit"
                className="flex-[2] bg-black text-white py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-zinc-800 transition-all shadow-xl active:scale-[0.98]"
              >
                Create Account
              </button>
              <button 
                type="button"
                onClick={() => router.push('/login')}
                className="flex-1 bg-white border border-gray-200 text-black py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: ACCOUNT TYPE (Consistent with card feel) */}
        {step === 2 && (
          <div className="space-y-10 py-10 text-center animate-in fade-in duration-500">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Choose Account Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SelectionCard 
                title="Private Client" 
                desc="Personal events and private parties." 
                onClick={() => finalizeSignup('private')}
              />
              <SelectionCard 
                title="Institutional" 
                desc="Corporate or Government representative." 
                onClick={() => setStep(3)}
              />
            </div>
          </div>
        )}

        {/* Logic for Steps 3 & 4 follows the same color/rounded patterns... */}
      </div>
    </div>
  );
}

// Visual consistent Sub-Components
function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">{label}</label>
      <input 
        className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-black outline-none transition-all shadow-sm"
        {...props}
      />
    </div>
  );
}

function SelectionCard({ title, desc, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="p-12 bg-white rounded-[35px] text-center border border-gray-100 hover:bg-black group transition-all duration-500 shadow-sm"
    >
      <h3 className="text-xl font-black italic uppercase tracking-tighter group-hover:text-white transition-colors">{title}</h3>
      <p className="text-[10px] text-gray-400 font-bold uppercase mt-4 tracking-widest leading-relaxed group-hover:text-zinc-500 transition-colors">{desc}</p>
    </button>
  );
}