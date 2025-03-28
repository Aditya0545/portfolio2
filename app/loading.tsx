export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="space-y-4 text-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-2 border-white/20 rounded-full animate-spin"></div>
          <div className="absolute inset-[6px] border-t-2 border-purple-500/60 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-[12px] border-t-2 border-blue-500/60 rounded-full animate-spin-slower"></div>
        </div>
        <p className="text-sm text-white/60 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
