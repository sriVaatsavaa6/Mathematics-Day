import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Heart, Frown, Meh } from 'lucide-react';

const Poll: React.FC = () => {
  const [voted, setVoted] = useState<boolean>(false);
  const [data, setData] = useState([
    { name: 'Love it!', value: 45, color: '#10b981' },
    { name: 'It\'s Okay', value: 30, color: '#f59e0b' },
    { name: 'Hate it', value: 15, color: '#ef4444' },
  ]);

  const handleVote = (index: number) => {
    if (voted) return;
    const newData = [...data];
    newData[index].value += 1;
    setData(newData);
    setVoted(true);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 w-full max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Live Class Poll: How do you feel about Maths?</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleVote(0)}
            disabled={voted}
            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${voted ? 'opacity-50' : 'hover:scale-102 hover:shadow-lg'} ${voted && data[0].value > data[1].value && data[0].value > data[2].value ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-600 bg-slate-700'}`}
          >
            <span className="flex items-center gap-3 text-lg font-semibold">
              <Heart className="text-emerald-400 fill-emerald-400" /> I Love Math!
            </span>
            {voted && <span className="font-bold text-emerald-400">{data[0].value}%</span>}
          </button>

          <button
            onClick={() => handleVote(1)}
            disabled={voted}
            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${voted ? 'opacity-50' : 'hover:scale-102 hover:shadow-lg'} border-slate-600 bg-slate-700`}
          >
            <span className="flex items-center gap-3 text-lg font-semibold">
              <Meh className="text-amber-400" /> It's complicated
            </span>
            {voted && <span className="font-bold text-amber-400">{data[1].value}%</span>}
          </button>

          <button
            onClick={() => handleVote(2)}
            disabled={voted}
            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${voted ? 'opacity-50' : 'hover:scale-102 hover:shadow-lg'} border-slate-600 bg-slate-700`}
          >
            <span className="flex items-center gap-3 text-lg font-semibold">
              <Frown className="text-red-400" /> Not a fan
            </span>
            {voted && <span className="font-bold text-red-400">{data[2].value}%</span>}
          </button>
        </div>

        <div className="h-64 w-full">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
               <XAxis type="number" hide />
               <YAxis dataKey="name" type="category" width={80} tick={{fill: '#94a3b8'}} />
               <Tooltip 
                 contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                 cursor={{fill: 'transparent'}}
               />
               <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                 {data.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={entry.color} />
                 ))}
               </Bar>
             </BarChart>
           </ResponsiveContainer>
        </div>
      </div>
      {voted && (
          <p className="text-center mt-6 text-slate-400 italic animate-pulse">
              Thanks for voting! Statistics updated in real-time.
          </p>
      )}
    </div>
  );
};

export default Poll;