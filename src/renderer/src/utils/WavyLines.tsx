export const WavyLines = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1422 800"
      opacity="0.3"
      className="fixed overflow-hidden opacity-25 blur-sm top-[20vh] pointer-events-none"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
          <stop stopColor="hsl(206, 75%, 49%)" stopOpacity="1" offset="0%"></stop>
          <stop stopColor="hsl(331, 90%, 56%)" stopOpacity="1" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g strokeWidth="1" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round">
        <path d="M 0 448 Q 355.5 -100 711 400 Q 1066.5 900 1422 448" opacity="0.05"></path>
        <path d="M 0 420 Q 355.5 -100 711 400 Q 1066.5 900 1422 420" opacity="0.11"></path>
        <path d="M 0 392 Q 355.5 -100 711 400 Q 1066.5 900 1422 392" opacity="0.18"></path>
        <path d="M 0 364 Q 355.5 -100 711 400 Q 1066.5 900 1422 364" opacity="0.24"></path>
        <path d="M 0 336 Q 355.5 -100 711 400 Q 1066.5 900 1422 336" opacity="0.30"></path>
        <path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.37"></path>
        <path d="M 0 280 Q 355.5 -100 711 400 Q 1066.5 900 1422 280" opacity="0.43"></path>
        <path d="M 0 252 Q 355.5 -100 711 400 Q 1066.5 900 1422 252" opacity="0.49"></path>
        <path d="M 0 224 Q 355.5 -100 711 400 Q 1066.5 900 1422 224" opacity="0.56"></path>
        <path d="M 0 196 Q 355.5 -100 711 400 Q 1066.5 900 1422 196" opacity="0.62"></path>
        <path d="M 0 168 Q 355.5 -100 711 400 Q 1066.5 900 1422 168" opacity="0.68"></path>
        <path d="M 0 140 Q 355.5 -100 711 400 Q 1066.5 900 1422 140" opacity="0.75"></path>
        <path d="M 0 112 Q 355.5 -100 711 400 Q 1066.5 900 1422 112" opacity="0.81"></path>
        <path d="M 0 84 Q 355.5 -100 711 400 Q 1066.5 900 1422 84" opacity="0.87"></path>
        <path d="M 0 56 Q 355.5 -100 711 400 Q 1066.5 900 1422 56" opacity="0.94"></path>
      </g>
    </svg>
  )
}
