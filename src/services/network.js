// src/services/network.js

const GET_CACHE_TTL_MS = 5 * 60 * 1000;
const memoryCache = new Map();

const getCacheKey = (url, method) => `${method}:${url}`;

const readCachedResponse = (cacheKey) => {
  const now = Date.now();
  const cached = memoryCache.get(cacheKey);

  if (cached && now - cached.timestamp < GET_CACHE_TTL_MS) {
    return cached.data;
  }

  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.sessionStorage.getItem(cacheKey);
  if (!stored) {
    return null;
  }

  try {
    const parsed = JSON.parse(stored);
    if (now - parsed.timestamp < GET_CACHE_TTL_MS) {
      memoryCache.set(cacheKey, parsed);
      return parsed.data;
    }
    window.sessionStorage.removeItem(cacheKey);
  } catch {
    window.sessionStorage.removeItem(cacheKey);
  }

  return null;
};

const writeCachedResponse = (cacheKey, data) => {
  const cached = {
    data,
    timestamp: Date.now(),
  };

  memoryCache.set(cacheKey, cached);

  if (typeof window !== 'undefined') {
    try {
      window.sessionStorage.setItem(cacheKey, JSON.stringify(cached));
    } catch {
      // Ignore storage quota errors and continue with in-memory caching.
    }
  }
};

const networkCallRequest = async (url, method = 'GET', body = null, headers = {}) => {
  const normalizedMethod = method.toUpperCase();
  const cacheKey = getCacheKey(url, normalizedMethod);

  if (normalizedMethod === 'GET') {
    const cachedResponse = readCachedResponse(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }
  }

  const options = {
    method: normalizedMethod,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      console.error('API Error:', data);
      throw new Error(data.message || 'Something went wrong');
    }

    if (normalizedMethod === 'GET') {
      writeCachedResponse(cacheKey, data);
    }

    return data;
  } catch (error) {
    console.error('Network Error:', error.message);
    throw error;
  }
};

export default networkCallRequest;


