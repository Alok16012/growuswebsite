export const ResumeCTA = ({ onApply }) => (
  <section className="py-16 px-8 bg-white border-t border-black/5">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-primary-blue to-blue-600 p-16 rounded-3xl text-center">
        <h3 className="text-white text-4xl font-black mb-6">
          Don't See Your Role?
        </h3>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          We're always looking for talented people. Send us your resume and
          we'll keep you in mind for future openings.
        </p>
        <button
          onClick={onApply}
          className="bg-white text-primary-blue font-black px-10 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          SEND YOUR RESUME →
        </button>
      </div>
    </div>
  </section>
);
