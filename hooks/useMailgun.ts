// hooks/useMailgun.ts
import { useState } from 'react';

interface EmailData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface UseMailgunReturn {
  sendEmail: (data: EmailData) => Promise<boolean>;
  loading: boolean;
  error: string | null;
  success: boolean;
}

export const useMailgun = (): UseMailgunReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      setSuccess(true);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendEmail,
    loading,
    error,
    success,
  };
};