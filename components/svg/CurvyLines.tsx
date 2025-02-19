export default function CurvyLines({ className }: { className: string }) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 800 300">
      <path
        d="M0,50 Q100,150 200,50 T400,50 T600,50 T800,50"
        stroke="rgba(150, 150, 150, 0.5)"
        fill="transparent"
        strokeWidth="2"
      />
      <path
        d="M0,100 Q150,200 300,100 T600,100 T800,100"
        stroke="rgba(180, 180, 180, 0.4)"
        fill="transparent"
        strokeWidth="2"
      />
      <path
        d="M0,150 Q120,250 250,150 T500,150 T800,150"
        stroke="rgba(160, 160, 160, 0.4)"
        fill="transparent"
        strokeWidth="1.5"
      />
      <path
        d="M0,200 Q180,280 360,200 T720,200"
        stroke="rgba(170, 170, 170, 0.3)"
        fill="transparent"
        strokeWidth="1.5"
      />
      <path
        d="M0,250 Q200,350 400,250 T800,250"
        stroke="rgba(140, 140, 140, 0.3)"
        fill="transparent"
        strokeWidth="1.2"
      />
    </svg>
  );
}
