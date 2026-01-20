// Future tools - saved for later use

export const futureTools = [
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

// ToolCard component for future tools
export function ToolCard({ tool, index }) {
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

// Usage:
// import { futureTools, ToolCard } from './future-tools'
//
// {/* Coming Soon Tools */}
// <div className="grid md:grid-cols-2 gap-6">
//   {futureTools.map((tool, index) => (
//     <ToolCard key={tool.id} tool={tool} index={index} />
//   ))}
// </div>
