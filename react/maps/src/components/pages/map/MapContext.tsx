import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { IAlert } from "../../utils/alert";
import { defaultSearchOption, ISearchOptionMap } from "../../utils/search";

interface MapContextData {
    selectedMarker: IAlert | null;
    setSelectedMarker: React.Dispatch<React.SetStateAction<IAlert | null>>;

    searchOptions: ISearchOptionMap;
    setSearchOptions: React.Dispatch<React.SetStateAction<ISearchOptionMap>>;
    cardRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const MapContext = createContext<MapContextData>({
    selectedMarker: null,
    setSelectedMarker: () => { },
    searchOptions: defaultSearchOption,
    setSearchOptions: () => { },
    cardRefs: { current: [] },
});

export const useMapContext = () => useContext(MapContext);

export const MapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedMarker, setSelectedMarker] = useState<IAlert | null>(null);
    const [searchOptions, setSearchOptions] = useState<ISearchOptionMap>(defaultSearchOption)
    const cardRefs = useRef<(HTMLElement | null)[]>([]);

    return (
        <MapContext.Provider value={{
            selectedMarker,
            setSelectedMarker,
            searchOptions,
            setSearchOptions,
            cardRefs
        }}>
            {children}
        </MapContext.Provider>
    );
};
