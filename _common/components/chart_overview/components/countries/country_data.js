import React from 'react';

function CountryDataComponent({ data }) {
  return (
    <div className="flex flex-col flex-grow fade-enter-active">
      <div class="flex items-center justify-between mt-3 mb-2 text-xs font-bold tracking-wide text-gray-500">
        <span>Source</span>
        <div class="text-right">
          <span class="inline-block w-20">Visitors</span>
        </div>
      </div>
      <div className="flex-grow">
        {data &&
          data?.map((item, i) => {
            return (
              <div
                key={i}
                className="relative flex items-center justify-between px-2 py-2 my-1 text-sm"
              >
                <div className="z-[100]">{item.name}</div>
                <div className="z-[100]">{item?.count}</div>
                <div
                  className={`absolute top-0 left-0 h-full bg-orange-50`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CountryDataComponent;
