import { motion } from 'framer-motion'
import { useState } from 'react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
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
              className="flex flex-wrap justify-center"
            >
              <a
                href="#thedownloader"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
              >
                Get THE DOWNLOADER
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            🎬
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 right-10 text-6xl opacity-20"
          >
            🎵
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-24 relative">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <InteractiveShowcase />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="thedownloader" className="py-24 bg-slate-900/50 relative overflow-hidden">
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
              <span className="whitespace-nowrap">THE DOWNLOADER lives in your menu bar,</span>{' '}
              <span className="whitespace-nowrap">ready whenever you need it.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureTile title="Download Media" description="Paste any link from YouTube, TikTok or Instagram. Pick your format and find them right in your Project.">
                <DownloadMiniMockup />
              </FeatureTile>

              <FeatureTile title="Drag & Drop" description="Drop files into your Project — and even convert them on the way.">
                <DragDropMiniMockup />
              </FeatureTile>

              <FeatureTile title="Project Folders" description="Whatever you're working on — right there.">
                <ProjectFolderMiniMockup />
              </FeatureTile>

              <FeatureTile title="Webify" description="Creating for the web? Make sure your content stays fast.">
                <WebifyMiniMockup />
              </FeatureTile>

              <FeatureTile title="Finder Quick Actions" description="Right-click any file in Finder to convert it instantly.">
                <FinderContextMenu />
              </FeatureTile>

              <FeatureTile title="Menu Bar App" description="Lives in your menu bar. Always one click away.">
                <MenuBarMiniMockup />
              </FeatureTile>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <a
              href="https://github.com/wilkebakker/thedownloader/releases/latest/download/TheDownloader-1.2.zip"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
            >
              <DownloadIcon />
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
          <p className="text-slate-500">Made with ❤️ for creatives everywhere</p>
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
            <p className="text-slate-400 mt-1">Email: wilke.bakker@gmail.com</p>
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

// Shared Components
function FeatureTile({ title, description, children }) {
  return (
    <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
      <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 text-sm mb-6">{description}</p>
      <div className="flex justify-center">{children}</div>
    </div>
  )
}

function DownloadIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CursorIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={`${className} text-slate-200 drop-shadow-md`} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
      <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L5.94 2.91a.5.5 0 0 0-.44.3z" />
    </svg>
  )
}

function FileIcon({ className = "w-4 h-4", color = "text-pink-400" }) {
  return (
    <svg className={`${className} ${color}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor" opacity="0.3" />
      <path d="M14 2v6h6M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

// Interactive Showcase
function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState('download')

  const tabContent = {
    download: {
      tagline: 'Paste links, pick format, done.',
      description: 'Grab videos and audio from YouTube, TikTok, and Instagram. Choose your format and quality, and it goes straight to your project folder.',
      features: ['YouTube, TikTok, Instagram', 'MP4, MOV, WAV, MP3', 'Quality selection', 'Batch downloads']
    },
    convert: {
      tagline: 'Any format. Any file.',
      description: 'Drag and drop any media file to convert it instantly. Creating for web? Use Webify to keep everything nimble.',
      features: ['Audio: WAV, MP3, FLAC', 'Video: H.264, H.265, ProRes', 'Images: WebP, PNG, JPG', 'Webify for web']
    },
    webify: {
      tagline: 'Optimized for the web.',
      description: 'Automatically compress and convert your images to WebP format. Smaller files, faster load times, happier visitors.',
      features: ['Auto WebP conversion', 'Smart compression', 'Up to 80% smaller', 'Batch processing']
    },
    setup: {
      tagline: 'One-click installation.',
      description: 'Install Finder Quick Actions to convert files with a right-click. No need to open the app.',
      features: ['Finder integration', 'Right-click convert', 'Auto-updates', 'Minimal footprint']
    }
  }

  const current = tabContent[activeTab]

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 items-start relative">
        <div className="min-h-[480px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <DownloadIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">THE DOWNLOADER</h3>
              <span className="text-xs text-green-400 font-medium">Available Now</span>
            </div>
          </div>

          <div className="mb-8 min-h-[100px]">
            <h4 className="text-xl font-semibold text-indigo-400 mb-2">{current.tagline}</h4>
            <p className="text-slate-400 text-lg leading-relaxed">{current.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8 min-h-[80px]">
            {current.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <CheckIcon />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/wilkebakker/thedownloader/releases/latest/download/TheDownloader-1.2.zip"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
          >
            <DownloadIcon />
            Download for Mac
            <span className="text-sm opacity-75">Free</span>
          </a>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl pointer-events-none" />
            <div className="relative z-10">
              <InteractiveMockup activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InteractiveMockup({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'download', label: 'Download', icon: '⬇️' },
    { id: 'convert', label: 'Convert', icon: '🔄' },
    { id: 'setup', label: 'Setup', icon: '⚙️' },
  ]

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl">
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-xs">📁</div>
          <span className="text-sm font-medium text-slate-300">Your Project</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2.5 py-1 text-[10px] bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded text-slate-300 transition-colors cursor-pointer">Open</button>
          <button className="px-2.5 py-1 text-[10px] bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded text-slate-300 transition-colors cursor-pointer">Change</button>
        </div>
      </div>

      <div className="flex justify-center px-4 pt-4 gap-2">
        {tabs.map((tab) => {
          const shouldPulse =
            (activeTab === 'download' && tab.id === 'convert') ||
            (activeTab === 'webify' && tab.id === 'setup') ||
            (activeTab === 'setup' && tab.id === 'download')

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                activeTab === tab.id || (activeTab === 'webify' && tab.id === 'convert')
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : shouldPulse
                    ? 'text-slate-400 hover:text-white hover:bg-indigo-600/50 animate-pulse-subtle'
                    : 'text-slate-400 hover:text-white hover:bg-indigo-600/50'
              }`}
              style={shouldPulse ? { animationDuration: '2s' } : {}}
            >
              <span className="text-xs">{tab.icon}</span>
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="p-5 min-h-[480px]">
        {activeTab === 'download' && <DownloadTab />}
        {(activeTab === 'convert' || activeTab === 'webify') && (
          <ConvertTab onWebifyClick={() => onTabChange('webify')} showWebifyPulse={activeTab === 'convert'} />
        )}
        {activeTab === 'setup' && <SetupTab />}
      </div>
    </div>
  )
}

function DownloadTab() {
  const [selectedFormat, setSelectedFormat] = useState(0)
  const formats = ['MP4', 'MOV', 'WAV', 'MP3']

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-3">
        <img src="/logos/yt logo.png" alt="YouTube" className="w-10 h-10 rounded-full object-cover hover:scale-110 transition-transform cursor-pointer" />
        <img src="/logos/tiktok logo.png" alt="TikTok" className="w-10 h-10 rounded-full object-cover hover:scale-110 transition-transform cursor-pointer" />
        <img src="/logos/reels logo.png" alt="Instagram" className="w-10 h-10 rounded-full object-cover hover:scale-110 transition-transform cursor-pointer" />
      </div>

      <div>
        <label className="text-[10px] text-slate-400 mb-1 block">Paste Your Links</label>
        <div className="bg-slate-800 rounded-lg p-3 border border-slate-700 hover:border-indigo-500/50 transition-colors cursor-text">
          <span className="text-slate-400 text-xs break-all">https://youtu.be/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ</span>
        </div>
      </div>

      <div>
        <label className="text-[10px] text-slate-400 mb-1 block">Format</label>
        <div className="grid grid-cols-4 gap-1.5">
          {formats.map((format, i) => (
            <button
              key={format}
              onClick={() => setSelectedFormat(i)}
              className={`py-2.5 rounded-lg text-center text-xs font-medium transition-all cursor-pointer ${
                selectedFormat === i
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-indigo-500/50 hover:text-slate-300'
              }`}
            >
              <div className="text-base">{i < 2 ? '🎬' : '🎵'}</div>
              {format}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between bg-slate-800 rounded-lg p-2.5 border border-slate-700 hover:border-indigo-500/50 transition-colors">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-sm">📁</span>
          <span className="text-xs text-slate-400">~/Desktop/Your Project</span>
        </div>
        <button className="text-[10px] px-2 py-1 text-slate-400 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded transition-colors cursor-pointer">Change</button>
      </div>

      <button className="w-full py-3 text-sm bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
        <span>⬇️</span> Download
      </button>
    </div>
  )
}

function ConvertTab({ onWebifyClick, showWebifyPulse }) {
  const [selectedAudio, setSelectedAudio] = useState(0)

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-2xl mb-2">🔄</div>
        <h3 className="font-semibold text-sm">Media Converter</h3>
      </div>

      <div className="border-2 border-dashed border-slate-700 hover:border-indigo-500/50 rounded-lg p-6 text-center transition-colors cursor-pointer group">
        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📄</div>
        <p className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors">Drop files here</p>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-400 mb-1">
            <span>🎵</span> Audio
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {['WAV 24-bit', 'MP3'].map((format, i) => (
              <button
                key={format}
                onClick={() => setSelectedAudio(i)}
                className={`py-2 rounded-lg text-center text-xs transition-all cursor-pointer ${
                  selectedAudio === i
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-indigo-500/50 hover:text-slate-300'
                }`}
              >
                {format}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 text-xs text-slate-400 mb-1">
            <span>🎬</span> Video
          </div>
          <div className="grid grid-cols-4 gap-1">
            {['H.264', 'H.265', 'WebM', 'ProRes'].map((format) => (
              <button key={format} className="py-1.5 bg-slate-800 border border-slate-700 rounded text-center text-[10px] text-slate-400 hover:border-indigo-500/50 hover:text-slate-300 transition-all cursor-pointer">
                {format}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 text-xs text-slate-400 mb-1">
            <span>🖼️</span> Image
          </div>
          <div className="grid grid-cols-3 gap-1">
            {['WebP', 'PNG', 'JPG'].map((format) => (
              <button key={format} className="py-1.5 bg-slate-800 border border-slate-700 rounded text-center text-[10px] text-slate-400 hover:border-indigo-500/50 hover:text-slate-300 transition-all cursor-pointer">
                {format}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 relative z-10">
        <button
          onClick={onWebifyClick}
          className={`py-2.5 text-xs bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg text-white flex items-center justify-center gap-1 transition-all cursor-pointer shadow-lg shadow-indigo-500/25 ${showWebifyPulse ? 'animate-pulse-subtle' : ''}`}
          style={showWebifyPulse ? { animationDuration: '5s' } : {}}
        >
          <span>🌐</span> Webify
        </button>
        <button className="py-2.5 text-xs bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded-lg text-slate-300 flex items-center justify-center gap-1 transition-colors cursor-pointer">
          <span>🔄</span> Convert
        </button>
      </div>
    </div>
  )
}

function SetupTab() {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-2xl mb-2">⚙️</div>
        <h3 className="font-semibold text-sm">Setup</h3>
      </div>

      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-indigo-500/30 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-sm">📁</div>
            <div>
              <div className="font-medium text-xs flex items-center gap-1.5">
                Finder Quick Actions
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-slate-400">Right-click: Webify, Convert to WAV</div>
            </div>
          </div>
          <button className="px-2.5 py-1.5 text-[10px] bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded-lg transition-colors cursor-pointer">Reinstall</button>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
        <div className="flex items-start gap-2">
          <span className="text-slate-500">ℹ️</span>
          <div>
            <div className="font-medium text-xs mb-1">Legal Notice</div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              This app is for downloading content you have rights to access. You are responsible for ensuring compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mini Mockups for Feature Tiles
function DownloadMiniMockup() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 w-full max-w-[240px]">
      <div className="bg-slate-800 rounded-lg p-2 mb-3 text-[10px] text-slate-500 truncate">
        https://youtu.be/dQw4w9WgXcQ
      </div>
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        <div className="bg-indigo-600 rounded py-1.5 text-[9px] text-center font-medium">MP4</div>
        <div className="bg-slate-800 rounded py-1.5 text-[9px] text-center text-slate-500">MOV</div>
        <div className="bg-slate-800 rounded py-1.5 text-[9px] text-center text-slate-500">WAV</div>
        <div className="bg-slate-800 rounded py-1.5 text-[9px] text-center text-slate-500">MP3</div>
      </div>
      <div className="bg-indigo-600 rounded-lg py-2 text-xs text-center font-medium">Download</div>
    </div>
  )
}

function DragDropMiniMockup() {
  return (
    <div className="rounded-xl p-4 w-full max-w-[240px] h-[140px] flex items-center justify-center relative">
      <div className="absolute top-[95px] right-[5px] flex items-center gap-1.5 bg-blue-500/20 rounded-lg px-2 py-1.5 border border-blue-500/30 z-10">
        <FileIcon />
        <span className="text-[10px] text-slate-300 font-medium">video.mov</span>
      </div>
      <div className="absolute top-[110px] right-[21px] z-20">
        <CursorIcon />
      </div>
      <div className="border-2 border-dashed border-indigo-500/50 rounded-xl p-8 text-center bg-indigo-500/5">
        <div className="text-base text-slate-300 font-medium mb-1">Drop to convert</div>
        <div className="text-xs text-slate-500">Saved to your Project</div>
      </div>
    </div>
  )
}

function ProjectFolderMiniMockup() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 w-full max-w-[240px] h-[140px] flex items-center justify-center">
      <div className="flex items-center gap-3 bg-slate-800 rounded-lg p-3 w-full">
        <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-lg">📁</div>
        <div>
          <div className="text-sm font-medium">Your Project</div>
          <div className="text-[10px] text-slate-500">~/Desktop/Your Project</div>
        </div>
      </div>
    </div>
  )
}

function WebifyMiniMockup() {
  return (
    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 w-full max-w-[280px]">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="bg-slate-800 rounded-lg p-3 text-center h-[88px] flex flex-col justify-center">
            <div className="text-2xl mb-1">🖼️</div>
            <div className="text-[10px] text-slate-400 mb-1">image.png</div>
            <div className="text-xs text-slate-500">2.4 MB</div>
          </div>
          <div className="h-5"></div>
        </div>
        <div className="text-indigo-400 text-lg pt-8">→</div>
        <div className="flex-1">
          <div className="bg-emerald-600/20 rounded-lg p-3 text-center border border-emerald-500/30 h-[88px] flex flex-col justify-center">
            <div className="text-2xl mb-1">🌐</div>
            <div className="text-[10px] text-emerald-300 mb-1">image.webp</div>
            <div className="text-xs text-slate-400">648 KB</div>
          </div>
          <div className="text-center mt-1 h-5">
            <span className="text-[10px] text-green-400 font-medium">-73% smaller</span>
          </div>
        </div>
      </div>
      <div className="mt-3 relative">
        <div className="bg-indigo-600 rounded-lg py-2 text-xs text-center text-white font-medium">
          🌐 Webify
        </div>
        <div className="absolute -bottom-2 right-16 z-10">
          <CursorIcon />
        </div>
      </div>
    </div>
  )
}

function FinderContextMenu() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-start gap-2">
        <div className="flex items-center gap-2 bg-blue-500/20 rounded-lg px-2 py-1.5 border border-blue-500/30 mt-1">
          <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor" opacity="0.3" />
            <path d="M14 2v6h6M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="11" cy="15" r="2" fill="currentColor" />
            <path d="M13 15V11l2-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[11px] text-slate-300 font-medium">audio.mp3</span>
        </div>

        <div className="relative -ml-4 mt-3">
          <svg className="w-8 h-8 text-indigo-400 absolute -top-3 -left-2 -rotate-[40deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="20" y1="7" x2="17" y2="9" />
            <line x1="18" y1="14" x2="15" y2="13" />
            <line x1="6" y1="14" x2="9" y2="13" />
          </svg>
          <svg className="w-7 h-7 text-slate-200 relative z-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
            <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L5.94 2.91a.5.5 0 0 0-.44.3z" />
          </svg>
        </div>

        <div className="bg-slate-200 rounded-xl shadow-2xl overflow-hidden w-52 -ml-3">
          {['Convert to WAV 24-bit', 'Webify'].map((item, i) => (
            <div key={item} className={`px-4 py-2.5 text-sm ${i === 0 ? 'bg-blue-500 text-white' : 'text-slate-800'}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MenuBarMiniMockup() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-800/90 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-3 shadow-lg border border-slate-700 mb-2">
        <div className="w-4 h-3 bg-slate-600 rounded-sm"></div>
        <div className="w-4 h-3 bg-slate-600 rounded-sm"></div>
        <div className="w-4 h-3 bg-slate-600 rounded-sm"></div>
        <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
        <div className="w-8 h-3 bg-slate-600 rounded-sm"></div>
      </div>
      <div className="w-2 h-2 border-l-2 border-b-2 border-slate-600 rotate-[-135deg] -mt-1 mb-1"></div>
      <div className="bg-slate-900 rounded-lg p-3 border border-slate-700 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
          <span className="text-xs font-medium">THE DOWNLOADER</span>
        </div>
        <div className="text-[10px] text-slate-400">Click to open...</div>
      </div>
    </div>
  )
}

export default App
