// Framework and third-party non-ui
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';
import { useSearch } from '../../hooks/useSearch';
import { SearchStyled } from './Search-styled';

interface IProps {
    onSearchComplete(value: any): void
}

const Search: React.FC<IProps> = ({ onSearchComplete }) => {
    const [t] = useTranslation();
    const [searchElementRef, search] = useSearch();
    const [completeHandler, setCompleteHandler] = useState<any>();
    const { mapView } = useAppContext();

    useEffect(() => {
        if (search) {
            if (!completeHandler) {
                const searchCompleteHandle = search.on('search-complete', function (event: any) {
                    try {
                        const searchResult = event.results[0].results[0];
                        mapView?.goTo(searchResult.target);
                        if (onSearchComplete) {
                            onSearchComplete(searchResult);
                        }
                    } catch (err) {
                        console.warn('code issue in search widget', err);
                    }
                });
                setCompleteHandler(searchCompleteHandle);
            }
        }
        return () => {
            if (completeHandler) {
                completeHandler.remove();
                setCompleteHandler(null);
            }
        };
    }, [completeHandler, search, mapView]);

    return <SearchStyled searchRef={searchElementRef} />;
};

export default Search;
