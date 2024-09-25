const AbstractSubmission = () => {
    return (
        <div className="min-h-screen bg-white">
        <header className="bg-blue-900 text-white py-16 px-4 relative overflow-hidden mb-8">
          <div className="absolute inset-0 bg-blue-800 rounded-b-[50%] h-[200%] -top-[100%]"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Abstract Information</h1>
          </div>
        </header>
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex items-center justify-left w-full px-4 md:px-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
            <a href="/Abstract.docx" download className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-blue-500">
              <span>Abstract format</span>
            </a>
          </div>
  
          <div className="flex items-center justify-left w-full px-4 md:px-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
            <a href="https://docs.google.com/forms/d/1taKwVMpbkPe8PhHVhQg0EUyKVwmbjnboP5r5pxDZwEo/edit" className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-blue-500">
              <span>Abstract form (Presenters)</span>
            </a>
          </div>
  
          <div className="w-full px-4 md:px-20">
            <ul>
              <li>
                <h2 className="text-xl md:text-2xl font-bold text-muted-foreground mb-4 text-red-600">
                  <p>Deadline for Abstract Submission: September 30, 2024</p>
                  <p>The selected abstracts will be notified by: October 15, 2024</p>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default AbstractSubmission;
