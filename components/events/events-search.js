import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const months = [
  { title: "January", value: "1" },
  { title: "February", value: "2" },
  { title: "March", value: "3" },
  { title: "April", value: "4" },
  { title: "May", value: "5" },
  { title: "June", value: "6" },
  { title: "July", value: "7" },
  { title: "August", value: "8" },
  { title: "Septemeber", value: "9" },
  { title: "October", value: "10" },
  { title: "Novemeber", value: "11" },
  { title: "December", value: "12" },
];

const years = [{ value: "2021" }, { value: "2022" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EventsSearch(props) {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  function submitHandler(event) {
    event.preventDefault();

    const submittedMonth = selectedMonth.value;
    const submittedYear = selectedYear.value;

    props.onSearch(submittedYear, submittedMonth);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
        <div className="col-start-1 col-end-2">
          <Listbox value={selectedYear} onChange={setSelectedYear}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Year
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="w-full inline-flex truncate">
                      <span className="truncate">{selectedYear.value}</span>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      static
                      className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {years.map((year) => (
                        <Listbox.Option
                          key={year.value}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={year}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "block truncate"
                                  )}
                                >
                                  {year.value}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        <div>
          <Listbox value={selectedMonth} onChange={setSelectedMonth}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Month
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">
                      {selectedMonth.title}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      static
                      className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {months.map((month) => (
                        <Listbox.Option
                          key={month.value}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={month}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "block truncate"
                                  )}
                                >
                                  {month.title}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>
      <div className="mt-4  sm:flex-shrink-0">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        >
          Find Events
        </button>
      </div>
    </form>
  );
}

// import { useRef } from "react";
// import Button from "../ui/button";

// function EventsSearch(props) {
//   const yearInputRef = useRef();
//   const monthInputRef = useRef();

//   function submitHandler(event) {
//     event.preventDefault();

//     const selectedYear = yearInputRef.current.value;
//     const selectedMonth = monthInputRef.current.value;

//     props.onSearch(selectedYear, selectedMonth);
//   }
//   return (
//     <form className="" onSubmit={submitHandler}>
//       <div className="">
//         <div className="">
//           <label htmlFor="year">Year</label>
//           <select id="year" ref={yearInputRef}>
//             <option value="2021">2021</option>
//             <option value="2022">2022</option>
//           </select>
//         </div>
//         <div className="">
//           <label htmlFor="month">Month</label>
//           <select id="month" ref={monthInputRef}>
//             <option value="1">January</option>
//             <option value="2">February</option>
//             <option value="3">March</option>
//             <option value="4">April</option>
//             <option value="5">May</option>
//             <option value="6">June</option>
//             <option value="7">July</option>
//             <option value="8">August</option>
//             <option value="9">Septemer</option>
//             <option value="10">October</option>
//             <option value="11">November</option>
//             <option value="12">December</option>
//           </select>
//         </div>
//       </div>
//       <Button>Find Events</Button>
//     </form>
//   );
// }

// export default EventsSearch;
