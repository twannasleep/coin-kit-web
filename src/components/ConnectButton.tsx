'use client';

import { useAppKit } from '@reown/appkit/react';

export default function ConnectButton() {
  // You can use the hook directly to access the modal
  const { open } = useAppKit();

  return (
    <div className="flex flex-col space-y-4 items-center">
      {/* Using the web component */}
      <appkit-button />

      {/* Using custom buttons */}
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => open()}
        >
          Connect Wallet
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={() => open({ view: 'Networks' })}
        >
          Networks
        </button>
      </div>
    </div>
  );
}
