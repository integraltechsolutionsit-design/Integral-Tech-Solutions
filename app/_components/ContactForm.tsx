"use client";

import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useMailgun } from '@/hooks/useMailgun';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

function ContactForm() {
  const { sendEmail, loading, error } = useMailgun();

  // Local state
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Validation state
  const [validationError, setValidationError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name || !mobile || !email || !message) {
      setValidationError('All fields are required.');
      return;
    }
    if (message.length > 500) {
      setValidationError('Message cannot exceed 500 characters.');
      return;
    }

    setValidationError('');

    const result = await sendEmail({
      name,
      mobile,
      email,
      message,
    });

    if (result) {
      // Clear form
      setName('');
      setMobile('');
      setEmail('');
      setMessage('');

      // Open dialog
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="flex flex-col gap-6 bg--300">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <label className="flex flex-col w-full">
          <p className="text-sm font-medium text-[#4a4a43] pb-2">Full Name</p>
          <Input
            className="text-[#4a4a43] h-12 bg-white border border-gray-300 rounded-lg placeholder:text-gray-400 text-base font-normal"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-full">
          <p className="text-sm font-medium text-[#4a4a43] pb-2">Mobile</p>
          <Input
            className="text-[#4a4a43] h-12 bg-white border border-gray-300 rounded-lg placeholder:text-gray-400 text-base font-normal"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-full">
          <p className="text-sm font-medium text-[#4a4a43] pb-2">Email</p>
          <Input
            className="text-[#4a4a43] h-12 bg-white border border-gray-300 rounded-lg placeholder:text-gray-400 text-base font-normal"
            placeholder="you@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-full">
          <p className="text-sm font-medium text-[#4a4a43] pb-2">Message</p>
          <textarea
            className="text-[#4a4a43] bg-white border border-gray-300 rounded-lg min-h-36 p-4 placeholder:text-gray-400 text-base font-normal"
            placeholder="Enter your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
          />
          <p className="text-right text-sm text-gray-500 mt-1">{message.length}/500</p>
        </label>

        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#4a4a43] text-white text-base font-bold shadow-lg hover:bg-[#3a3a33] transition-colors"
          disabled={loading}
        >
          <span className="truncate">{loading ? 'Sending...' : 'Send Message'}</span>
        </button>

        {(error || validationError) && (
          <p className="text-red-500 text-sm">{error || validationError}</p>
        )}
      </form>

      {/* Shadcn Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md sm:max-w-lg p-8">
          <div className="flex flex-col items-center gap-4">
            {/* Circle background */}
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              {/* Checkmark */}
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Header */}
            <DialogHeader className="text-center ">
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-center">
                Thank You!
              </DialogTitle>
              <DialogDescription className="mt-2 text-gray-700 text-base sm:text-lg">
                We have received your message and our team will review it shortly.
                
                You can expect a response within 24 hours. We appreciate your
                feedback and are excited to assist you!
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactForm;
