import React from "react";
import AboutPage from "@/components/AboutPage";
import CorporateFooter from "@/components/CorporateFooter";
import { getEmployees } from "@/lib/employees/getEmployees";

// Fetch employees from the DB on every request so admin changes show immediately
export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Us | The Corporate Hub - CA • CS • CMA Expertise Under One Roof",
  description: "Learn about The Corporate Hub. Multidisciplinary business consulting & complete corporate services led by CS Dhaval Gohel, CA Rahulsingh Panwar, and CMA Arjun Bhatt. Supporting entrepreneurs across India.",
  keywords: [
    "The Corporate Hub About Us",
    "CS Dhaval Gohel",
    "CA Rahulsingh Panwar",
    "CMA Arjun Bhatt",
    "CA CS CMA corporate services",
    "Business consulting Ahmedabad",
    "Startup consulting India"
  ],
  openGraph: {
    title: "About Us | The Corporate Hub",
    description: "Building Businesses. Strengthening Bharat. CA • CS • CMA Expertise — All Under One Roof.",
    type: "website",
    url: "https://thecorporatehub.in/about",
  }
};

export default async function Page() {
  const employees = await getEmployees();

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <AboutPage employees={employees} />
      </div>
      <CorporateFooter />
    </main>
  );
}
