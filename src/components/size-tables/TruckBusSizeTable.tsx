import React from 'react';

interface TruckBusSize {
  size: string;
  description: string;
  plyRating: string;
  treadDepth: string;
  standardRim: string;
  ttTl: string;
}

export function TruckBusSizeTable({ sizes }: { sizes: TruckBusSize[] }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#0A0A0A] border-b border-[#2A2A2A]">
            <tr>
              <th className="px-4 py-3 text-left text-gray-400">Size</th>
              <th className="px-4 py-3 text-left text-gray-400">Description</th>
              <th className="px-4 py-3 text-left text-gray-400">Ply Rating</th>
              <th className="px-4 py-3 text-left text-gray-400">Tread Depth (mm)</th>
              <th className="px-4 py-3 text-left text-gray-400">Standard Rim</th>
              <th className="px-4 py-3 text-left text-gray-400">TT / TL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2A2A]">
            {sizes.map((s, i) => (
              <tr key={i} className="hover:bg-[#0A0A0A]">
                <td className="px-4 py-3 text-white font-medium">{s.size}</td>
                <td className="px-4 py-3 text-gray-300">{s.description}</td>
                <td className="px-4 py-3 text-gray-300">{s.plyRating}</td>
                <td className="px-4 py-3 text-gray-300">{s.treadDepth}</td>
                <td className="px-4 py-3 text-gray-300">{s.standardRim}</td>
                <td className="px-4 py-3 text-gray-300">{s.ttTl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
