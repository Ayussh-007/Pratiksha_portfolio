import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #4f46e5, #ec4899)', // Indigo to Pink
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
          fontWeight: 900,
          fontFamily: 'monospace',
          letterSpacing: '-1px',
          paddingRight: '1px', // Visual balance
        }}
      >
        PN
      </div>
    ),
    {
      ...size,
    }
  );
}
