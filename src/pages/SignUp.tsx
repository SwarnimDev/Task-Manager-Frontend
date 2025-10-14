import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useSignUp } from '../features/auth/hooks/useSignUp';


export function SignUp() {
    const navigate = useNavigate();
  const { mutate: registerUser, isPending } = useSignUp();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string; confirmPassword?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!fullName) newErrors.fullName = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    registerUser(
      { fullName, email, password, confirmPassword },
      {
        onSuccess: () => {
          navigate("/signin");
        },
        onError: (err: any) => {
          setErrors({ email: err || "Registration failed" });
        },
      }
    );
  };
  
  return <AuthLayout title="Create an account" subtitle="Sign up to start managing your projects">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <Input label="Full name" type="text" placeholder="John Doe" value={fullName} onChange={e => setFullName(e.target.value)} error={errors.fullName} required />
          <Input label="Email address" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} error={errors.email} required />
          <div className="relative">
            <Input label="Password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} error={errors.password} required />
            <button type="button" className="absolute right-3 top-9 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
          <Input label="Confirm password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} error={errors.confirmPassword} required />
        </div>
        {/* <div className="flex items-center">
          <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" required />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>
          </label>
        </div> */}
        <Button type="submit" fullWidth isLoading={isPending}>
          Create account
        </Button>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>;
}