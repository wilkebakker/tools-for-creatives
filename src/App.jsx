import { motion } from 'framer-motion'
import { useState } from 'react'
import './index.css'

const tools = [
  {
    id: 'thedownloader',
    name: 'THE DOWNLOADER',
    tagline: 'Download & Convert Media',
    description: 'Download from YouTube, TikTok, Instagram. Convert any media format. All from your menu bar.',
    features: ['YouTube, TikTok, Instagram', 'Media Converter', 'Finder Quick Actions', 'Project Folder Management'],
    icon: '⬇️',
    color: 'from-indigo-500 to-purple-600',
    downloadUrl: 'https://github.com/wilkebakker/tools-for-creatives/releases/latest/download/TheDownloader.dmg',
    available: true,
  },
  {
    id: 'coming-soon-1',
    name: 'QUICK RESIZE',
    tagline: 'Batch Image Resizing',
    description: 'Resize images for every platform in one click. Social media presets built-in.',
    features: ['Batch Processing', 'Social Media Presets', 'Drag & Drop'],
    icon: '📐',
    color: 'from-orange-500 to-pink-600',
    available: false,
  },
  {
    id: 'coming-soon-2',
    name: 'COLOR GRAB',
    tagline: 'Extract Color Palettes',
    description: 'Extract beautiful color palettes from any image. Export to Figma, CSS, or Tailwind.',
    features: ['AI Color Extraction', 'Export Formats', 'Palette History'],
    icon: '🎨',
    color: 'from-emerald-500 to-teal-600',
    available: false,
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium">
                Made for Content Creators
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Tools for{' '}
              <span className="gradient-text">Creatives</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
              Powerful Mac apps that streamline your creative workflow.
              Download, convert, and create faster.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#tools"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition-colors"
              >
                Explore Tools
              </a>
              <a
                href="#thedownloader"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-colors"
              >
                Get THE DOWNLOADER
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            🎬
          </motion.div>
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute bottom-20 right-10 text-6xl opacity-20"
          >
            🎵
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Tools</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Carefully crafted Mac apps designed to save you time and supercharge your creative workflow
            </p>
          </motion.div>

          {/* Featured Tool - THE DOWNLOADER - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="card-hover bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />

              <div className="grid md:grid-cols-2 gap-8 items-center relative">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl">
                      ⬇️
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        Available Now
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-2">THE DOWNLOADER</h3>
                  <p className="text-indigo-400 font-medium text-lg mb-4">Download & Convert Media</p>
                  <p className="text-slate-400 mb-6 text-lg">
                    Your all-in-one media companion. Download from YouTube, TikTok, Instagram. Convert any format. All from your menu bar.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {['YouTube, TikTok, Instagram', 'Media Converter', 'Finder Quick Actions', 'Project Management'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300">
                        <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://github.com/wilkebakker/tools-for-creatives/releases/latest/download/TheDownloader.dmg"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download for Mac
                    <span className="text-sm opacity-75">Free</span>
                  </a>
                </div>

                {/* App Preview - React Mockup */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                    <AppMockup activeTab="download" className="relative" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Tools */}
          <div className="grid md:grid-cols-2 gap-6">
            {tools.filter(t => !t.available).map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="thedownloader" className="py-24 bg-slate-900/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-400 font-medium mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple. Fast. Powerful.</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              THE DOWNLOADER lives in your menu bar, ready whenever you need it
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Paste Your Link',
                description: 'Copy any URL from YouTube, TikTok, or Instagram. Paste it into THE DOWNLOADER.',
                icon: '📋'
              },
              {
                step: '02',
                title: 'Choose Format',
                description: 'Select your desired format and quality. MP4, MP3, WAV, MOV — you name it.',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'Download',
                description: 'Click download and it goes straight to your project folder. That\'s it.',
                icon: '✨'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 text-3xl mb-4">
                  {item.icon}
                </div>
                <div className="text-indigo-400 font-mono text-sm mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* App Showcase - All Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tab: 'download', title: 'Download', desc: 'Paste links from YouTube, TikTok, Instagram' },
                { tab: 'convert', title: 'Convert', desc: 'Audio, video, and image formats' },
                { tab: 'setup', title: 'Setup', desc: 'Install Finder Quick Actions' }
              ].map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 hover:opacity-100 transition-opacity" />
                    <AppMockup activeTab={screen.tab} compact={true} className="relative transform hover:scale-[1.02] transition-transform" />
                  </div>
                  <h4 className="font-semibold mb-1">{screen.title}</h4>
                  <p className="text-sm text-slate-400">{screen.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Finder Quick Actions + Menu Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Finder Quick Actions */}
            <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
              <span className="text-indigo-400 font-medium text-sm mb-2 block">Power Feature</span>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Finder Quick Actions</h3>
              <p className="text-slate-400 text-sm mb-6">
                Right-click any file in Finder to instantly convert. No need to open the app.
              </p>
              <div className="flex justify-center">
                <FinderContextMenu />
              </div>
            </div>

            {/* Menu Bar */}
            <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
              <span className="text-indigo-400 font-medium text-sm mb-2 block">Always Accessible</span>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Lives in Your Menu Bar</h3>
              <p className="text-slate-400 text-sm mb-6">
                One click access from your menu bar. Always ready when you need it.
              </p>
              <div className="flex justify-center items-center h-32 relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <MenuBarMockup />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-14 left-1/2 -translate-x-1/2 w-2 h-2 border-l-2 border-b-2 border-slate-600 rotate-[-135deg]"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-16"
                >
                  <div className="bg-slate-900 rounded-lg p-3 border border-slate-700 shadow-xl text-xs w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 7v6m0 0l-2.5-2.5M12 13l2.5-2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <line x1="12" y1="13" x2="12" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span className="font-medium">THE DOWNLOADER</span>
                    </div>
                    <div className="text-slate-400">Click to open...</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <a
              href="https://github.com/wilkebakker/tools-for-creatives/releases/latest/download/TheDownloader.dmg"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download for Mac
              <span className="text-sm opacity-75">Intel & Apple Silicon</span>
            </a>
            <p className="text-slate-500 text-sm mt-4">Free download • macOS 12+</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500">
            Made with ❤️ for creatives everywhere
          </p>
          <p className="text-slate-600 text-sm mt-2">
            © {new Date().getFullYear()} Tools for Creatives. All rights reserved.
          </p>
          <div className="mt-4">
            <button
              onClick={() => {
                const modal = document.getElementById('imprint-modal')
                modal.showModal()
                const closeOnScroll = () => {
                  modal.close()
                  window.removeEventListener('scroll', closeOnScroll)
                }
                window.addEventListener('scroll', closeOnScroll)
              }}
              className="text-slate-500 hover:text-slate-400 text-sm underline underline-offset-2"
            >
              Impressum
            </button>
          </div>
        </div>
      </footer>

      {/* Imprint Modal */}
      <dialog
        id="imprint-modal"
        className="bg-slate-900 text-white rounded-2xl p-8 max-w-lg backdrop:bg-black/70 m-auto"
        onClick={(e) => { if (e.target.tagName === 'DIALOG') e.target.close() }}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Imprint</h2>

          <div>
            <h3 className="font-semibold text-slate-300">Information according to § 5 TMG</h3>
            <p className="text-slate-400 mt-1">
              Wilke Bakker<br />
              Alstädter Str. 8<br />
              50354 Hürth<br />
              Germany
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-300">Contact</h3>
            <p className="text-slate-400 mt-1">
              Email: wilke.bakker@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-300">Responsible for content according to § 55 Abs. 2 RStV</h3>
            <p className="text-slate-400 mt-1">
              Wilke Bakker<br />
              Alstädter Str. 8<br />
              50354 Hürth
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => document.getElementById('imprint-modal').close()}
              className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

function ToolCard({ tool, index }) {
  return (
    <motion.div
      id={tool.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-hover bg-slate-900/80 rounded-2xl p-6 border border-slate-800 relative overflow-hidden"
    >
      {/* Gradient hover effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl`}>
            {tool.icon}
          </div>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-400">
            Coming Soon
          </span>
        </div>

        <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
        <p className="text-indigo-400 font-medium text-sm mb-3">{tool.tagline}</p>
        <p className="text-slate-400 text-sm mb-4">{tool.description}</p>

        <div className="flex flex-wrap gap-2">
          {tool.features.map((feature, i) => (
            <span key={i} className="px-2 py-1 bg-slate-800/80 rounded-md text-xs text-slate-400">
              {feature}
            </span>
          ))}
        </div>

        {/* Notify button for coming soon */}
        <div className="mt-4 pt-4 border-t border-slate-800">
          <button
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-2"
            onClick={() => alert('Notify feature coming soon!')}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Notify me when available
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// App Mockup Components
function AppMockup({ activeTab = 'download', className = '', compact = false }) {
  return (
    <div className={`bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl ${className}`}>
      {/* Title Bar */}
      <div className="bg-slate-800 px-3 py-2.5 flex items-center justify-between border-b border-slate-700 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-xs">
            📁
          </div>
          <span className="text-xs font-medium text-slate-300 truncate">Your Project</span>
        </div>
        {!compact && (
          <div className="flex items-center gap-1.5">
            <button className="px-2 py-1 text-[10px] bg-slate-700 hover:bg-slate-600 rounded text-slate-300">Open</button>
            <button className="px-2 py-1 text-[10px] bg-slate-700 hover:bg-slate-600 rounded text-slate-300">Change</button>
          </div>
        )}
      </div>

      {/* Tab Bar */}
      <div className="flex justify-center px-3 pt-3 gap-1.5">
        {[
          { id: 'download', label: 'Download', icon: '⬇️' },
          { id: 'convert', label: 'Convert', icon: '🔄' },
          { id: 'setup', label: 'Setup', icon: '⚙️' },
        ].map((tab) => (
          <div
            key={tab.id}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400'
            }`}
          >
            <span className="text-[10px]">{tab.icon}</span>
            {tab.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'download' && <DownloadTabMockup compact={compact} />}
        {activeTab === 'convert' && <ConvertTabMockup compact={compact} />}
        {activeTab === 'setup' && <SetupTabMockup compact={compact} />}
      </div>
    </div>
  )
}

function DownloadTabMockup({ compact = false }) {
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      {/* Platform Icons */}
      <div className="flex justify-center gap-3">
        <img src="/logos/yt logo.png" alt="YouTube" className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-full object-cover`} />
        <img src="/logos/tiktok logo.png" alt="TikTok" className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-full object-cover`} />
        <img src="/logos/reels logo.png" alt="Instagram" className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-full object-cover`} />
      </div>

      {/* URL Input */}
      <div>
        <label className="text-[10px] text-slate-400 mb-1 block">Paste URLs</label>
        <div className={`bg-slate-800 rounded-lg ${compact ? 'p-2' : 'p-3'} border border-slate-700`}>
          <span className={`text-slate-400 ${compact ? 'text-[10px]' : 'text-xs'} break-all`}>https://youtu.be/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ</span>
        </div>
      </div>

      {/* Format Selection */}
      <div>
        <label className="text-[10px] text-slate-400 mb-1 block">Format</label>
        <div className="grid grid-cols-4 gap-1.5">
          {['MP4', 'MOV', 'WAV', 'MP3'].map((format, i) => (
            <div
              key={format}
              className={`${compact ? 'py-2' : 'py-2.5'} rounded-lg text-center ${compact ? 'text-[10px]' : 'text-xs'} font-medium ${
                i === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <div className={compact ? 'text-sm' : 'text-base'}>{i < 2 ? '🎬' : '🎵'}</div>
              {format}
            </div>
          ))}
        </div>
      </div>

      {/* Save Location */}
      <div className={`flex items-center justify-between bg-slate-800 rounded-lg ${compact ? 'p-2' : 'p-2.5'} border border-slate-700`}>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-sm">📁</span>
          <span className={`${compact ? 'text-[10px]' : 'text-xs'} text-slate-400`}>~/Desktop/Your Project</span>
        </div>
        <button className={`${compact ? 'text-[9px] px-1.5 py-0.5' : 'text-[10px] px-2 py-1'} text-slate-400 bg-slate-700 rounded`}>Change</button>
      </div>

      {/* Download Button */}
      <button className={`w-full ${compact ? 'py-2.5 text-xs' : 'py-3 text-sm'} bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold flex items-center justify-center gap-2`}>
        <span className={compact ? 'text-sm' : ''}>⬇️</span> Download
      </button>
    </div>
  )
}

function ConvertTabMockup({ compact = false }) {
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      {/* Header */}
      <div className="text-center">
        <div className={compact ? "text-xl mb-1" : "text-2xl mb-2"}>🔄</div>
        <h3 className={`font-semibold ${compact ? 'text-xs' : 'text-sm'}`}>Media Converter</h3>
      </div>

      {/* Drop Zone */}
      <div className={`border-2 border-dashed border-slate-700 rounded-lg ${compact ? 'p-4' : 'p-6'} text-center`}>
        <div className={compact ? "text-xl mb-1" : "text-2xl mb-2"}>📄</div>
        <p className={`text-slate-400 ${compact ? 'text-[10px]' : 'text-xs'}`}>Drop files here</p>
      </div>

      {/* Format Options */}
      <div className={compact ? "space-y-2" : "space-y-3"}>
        {/* Audio */}
        <div>
          <div className={`flex items-center gap-1 ${compact ? 'text-[10px]' : 'text-xs'} text-slate-400 mb-1`}>
            <span>🎵</span> Audio
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className={`${compact ? 'py-1.5 text-[10px]' : 'py-2 text-xs'} bg-indigo-600 rounded-lg text-center`}>WAV 24-bit</div>
            <div className={`${compact ? 'py-1.5 text-[10px]' : 'py-2 text-xs'} bg-slate-800 border border-slate-700 rounded-lg text-center text-slate-400`}>MP3</div>
          </div>
        </div>

        {/* Video */}
        <div>
          <div className={`flex items-center gap-1 ${compact ? 'text-[10px]' : 'text-xs'} text-slate-400 mb-1`}>
            <span>🎬</span> Video
          </div>
          <div className="grid grid-cols-4 gap-1">
            {['H.264', 'H.265', 'WebM', 'ProRes'].map((format) => (
              <div key={format} className={`${compact ? 'py-1 text-[9px]' : 'py-1.5 text-[10px]'} bg-slate-800 border border-slate-700 rounded text-center text-slate-400`}>
                {format}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <div className={`flex items-center gap-1 ${compact ? 'text-[10px]' : 'text-xs'} text-slate-400 mb-1`}>
            <span>🖼️</span> Image
          </div>
          <div className="grid grid-cols-3 gap-1">
            {['WebP', 'PNG', 'JPG'].map((format) => (
              <div key={format} className={`${compact ? 'py-1 text-[9px]' : 'py-1.5 text-[10px]'} bg-slate-800 border border-slate-700 rounded text-center text-slate-400`}>
                {format}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-1.5">
        <button className={`${compact ? 'py-2 text-[10px]' : 'py-2.5 text-xs'} bg-slate-800 border border-slate-700 rounded-lg text-slate-400 flex items-center justify-center gap-1`}>
          <span>🌐</span> Webify
        </button>
        <button className={`${compact ? 'py-2 text-[10px]' : 'py-2.5 text-xs'} bg-slate-700 rounded-lg text-slate-300 flex items-center justify-center gap-1`}>
          <span>🔄</span> Convert
        </button>
      </div>
    </div>
  )
}

function SetupTabMockup({ compact = false }) {
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      {/* Header */}
      <div className="text-center">
        <div className={compact ? "text-xl mb-1" : "text-2xl mb-2"}>⚙️</div>
        <h3 className={`font-semibold ${compact ? 'text-xs' : 'text-sm'}`}>Setup</h3>
      </div>

      {/* Finder Quick Actions */}
      <div className={`bg-slate-800 rounded-lg ${compact ? 'p-3' : 'p-4'} border border-slate-700`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-slate-700 flex items-center justify-center text-sm`}>📁</div>
            <div>
              <div className={`font-medium ${compact ? 'text-[10px]' : 'text-xs'} flex items-center gap-1.5`}>
                Finder Quick Actions
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </div>
              <div className={`${compact ? 'text-[9px]' : 'text-[10px]'} text-slate-400`}>Right-click: Webify, Convert to WAV</div>
            </div>
          </div>
          <button className={`${compact ? 'px-2 py-1 text-[9px]' : 'px-2.5 py-1.5 text-[10px]'} bg-slate-700 rounded-lg`}>Reinstall</button>
        </div>
      </div>

      {/* Legal Notice */}
      <div className={`bg-slate-800/50 rounded-lg ${compact ? 'p-3' : 'p-4'} border border-slate-700/50`}>
        <div className="flex items-start gap-2">
          <span className={`text-slate-500 ${compact ? 'text-sm' : ''}`}>ℹ️</span>
          <div>
            <div className={`font-medium ${compact ? 'text-[10px]' : 'text-xs'} mb-1`}>Legal Notice</div>
            <p className={`${compact ? 'text-[9px]' : 'text-[10px]'} text-slate-400 leading-relaxed`}>
              This app is for downloading content you have rights to access. You are responsible for ensuring compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FinderContextMenu() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-start gap-2">
        {/* File being clicked */}
        <div className="flex items-center gap-2 bg-blue-500/20 rounded-lg px-2 py-1.5 border border-blue-500/30 mt-1">
          {/* Audio file icon */}
          <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor" opacity="0.3" />
            <path d="M14 2v6h6M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="11" cy="15" r="2" fill="currentColor" />
            <path d="M13 15V11l2-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[11px] text-slate-300 font-medium">audio.mp3</span>
        </div>

        {/* Cursor with click effect */}
        <div className="relative -ml-4 mt-3">
          {/* Click impact burst - rotated 40deg counter-clockwise */}
          <svg className="w-8 h-8 text-indigo-400 absolute -top-3 -left-2 -rotate-[40deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="20" y1="7" x2="17" y2="9" />
            <line x1="4" y1="7" x2="7" y2="9" />
            <line x1="18" y1="14" x2="15" y2="13" />
            <line x1="6" y1="14" x2="9" y2="13" />
          </svg>
          {/* Cursor with handle */}
          <svg className="w-7 h-7 text-slate-200 relative z-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
            <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L5.94 2.91a.5.5 0 0 0-.44.3z" />
          </svg>
        </div>

        {/* Context Menu */}
        <div className="bg-slate-200 rounded-xl shadow-2xl overflow-hidden w-52 -ml-3">
          {['Convert to WAV 24-bit', 'Webify'].map((item, i) => (
            <div
              key={item}
              className={`px-4 py-2.5 text-sm ${
                i === 0 ? 'bg-blue-500 text-white' : 'text-slate-800'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MenuBarMockup() {
  return (
    <div className="bg-slate-800/90 backdrop-blur-xl rounded-xl p-1.5 flex items-center gap-2 shadow-lg border border-slate-700">
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-5 h-4 rounded bg-slate-700/50" />
      ))}
      {/* arrow.down.circle.fill icon */}
      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v5m0 0l-2.5-2.5M12 13l2.5-2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="12" y1="13" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="w-14 h-4 rounded bg-slate-700/50" />
    </div>
  )
}

export default App
