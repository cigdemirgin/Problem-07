import Image from "next/image";


function Avatar({ width, height, name, profileText }) {
  return (
    <div className="group block p-8 flex-shrink-0">
      <div className="flex items-center">
        <div>
          <Image
            className="inline-block h-12 w-12 rounded-full"
            src="/photo.png"
            alt=""
            width={width}
            height={height}
          />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
            {profileText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Avatar
        profileText="Profile bakın"
        name="Tom Cook"
        width={500}
        height={500}
      />
    </>
  );
}
