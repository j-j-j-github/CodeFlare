// Helper function to fetch images directly from Wikipedia based on card title or search query
// Returns authentic artwork/sculpture image URL or null if not found

const cache = new Map();

export async function fetchWikiImage(query) {
  if (!query) return null;
  const key = query.toLowerCase().trim();

  if (cache.has(key)) return cache.get(key);

  try {
    // 1. Try direct Wikipedia summary REST API first
    const formatted = encodeURIComponent(query.trim().replace(/ /g, '_'));
    const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${formatted}`;
    
    const summaryRes = await fetch(summaryUrl, {
      headers: { 'Accept': 'application/json' }
    });

    if (summaryRes.ok) {
      const data = await summaryRes.json();
      const imgUrl = data.thumbnail?.source || data.originalimage?.source;
      if (imgUrl) {
        // Upgrade thumbnail width if possible for crisp display
        const highResUrl = imgUrl.replace(/\/\d+px-/, '/600px-');
        cache.set(key, highResUrl);
        return highResUrl;
      }
    }

    // 2. Fallback to Wikipedia search API if title doesn't match directly
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail|original&pithumbsize=800&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&origin=*`;
    const searchRes = await fetch(searchUrl);

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      const pages = searchData.query?.pages;
      if (pages) {
        const firstKey = Object.keys(pages)[0];
        const page = pages[firstKey];
        const imgUrl = page.thumbnail?.source || page.originalimage?.source;
        if (imgUrl) {
          cache.set(key, imgUrl);
          return imgUrl;
        }
      }
    }
  } catch (err) {
    console.warn(`Could not fetch Wikipedia image for "${query}":`, err);
  }

  return null;
}
