"use client";

import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { cn } from "@/lib/utils";

interface BookReaderProps {
    url: string;
    className?: string;
}

const BookReader: React.FC<BookReaderProps> = ({ url, className }) => {
    const [location, setLocation] = useState<string | number>(0);

    return (
        <div className={cn(className)} style={{ height: "100vh" }}>
            <ReactReader
                url={url}
                location={location}
                locationChanged={(epubcfi: string) => setLocation(epubcfi)}
                
            />
        </div>
    );
};

export default BookReader;
