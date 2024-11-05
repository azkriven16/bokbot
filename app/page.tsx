import BookReader from "@/features/reader/components/book-reader";
import React from "react";

export default function Home() {
    return (
        <BookReader url="https://react-reader.metabits.no/files/alice.epub" />
    );
}
