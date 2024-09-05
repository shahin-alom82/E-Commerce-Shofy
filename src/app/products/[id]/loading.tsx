import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const LoadingPage = () => {
      return <Container className="py-10">
            <div className="flex items-center justify-center gap-4 text-2xl text-gray-700">
                  Loading...
                  <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>

      </Container>;
};

export default LoadingPage;