export function ApplicationSuccess({ jobTitle, onClose, onViewApplications }) {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100">
        <span className="text-3xl">🎉</span>
      </div>

      <h2 className="text-xl font-semibold text-green-700">
        Application Submitted!
      </h2>

      <p className="text-sm text-gray-600 mt-2">
        Your application for <strong>{jobTitle}</strong> has been submitted.
      </p>

      <p className="text-xs text-gray-500 mt-1">
        You can track your application status anytime.
      </p>

      <div className="mt-6 w-full flex gap-3">
        <button 
          onClick={onViewApplications}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          View Applications
        </button>

        <button 
          onClick={onClose}
          className="flex-1 border py-2 rounded-lg hover:bg-gray-100"
        >
          Close
        </button>
      </div>
    </div>
  );
}
