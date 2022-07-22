const NextBtn = ({ page, setPage, totalPage }) => {
  return (
    <button
      className={`ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
        page >= totalPage
          ? "text-slate-400"
          : "bg-indigo-600 hover:bg-indigo-700"
      }`}
      onClick={() => setPage(page + 1)}
      disabled={page >= totalPage ? true : false}
    >
      Next
    </button>
  );
};

const PrevBtn = ({ page, setPage, totalPage }) => {
  return (
    <button
      className={`ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
        page <= 1 ? "text-slate-400" : "bg-indigo-600 hover:bg-indigo-700"
      }`}
      onClick={() => setPage(page - 1)}
      disabled={page <= 1 ? true : false}
    >
      Prev
    </button>
  );
};

export { NextBtn, PrevBtn };
