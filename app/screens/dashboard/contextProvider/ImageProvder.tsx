import React, { createContext, useContext, useState } from "react";

type ImageContextType = {
    image: string | null;
    setImage: (image: string | null) => void;
};

const ImageContext = createContext<ImageContextType | null>(null);

export function ImageProvider({ children }: {children: React.ReactNode}) {
    const [image, setImage] = useState<string | null>(null);

    return (
        <ImageContext.Provider value={{ image, setImage }}>
            {children}
        </ImageContext.Provider>
    );
}

export function useImage() {
    const context = useContext(ImageContext);
    if (!context) throw new Error("useImage error!");
    return context;
}
