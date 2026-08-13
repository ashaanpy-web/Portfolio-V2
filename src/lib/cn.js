import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 * Handles conflicting utility classes properly
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
