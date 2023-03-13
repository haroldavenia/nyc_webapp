// Framework and third-party non-ui
import React, { useEffect, useRef, useState } from 'react';

import BasicCard from '../../BasicCard';

// Hooks, context, and constants
import AppRoutes from '../../../constants/AppRoutes';
import { useAppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

// Component specific modules (Component-styled, etc.)
import Panel from '../../Panel';
//import Search from '../../Search';

import Search from '@arcgis/core/widgets/Search';
import { SearchStyled } from '../../Search/Search-styled';

let searchElement = null;

const SearchPanel = () => {
    const navigate = useNavigate();
    const { parcelLayerView, updateSelectedParcel } = useAppContext();
    const { mapView } = useAppContext();
    const searchEl = useRef();

    useEffect(() => {
    }, [])
    
    
    useEffect(() => {
        if(!mapView || !searchEl.current || !parcelLayerView){
            return;
        }
        
        /*if(searchElement){
            return;
        }*/

        searchElement = new Search({ 
            view: mapView,
            container: searchEl.current,
            includeDefaultSources: false,
            sources: [
                {
                    layer: parcelLayerView.layer,
                    searchFields: ["BBL"],
                    displayField: "BBL",
                    exactMatch: false,
                    outFields: ["*"],
                    placeholder: "Search by BBL",
                    maxResults: 6,
                    maxSuggestions: 6,
                    suggestionsEnabled: true,
                    minSuggestCharacters: 0
                }
            ]
        });

        searchElement.on('search-complete', (event) => {
            const searchResult = event.results[0].results[0];
            mapView.goTo(searchResult.target);

            handleSearchComplete(searchResult);
        });

    }, [mapView, searchEl.current, parcelLayerView])

    const handleSearchComplete = async (searchResult) => {
        const { feature } = searchResult;
        
        try {
            const queryResults = await parcelLayerView.layer.queryFeatures({
                where: '1=1',
                outFields: ['*'],
                returnGeometry: true,
                geometry: feature.geometry,
            });
            const firstFeature = queryResults.features[0];

            if (firstFeature) {
                updateSelectedParcel(firstFeature);
                navigate(AppRoutes.parcel.path.replace(':bbl', firstFeature.attributes.BBL));
            } else {
                console.error('TODO: handle a miss from data query');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Panel title="Find a Property">
            <BasicCard>
                <SearchStyled ref={searchEl} />
            </BasicCard>
        </Panel>
    );
};

export default SearchPanel;
