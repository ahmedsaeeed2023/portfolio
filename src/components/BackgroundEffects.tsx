const BackgroundEffects = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-teal-500/6 blur-[100px]" />
      <div className="absolute -bottom-32 left-1/3 h-[350px] w-[350px] rounded-full bg-emerald-600/5 blur-[90px]" />
    </div>
  );
};

export default BackgroundEffects;
