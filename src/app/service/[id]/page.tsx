import { aiServices } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const service = aiServices.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {/* <Image
            src={service.logo}
            alt={`${service.name} logo`}
            width={200}
            height={200}
            className="rounded-lg"
          /> */}
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-lg text-gray-500 mb-4">{service.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-lg font-semibold">Category:</span>
            <span className="text-lg">{service.category}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-lg font-semibold">Pricing:</span>
            <span
              className={`text-lg font-semibold ${
                service.pricing === "Free"
                  ? "text-green-500"
                  : service.pricing === "Freemium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {service.pricing}
            </span>
          </div>
          <Link
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
}
