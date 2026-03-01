import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CheckCircle } from 'lucide-react';
const logoImage = '/assets/SafeScribe_logo.png';

export default function GetStarted() {
  useEffect(() => {
    document.title = 'Get Started - SafeScribe Testing Program';
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    reason: '',
    understood: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.understood) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img src={logoImage} alt="SafeScribe" className="h-10 w-auto" />
              </Link>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank you for your interest
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your interest in the SafeScribe testing program. We'll reach out to you at {formData.email} when testing opportunities become available.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src={logoImage} alt="SafeScribe" className="h-10 w-auto" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        {/* Notice Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-lg">
          <p className="font-semibold text-amber-900 mb-2">
            SafeScribe is not yet available for purchase
          </p>
          <p className="text-amber-800">
            This page is for expressing interest in testing the device or joining the waitlist.
          </p>
        </div>

        {/* Headline and Intro */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Join the SafeScribe testing program
        </h1>
        <div className="text-lg text-gray-600 mb-12 space-y-4">
          <p>
            SafeScribe is not yet available to buy. We're looking for people and organizations who want to try the device and give feedback.
          </p>
          <p>
            If you're interested in testing SafeScribe, fill out the form below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
              Full name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="Jane Smith"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="jane@example.com"
            />
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
              Organization or company <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="Acme Corporation"
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
              Role or title <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="Product Manager"
            />
          </div>

          {/* Reason */}
          <div>
            <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-2">
              Short reason for wanting to test <span className="text-gray-500 font-normal">(optional, 1–2 sentences)</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
              placeholder="I'm interested in testing SafeScribe because..."
            />
          </div>

          {/* Checkbox */}
          <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="understood"
                required
                checked={formData.understood}
                onChange={handleChange}
                className="mt-1 w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-gray-900 cursor-pointer"
              />
              <span className="text-sm text-gray-900">
                <span className="font-semibold">I understand SafeScribe is not for sale yet.</span> I'm signing up to express interest in testing or joining the waitlist, not to make a purchase. <span className="text-red-600">*</span>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
          >
            Join the waitlist
          </button>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-500 text-center">
            We'll only use your information to contact you about testing and the waitlist. We won't share your details with third parties or use them for marketing unless you opt in.
          </p>
        </form>
      </div>
    </div>
  );
}