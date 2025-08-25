import { aiServices } from "@/data/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {aiServices.map((service) => (
          <Link href={`/service/${service.id}`} key={service.id}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {/* <Image
                    src={service.logo}
                    alt={`${service.name} logo`}
                    width={40}
                    height={40}
                  /> */}
                  <CardTitle>{service.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm text-gray-500">
                    {service.category}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
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
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
