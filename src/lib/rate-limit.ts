interface RateLimitEntry {
  count: number;
  timestamp: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export class RateLimiter {
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number, windowMs: number) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  check(identifier: string): { success: boolean; remainingAttempts: number; resetTime: Date } {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Clean up old entries
    for (const [key, entry] of rateLimitStore.entries()) {
      if (entry.timestamp < windowStart) {
        rateLimitStore.delete(key);
      }
    }

    // Get or create entry
    const entry = rateLimitStore.get(identifier) || { count: 0, timestamp: now };

    // Reset count if outside window
    if (entry.timestamp < windowStart) {
      entry.count = 0;
      entry.timestamp = now;
    }

    const isAllowed = entry.count < this.maxRequests;
    if (isAllowed) {
      entry.count++;
      rateLimitStore.set(identifier, entry);
    }

    const resetTime = new Date(entry.timestamp + this.windowMs);
    const remainingAttempts = Math.max(0, this.maxRequests - entry.count);

    return {
      success: isAllowed,
      remainingAttempts,
      resetTime,
    };
  }
} 