'use client';

import { useState } from 'react';

const Hero: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Implement the logic to send the URL to your backend
    // and handle the websocket connection for real-time updates
    // For now, we'll just simulate a delay
    setTimeout(() => {
      setIsLoading(false);
      // Handle the response from your backend here
    }, 3000);
  };

  return (
    <div className="flex grow flex-col items-center justify-center px-4 py-12 pb-96 text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
        Boost Your SEO with AI
      </h1>
      <p className="mb-8 text-xl text-gray-600">
        Enter your website URL to generate powerful keywords
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="mb-4 w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded px-4 py-2 text-white transition duration-300 ${
            isLoading
              ? 'cursor-not-allowed bg-gray-400'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      {isLoading && (
        <div className="mt-8">
          <div className="size-12 animate-spin rounded-full border-y-2 border-blue-500" />
        </div>
      )}
    </div>
  );
};

export default Hero;
