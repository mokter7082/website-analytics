import React, { Fragment } from 'react';

function PageData({ data }) {
  return (
    <Fragment>
      {data.length > 0 ? (
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
                console.log(item.percentage);
                return (
                  <div
                    key={i}
                    className="relative flex items-center justify-between px-2 py-2 my-1 text-sm"
                  >
                    <div className="z-[100]">{item.name}</div>
                    <div className="z-[100]">{item?.count}</div>

                    <div
                      className={`absolute top-0 left-0 h-full bg-orange-50`}
                      style={{ width: `${item.count}%` }}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[300px]">
          <div className="font-medium text-center text-gray-500">
            No data yet
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default PageData;
