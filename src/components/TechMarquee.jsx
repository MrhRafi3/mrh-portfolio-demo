export default function TechMarquee() {
  const technologies = [
    'Flutter',
    'Dart',
    'Modern C++',
    'Data Structures & Algorithms',
    'Custom Painters',
    'Impeller 120 FPS',
    'Riverpod & Bloc',
    'Firebase',
    'Material 3 UI',
    'REST APIs & JSON',
    'Git & GitHub',
    'Android Studio & Xcode',
  ]

  // Duplicate array to achieve seamless endless looping marquee
  const items = [...technologies, ...technologies]

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <div key={i} className="marquee-item">
            <span>{tech}</span>
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}
