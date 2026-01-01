import React, { useState, useEffect } from 'react';
import { generateComicImage } from '../services/geminiService';
import { RefreshCcw, Image as ImageIcon, Sparkles } from 'lucide-react';

interface ComicPanelProps {
  prompt: string;
  fallbackSrc?: string;
  alt: string;
  autoGenerate?: boolean;
}

const ComicPanel: React.FC<ComicPanelProps> = ({ prompt, fallbackSrc, alt, autoGenerate = false }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedOnce, setGeneratedOnce] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!process.env.API_KEY) {
      setError("API Key missing. Cannot generate image.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const url = await generateComicImage(prompt);
      setImageUrl(url);
      setGeneratedOnce(true);
    } catch (err) {
      setError("Failed to generate visuals. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoGenerate && !generatedOnce && process.env.API_KEY) {
      handleGenerate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoGenerate, generatedOnce]);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white group ring-1 ring-slate-200">
      {imageUrl ? (
        <img src={imageUrl} alt={alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-6 text-center">
            {fallbackSrc ? (
                 <img src={fallbackSrc} alt={alt} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            ) : (
                <>
                    <ImageIcon className="w-16 h-16 mb-4 opacity-30 text-slate-600" />
                    <p className="max-w-md font-medium text-slate-500">{alt}</p>
                </>
            )}
        </div>
      )}

      {/* Overlay controls */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-bold shadow-lg transform transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
        >
          {loading ? (
            <RefreshCcw className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          {imageUrl ? 'Regenerate' : 'Generate Visual'}
        </button>
      </div>

      {error && (
        <div className="absolute top-4 left-4 right-4 bg-red-500/90 text-white p-2 rounded text-sm text-center shadow-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default ComicPanel;