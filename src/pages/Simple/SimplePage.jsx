import Header from '../../components/Header';
import Map from '../../components/Map/Map';
import Search from '../../components/Search';
import AppConfig from '../../constants/AppConfig';
import {
    ContentContainer,
    MapContainer,
    PanelContainer,
    // SearchCard,
    SimplePageContainer,
    StyledBuildingInfoCard,
    StyledJumpTo,
    StyledLink,
    StyledLinksContainer,
    StyledPanel,
    StyledPropertyCard,
} from './SimplePage-styled';

const SimplePage = () => {
    return (
        <SimplePageContainer>
            <Header />
            <ContentContainer>
                <PanelContainer>
                    <StyledPanel>
                        <StyledPropertyCard />
                        <StyledLinksContainer>
                            <StyledJumpTo>
                                Jump to: <StyledLink>Building</StyledLink> | <StyledLink>Land</StyledLink> |{' '}
                                <StyledLink>Tax</StyledLink> | <StyledLink>Valuation</StyledLink> |{' '}
                                <StyledLink>Permits</StyledLink> | <StyledLink>Sales</StyledLink> |{' '}
                                <StyledLink>Liens</StyledLink> | <StyledLink>Neighborhood</StyledLink>
                            </StyledJumpTo>
                        </StyledLinksContainer>
                        <StyledBuildingInfoCard />
                    </StyledPanel>
                    {/* <SearchCard>
                        <Search />
                    </SearchCard> */}
                </PanelContainer>
                <MapContainer>{/* <Map webmapId={AppConfig.webmap} /> */}</MapContainer>
            </ContentContainer>
        </SimplePageContainer>
    );
};

export default SimplePage;
