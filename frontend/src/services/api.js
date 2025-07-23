// Basic API helper
export async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`/api/${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  return res.json();
} 