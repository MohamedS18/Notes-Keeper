function Loader() {
    const quotes = [
        "Flipping through old pages...",
        "Unlocking your memories...",
        "Sharpening the pencil...",
        "Turning the pages of time...",
        "Saving your thoughts...",
        "Sealing your secrets...",
        "Gathering scattered notes...",
        "Binding your journal...",
        "Finding your lost ideas...",
        "Whispering words onto paper...",
        "Rewriting yesterday’s thoughts...",
        "Pressing flowers between pages...",
        "Filling the blank pages...",
        "Letting ink flow on the paper...",
        "Rekindling forgotten dreams...",
        "Preparing the journal for new stories...",
        "Loading your personal archive...",
        "Revisiting past entries...",
        "Doodling in the margins...",
        "Unlocking the vault of memories..."
      ];
      
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  return (
    <>
      <div className="loading-container">
        <div className="load-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="bi bi-bookmark-heart-fill load-i"
            viewBox="0 0 16 16"
          >
            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
          </svg>
        </div>
        <div>{randomQuote}</div>
      </div>
    </>
  );
}

export { Loader };
