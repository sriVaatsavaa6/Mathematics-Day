import React, { useState, useEffect } from 'react';
import Section from './components/Section';
import ComicPanel from './components/ComicPanel';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Calculator, Gamepad2, BrainCircuit, ArrowDown, Lightbulb, Sigma } from 'lucide-react';

// Gaming Math Data
const gameMathData = [
  { subject: 'Trigonometry', A: 100, fullMark: 100 },
  { subject: 'Linear Algebra', A: 90, fullMark: 100 },
  { subject: 'Physics (Calculus)', A: 85, fullMark: 100 },
  { subject: 'Geometry', A: 95, fullMark: 100 },
  { subject: 'Probability', A: 60, fullMark: 100 },
  { subject: 'Discrete Math', A: 70, fullMark: 100 },
];

// AI Math Data
const aiMathData = [
  { name: 'Basic AI', complexity: 20, math: 30 },
  { name: 'ML Models', complexity: 45, math: 60 },
  { name: 'Deep Learning', complexity: 70, math: 85 },
  { name: 'LLMs (GPT)', complexity: 95, math: 100 },
  { name: 'AGI', complexity: 100, math: 100 },
];

function App() {
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    if (!process.env.API_KEY) {
        setApiKeyMissing(true);
    }
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navbar/Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Calculator className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-800">Maths<span className="text-blue-600">Day</span></span>
            </div>
            <div className="text-xs md:text-sm text-slate-500 hidden md:block font-medium">
                Presentation by Akshay Srivatsava. B
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="intro" className="relative pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-bold border border-blue-200">
                    <Sigma className="w-4 h-4" />
                    <span>The Invisible Source Code</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900">
                    Why a dedicated <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Maths Day?</span>
                </h1>
                <div className="prose prose-lg text-slate-600">
                    <p>
                        We often ask, <em className="text-slate-800 font-semibold">"Why do we need to learn this?"</em> 
                    </p>
                    <p>
                        <strong>Srinivasa Ramanujan</strong>, whose birthday we celebrate today, explored mathematics for its sheer beauty. 
                        Yet, 100 years later, his "abstract" mock theta functions are helping physicists understand 
                        <strong> black holes</strong>.
                    </p>
                    <p>
                        In CSE, we don't just write code; we translate <strong>mathematical logic</strong> into 
                        reality. From the encryption securing your WhatsApp to the compression loading this webpage—Math is the engine 
                        running silently under the hood.
                    </p>
                </div>
            </div>
            <div className="relative flex justify-center">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-2xl blur-xl opacity-70"></div>
                
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full z-10 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4">
                        <div className="bg-amber-50 p-3 rounded-xl shrink-0">
                             <Lightbulb className="text-amber-500 w-8 h-8" />
                        </div>
                        <div>
                            <strong className="block text-slate-900 mb-2 uppercase tracking-wide font-black">Did You Know?</strong> 
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Google Search relies on <span className="font-bold text-blue-600">Linear Algebra</span> (PageRank Algorithm) to sort the internet's chaos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#gaming" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-600 transition-colors">
            <ArrowDown />
        </a>
      </Section>

      {/* Gaming Section */}
      <Section id="gaming" title="Do We Need Maths in Gaming?" className="bg-white">
         <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 h-[400px] bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-inner">
                 <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={gameMathData}>
                    <PolarGrid stroke="#cbd5e1" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name="Math Importance"
                        dataKey="A"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        fill="#8b5cf6"
                        fillOpacity={0.3}
                    />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    </RadarChart>
                 </ResponsiveContainer>
                 <p className="text-center text-sm text-slate-500 mt-4 font-medium">Math concepts essential for Game Engines (Unity, Unreal)</p>
             </div>
             <div className="space-y-6 order-1 md:order-2">
                 <div className="flex items-center gap-3 text-purple-600">
                     <div className="p-3 bg-purple-100 rounded-xl">
                        <Gamepad2 className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900">Case Study: Free Fire / PUBG</h3>
                 </div>
                 <p className="text-slate-600 text-lg">
                     Physics engines don't guess; they calculate. Every headshot is a solved equation.
                 </p>
                 <ul className="space-y-4">
                     <li className="flex gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                         <span className="font-bold text-purple-600 whitespace-nowrap">Vectors</span>
                         <span className="text-slate-600">Defining player direction, bullet velocity, and wind resistance.</span>
                     </li>
                     <li className="flex gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                         <span className="font-bold text-purple-600 whitespace-nowrap">Calculus</span>
                         <span className="text-slate-600">Modeling projectile motion so a grenade falls in an arc, not a straight line.</span>
                     </li>
                     <li className="flex gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                         <span className="font-bold text-purple-600 whitespace-nowrap">Matrices</span>
                         <span className="text-slate-600">The 3D world is just a giant matrix multiplication transforming shapes to your screen.</span>
                     </li>
                 </ul>
             </div>
         </div>
      </Section>

      {/* AI Section */}
      <Section id="ai" title="The Brain Behind AI (ChatGPT)" className="bg-slate-50">
          <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-3 text-emerald-600">
                     <div className="p-3 bg-emerald-100 rounded-xl">
                        <BrainCircuit className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900">It's Just Linear Algebra!</h3>
                 </div>
                 <p className="text-slate-600 text-lg leading-relaxed">
                     We treat AI like magic, but it's really just <strong className="text-emerald-600">Statistics on steroids</strong>. 
                     Large Language Models (LLMs) like ChatGPT turn words into numbers (Embeddings) and calculate the probability of the next word.
                 </p>
                 
                 <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                     <h4 className="font-bold text-lg mb-6 text-slate-900 border-b border-slate-100 pb-2">The Math Stack of AI:</h4>
                     <div className="space-y-4">
                         <div className="flex items-start gap-3">
                             <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500"></div>
                             <p className="text-slate-700"><strong>Probability:</strong> Guessing if "Artificial" should be followed by "Intelligence" or "Flavor".</p>
                         </div>
                         <div className="flex items-start gap-3">
                             <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                             <p className="text-slate-700"><strong>Calculus (Gradient Descent):</strong> The way a neural network "learns" is by sliding down a mathematical hill to find the lowest error.</p>
                         </div>
                         <div className="flex items-start gap-3">
                             <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500"></div>
                             <p className="text-slate-700"><strong>Linear Algebra:</strong> Handling billions of parameters simultaneously using matrices.</p>
                         </div>
                     </div>
                 </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                 <div className="h-[500px] bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
                    <h4 className="text-center font-bold mb-6 text-slate-700">Complexity vs. Math Usage</h4>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart data={aiMathData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                            <YAxis stroke="#64748b" tickLine={false} axisLine={false} dx={-10} />
                            <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            <Line type="monotone" dataKey="math" stroke="#059669" strokeWidth={4} name="Math Intensity" activeDot={{ r: 8, fill: '#059669' }} dot={{fill: '#059669', r: 4}} />
                            <Line type="monotone" dataKey="complexity" stroke="#3b82f6" strokeWidth={4} name="Model Complexity" dot={{fill: '#3b82f6', r: 4}} />
                        </LineChart>
                    </ResponsiveContainer>
                 </div>
                 <p className="text-center text-slate-500 mt-6 italic">
                     "There is no AI without the math behind it."
                 </p>
              </div>
          </div>
      </Section>

      {/* Footer / Conclusion */}
      <footer className="bg-white py-20 px-4 border-t border-slate-200 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">So, do we require Maths in CSE?</h2>
            <div className="inline-block relative">
                 <div className="absolute inset-0 bg-blue-200 transform -skew-y-2 rounded-lg"></div>
                 <p className="relative text-4xl md:text-5xl font-black text-blue-900 px-6 py-2">
                    ABSOLUTELY.
                </p>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Maths isn't just a subject. It's the language we use to build the future.
            </p>
            <div className="pt-12 text-sm text-slate-400 font-medium">
                Presentation for National Mathematics Day • Built by Akshay Srivatsava. B
            </div>
          </div>
      </footer>

      {apiKeyMissing && (
        <div className="fixed bottom-4 left-4 max-w-sm bg-white border border-amber-200 text-slate-800 p-4 rounded-lg shadow-2xl z-50 text-xs flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse"></div>
             <div>
                <strong>Demo Mode:</strong> Add your GEMINI API KEY to generate unique AI comics. 
             </div>
        </div>
      )}
    </div>
  );
}

export default App;