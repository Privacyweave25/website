import React from "react";
import { useLocation } from "wouter";

const AIScannerPage = () => {
  const [, setLocation] = useLocation();
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at center top, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }
          
          .badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(102, 126, 234, 0.1);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 2rem;
            font-size: 0.875rem;
            margin-bottom: 2rem;
            color: #667eea;
            font-weight: 600;
          }
          
          .hero-title {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            background: linear-gradient(to bottom, #fff 0%, #888 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .hero-subtitle {
            font-size: clamp(1.25rem, 3vw, 1.75rem);
            color: #888;
            margin-bottom: 3rem;
            line-height: 1.5;
          }
          
          .btn-primary {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            border-radius: 0.5rem;
            color: white;
            font-weight: 600;
            font-size: 1.125rem;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            text-decoration: none;
            display: inline-block;
          }
          
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          }
          
          .btn-secondary {
            padding: 1rem 2rem;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.5rem;
            color: white;
            font-weight: 600;
            font-size: 1.125rem;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-block;
          }
          
          .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.4);
          }
          
          .demo-container {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 3rem;
            position: relative;
            overflow: hidden;
          }
          
          .demo-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
            animation: scan 3s linear infinite;
          }
          
          @keyframes scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .terminal {
            background: #000;
            border-radius: 0.5rem;
            padding: 1.5rem;
            font-family: 'Monaco', 'Courier New', monospace;
            margin-top: 2rem;
          }
          
          .terminal-header {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }
          
          .terminal-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          
          .dot-red { background: #ff5f57; }
          .dot-yellow { background: #ffbd2e; }
          .dot-green { background: #28ca42; }
          
          .terminal-content {
            color: #0f0;
            font-size: 0.875rem;
            line-height: 1.6;
          }
          
          .prompt { color: #888; }
          .danger { color: #ff5f57; }
          .success { color: #28ca42; }
          
          .feature-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 2rem;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
          }
          
          .feature-card:hover {
            transform: translateY(-5px);
            border-color: rgba(102, 126, 234, 0.3);
          }
          
          .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          
          .feature-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          
          .feature-description {
            color: #888;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }
          
          .feature-list {
            list-style: none;
          }
          
          .feature-list li {
            padding: 0.5rem 0;
            color: #aaa;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .feature-list li::before {
            content: '✓';
            color: #667eea;
            font-weight: bold;
          }
          
          .stat-card {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .stat-number {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
          }
          
          .stat-label {
            color: #888;
            font-size: 1.125rem;
          }
          
          .alert-box {
            background: linear-gradient(135deg, rgba(255, 95, 87, 0.1) 0%, rgba(255, 95, 87, 0.05) 100%);
            border: 1px solid rgba(255, 95, 87, 0.3);
            border-radius: 1rem;
            padding: 2rem;
            position: relative;
          }
          
          .alert-box::before {
            content: '⚠️';
            position: absolute;
            top: -1rem;
            left: 2rem;
            background: #0a0a0a;
            padding: 0 0.5rem;
            font-size: 2rem;
          }
          
          .alert-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #ff5f57;
          }
          
          .alert-content {
            color: #ccc;
            line-height: 1.6;
          }
        `
      }} />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
          <div className="hero-bg"></div>
          <div className="max-w-4xl text-center relative z-10">

            <h1 className="hero-title">Your AI is Leaking<br />Find Out What</h1>
            <p className="hero-subtitle">94% of enterprise AIs fail basic security tests. Is yours one of them?</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); setLocation('/contact'); }}>Request Demo</a>
            </div>
          </div>
        </section>

        {/* See The Difference - moved from Home with animations */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes flicker-alert { 0%,20%{opacity:0;transform:scale(0.8);} 25%,45%{opacity:1;transform:scale(1.1);} 50%,100%{opacity:0;transform:scale(0.8);} }
              .animate-flicker-1 { animation: flicker-alert 3s ease-in-out infinite; animation-delay: 0s; }
              .animate-flicker-2 { animation: flicker-alert 3s ease-in-out infinite; animation-delay: 1s; }
              .animate-flicker-3 { animation: flicker-alert 3s ease-in-out infinite; animation-delay: 2s; }
            `
          }} />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">See The Difference</h2>
          <p className="text-center text-gray-400 mb-10">Real-time protection that transforms chaos into control</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Privacy Weave */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 border-2 border-red-800/40 hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-4 left-4 text-red-300 font-semibold text-sm uppercase tracking-wider">
                Without Privacy Weave
              </div>

              <div className="mt-12 mb-8 h-40 md:h-48 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-red-900/40 border border-red-500/60 px-3 py-2 rounded-lg text-red-200 text-xs font-semibold animate-flicker-1">
                    DATA LEAK!
                  </div>
                  <div className="absolute top-16 right-8 bg-red-900/40 border border-red-500/60 px-3 py-2 rounded-lg text-red-200 text-xs font-semibold animate-flicker-2">
                    BREACH ALERT!
                  </div>
                  <div className="absolute bottom-6 left-12 bg-red-900/40 border border-red-500/60 px-3 py-2 rounded-lg text-red-200 text-xs font-semibold animate-flicker-3">
                    COMPLIANCE FAIL!
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3"><span className="text-red-400 font-bold text-lg">✗</span><span>AI exposes sensitive customer data</span></li>
                <li className="flex items-center gap-3"><span className="text-red-400 font-bold text-lg">✗</span><span>Jailbreak attacks succeed easily</span></li>
                <li className="flex items-center gap-3"><span className="text-red-400 font-bold text-lg">✗</span><span>No visibility into data flows</span></li>
                <li className="flex items-center gap-3"><span className="text-red-400 font-bold text-lg">✗</span><span>Compliance violations and fines</span></li>
                <li className="flex items-center gap-3"><span className="text-red-400 font-bold text-lg">✗</span><span>Lost customer trust</span></li>
              </ul>
            </div>

            {/* With Privacy Weave */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border-2 border-green-800/40 hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-4 left-4 text-green-300 font-semibold text-sm uppercase tracking-wider">
                With Privacy Weave
              </div>

              <div className="mt-12 mb-8 h-40 md:h-48 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-green-500 rounded-full flex items-center justify-center bg-green-900/20 animate-pulse">
                  <span className="text-green-400 text-4xl font-bold">✓</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3"><span className="text-green-400 font-bold text-lg">✓</span><span>All sensitive data automatically protected</span></li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-bold text-lg">✓</span><span>Attacks blocked in milliseconds</span></li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-bold text-lg">✓</span><span>Complete visibility and control</span></li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-bold text-lg">✓</span><span>Automatic compliance reporting</span></li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-bold text-lg">✓</span><span>Customer confidence secured</span></li>
              </ul>
            </div>
          </div>
        </div>



        {/* Live Attack Visualization (replacing simulation with rich visualization) */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <style dangerouslySetInnerHTML={{
            __html: `
            .viz-container{backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.15);border-radius:16px;padding:20px;background:linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))}
            .workflow{display:flex;flex-direction:column;gap:24px}
            .row{display:flex;justify-content:center;align-items:center;gap:16px;flex-wrap:wrap}
            .box{min-width:260px;text-align:center;border-radius:14px;padding:18px;border:2px solid transparent;position:relative;overflow:hidden;cursor:pointer}
            .box:before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:left .5s ease}
            .box:hover:before{left:100%}
            .box:hover{transform:translateY(-4px);border-color:#00f5ff;box-shadow:0 10px 30px rgba(0,245,255,.2)}
            .g-input{background:linear-gradient(135deg,#ff006e,#8338ec)}
            .g-proc{background:linear-gradient(135deg,#3a86ff,#06ffa5)}
            .g-anal{background:linear-gradient(135deg,#ffbe0b,#fb8500)}
            .g-out{background:linear-gradient(135deg,#06ffa5,#3a86ff)}
            .tag{display:inline-block;background:rgba(255,0,110,.3);border:1px solid #ff006e;padding:6px 14px;border-radius:20px;font-size:.9em;margin-right:8px;margin-bottom:8px}
            .progress{width:100%;height:18px;background:rgba(255,255,255,.15);border-radius:10px;overflow:hidden}
            .fill{height:100%;background:linear-gradient(90deg,#00f5ff,#ff006e);animation:loading 3s ease-in-out infinite}
            @keyframes loading{0%,100%{width:0%}50%{width:100%}}
            .blink{animation:blink 1s infinite}
            @keyframes blink{0%,50%{opacity:1}51%,100%{opacity:.3}}
          `}} />

          <div className="viz-container">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white">AI Security Scanner</h2>
              <p className="text-gray-300">Real-time Detection & Prevention of Prompt Injection, Data Exfiltration & Social Engineering</p>
            </div>

            <div className="workflow">
              <div className="row">
                <div className="box g-input"><h3 className="font-semibold">🎯 Input Sources</h3><p>Endpoint URLs & Chatbots</p><div className="mt-2 text-sm opacity-80">REST APIs • GraphQL • AI Chatbots • Web Apps</div></div>
              </div>
              <div className="row">
                <div className="box g-proc"><h3 className="font-semibold">⚙️ Pre-Processing</h3><p>Validation & Configuration</p><div className="mt-2 text-sm opacity-80">Target Classification • Auth Setup • Rate Limiting</div></div>
              </div>
              <div className="row">
                <div className="box g-anal"><h3 className="font-semibold">🔍 Endpoint Scanner</h3><p>Data Discovery & Vulnerability Assessment</p><div className="mt-2 text-sm opacity-80">PII/PHI Detection • SQL Injection • Data Leaks</div></div>
                <div className="box g-anal"><h3 className="font-semibold">🤖 Chatbot Scanner</h3><p>Prompt Injection & Jailbreaking</p><div className="mt-2 text-sm opacity-80">System Override • Role Confusion • Data Extraction</div></div>
              </div>
              <div className="row">
                <div className="box g-proc"><h3 className="font-semibold">🧠 Analysis Engine</h3><p>ML Models & Rule-Based Detection</p><div className="mt-2 text-sm opacity-80">Classification • Risk Scoring • Pattern Matching</div></div>
              </div>
              <div className="row">
                <div className="box g-out"><h3 className="font-semibold">📊 Reporting</h3><p>Dashboard & Alerts</p><div className="mt-2 text-sm opacity-80">Live Monitoring • Detailed Reports • Compliance Status</div></div>
                <div className="box g-out"><h3 className="font-semibold">🚨 Alerting</h3><p>Real-time Notifications</p><div className="mt-2 text-sm opacity-80">Email • Slack • SMS • SIEM Integration</div></div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="font-semibold mb-2 text-white">🎯 Active Scans</h3>
                <div className="text-2xl font-bold">24</div>
                <div className="progress mt-3"><div className="fill"></div></div>
                <p className="text-sm opacity-80 mt-2">Endpoints & Chatbots monitored</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="font-semibold mb-2 text-white">🚨 Threats Detected</h3>
                <div className="text-2xl font-bold text-pink-400">7</div>
                <div className="mt-2">
                  <span className="tag">Prompt Injection</span>
                  <span className="tag">PII Leak</span>
                  <span className="tag">Jailbreak</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="font-semibold mb-2 text-white">📊 Risk Distribution</h3>
                <div className="flex justify-between text-sm my-2"><span className="text-pink-400">Critical: 2</span><span className="text-orange-300">High: 3</span></div>
                <div className="flex justify-between text-sm"><span className="text-yellow-300">Medium: 8</span><span className="text-green-300">Low: 12</span></div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="font-semibold mb-2 text-white">✅ Compliance Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>GDPR</span><span className="text-green-300">✓ Compliant</span></div>
                  <div className="flex justify-between"><span>HIPAA</span><span className="text-orange-300">⚠ Issues Found</span></div>
                  <div className="flex justify-between"><span>PCI-DSS</span><span className="text-green-300">✓ Compliant</span></div>
                </div>
              </div>
            </div>

            <div className="text-right mt-4">
              <span className="inline-flex items-center gap-2 bg-green-900/20 border border-green-500/50 px-3 py-1 rounded-md text-sm"><span className="w-2 h-2 rounded-full bg-green-400 blink"></span> Real-time Scanning Active</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">

              <div className="feature-title">Jailbreak Detection</div>
              <p className="feature-description">Catches attempts to bypass AI rules and restrictions</p>
              <ul className="feature-list">
                <li>Role-playing attacks</li>
                <li>Debug mode tricks</li>
                <li>Authority spoofing</li>
              </ul>
            </div>

            <div className="feature-card">

              <div className="feature-title">Data Leak Prevention</div>
              <p className="feature-description">Stops unauthorized data extraction attempts</p>
              <ul className="feature-list">
                <li>Bulk data requests</li>
                <li>Hidden export commands</li>
                <li>Cross-user data access</li>
              </ul>
            </div>

            <div className="feature-card">

              <div className="feature-title">Social Engineering Shield</div>
              <p className="feature-description">Blocks manipulation and impersonation tactics</p>
              <ul className="feature-list">
                <li>Fake urgency tactics</li>
                <li>Emotional manipulation</li>
                <li>Trust exploitation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Alert Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="alert-box">
            <div className="alert-title">Real Companies. Real Breaches. Real Costs.</div>
            <div className="alert-content">
              <strong>Samsung:</strong> Engineers leaked chip designs to ChatGPT<br />
              <strong>Car Dealership:</strong> Bot tricked into selling cars for $1<br />
              <strong>Healthcare Provider:</strong> Patient records exposed via AI assistant<br /><br />
              Don't be the next headline. Test your AI security now.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIScannerPage;
