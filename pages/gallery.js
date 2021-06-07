import MainLayout from "layouts/main";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const files = [
  {
    title: "1",
    size: "3.9 MB",
    alt: "alt tag",
    tag: "free",
    source:
      "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80",
  },
  {
    title: "2",
    size: "3.9 MB",
    alt: "alt tag",
    tag: "new",
    source:
      "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "2",
    size: "3.9 MB",
    alt: "alt tag",
    tag: "free",
    source:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80",
  },
  {
    title: "2",
    size: "3.9 MB",
    alt: "alt tag",
    tag: "pro",
    source:
      "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  },
  {
    title: "2",
    size: "3.9 MB",
    alt: "alt tag",
    tag: "new",
    source:
      "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "2",
    size: "3.9 MB",
    alt: "alt tag",
    tag: "pro",
    source:
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2301&q=80",
  },
];

export default function Gallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [tag, setTag] = useState("all");
  const [selectedOption, setSelectedOption] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(files)
      : setFilteredImages(files.filter((file) => file.tag === tag));
  }, [tag]);

  useEffect(() => {
    selectedOption === "all"
      ? setFilteredImages(files)
      : setFilteredImages(files.filter((file) => file.tag === selectedOption));
  }, [selectedOption]);

  const images = filteredImages.map(function (image) {
    return image.source;
  });

  const imageCards = filteredImages.map((file) => (
    <li key={file.source} className="relative">
      <div className="focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 group block w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
        <Image
          className="group-hover:opacity-75 object-cover "
          src={file.source}
          layout="fill"
          alt={file.alt}
        />
        <button
          onClick={() => showImage(file.source)}
          type="button"
          className="focus:outline-none absolute inset-0"
        >
          <span className="sr-only">View details for {file.title}</span>
        </button>
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {file.title}
      </p>

      <p className="block text-sm font-medium text-gray-500 pointer-events-none">
        {file.size}
      </p>
    </li>
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      let firstImage = images[0];
      setImageToShow(firstImage);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      let lastImage = images[images.length - 1];
      setImageToShow(lastImage);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const tabs = [
    {
      name: "All",
      href: "#",
      tag: "all",
    },
    {
      name: "New",
      href: "#",
      tag: "new",
    },
    {
      name: "Free",
      href: "#",
      tag: "free",
    },
    {
      name: "Pro",
      href: "#",
      tag: "pro",
    },
  ];

  const TagButtons = tabs.map((tab, tabIdx) => (
    <button
      key={tab.name}
      onClick={() => setTag(tab.tag)}
      className={classNames(
        tag === tab.tag ? "text-gray-900" : "text-gray-500 hover:text-gray-700",
        tabIdx === 0 ? "rounded-l-lg" : "",
        tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
        " focus:outline-none  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
      )}
      aria-current={tab.current ? "page" : undefined}
    >
      <span>{tab.name}</span>
      <span
        aria-hidden="true"
        className={classNames(
          tag === tab.tag ? "bg-orange-500" : "bg-transparent",
          "absolute inset-x-0 bottom-0 h-0.5"
        )}
      />
    </button>
  ));

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <MainLayout>
      <div className="my-16 container mx-auto px-8">
        <div className="">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="block w-full focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"
            >
              {tabs.map((tab) => (
                <option value={tab.tag} key={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav
              className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
              aria-label="Tabs"
            >
              {TagButtons}
            </nav>
          </div>
        </div>
        <ul
          role="list"
          className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {imageCards}
        </ul>

        <Transition.Root show={lightboxDisplay} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-30 inset-0 overflow-y-auto"
            open={lightboxDisplay}
            onClose={hideLightBox}
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-screen-lg sm:w-full sm:p-6">
                  <div className="aspect-w-3 aspect-h-2">
                    <Image
                      className=" block w-full rounded-lg overflow-hidden"
                      src={imageToShow}
                      layout="fill"
                    />
                  </div>
                  <div className="flex pt-6 space-x-10 justify-between">
                    <button type="button" className="" onClick={showPrev}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:text-sm"
                      onClick={hideLightBox}
                    >
                      Go back to dashboard
                    </button>
                    <button type="button" className=" " onClick={showNext}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </MainLayout>
  );
}
