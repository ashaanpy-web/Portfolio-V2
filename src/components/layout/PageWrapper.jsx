import { LiquidBlob } from "../ui";

/**
 * PageWrapper - Main page container with animated background blobs
 */
export function PageWrapper({ children }) {
  return (
    <div className="relative min-h-screen bg-base-ink overflow-hidden">
      {/* Animated liquid blob background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <LiquidBlob position="top-left" tone="primary" delay={0} />
        <LiquidBlob position="bottom-right" tone="secondary" delay={2} />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
