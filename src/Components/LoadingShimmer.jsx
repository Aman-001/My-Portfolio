export default function LoadingShimmer() {
  return (
    <div className="min-h-screen px-6 py-16 flex justify-center">
      <div className="w-full max-w-5xl space-y-8">
        <div className="h-10 w-40 rounded-md shimmer" />
        <div className="space-y-4">
          <div className="h-8 w-3/4 rounded-md shimmer" />
          <div className="h-4 w-11/12 rounded-md shimmer" />
          <div className="h-4 w-10/12 rounded-md shimmer" />
          <div className="h-4 w-9/12 rounded-md shimmer" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-40 rounded-xl shimmer" />
          <div className="h-40 rounded-xl shimmer" />
        </div>
      </div>
    </div>
  );
}
