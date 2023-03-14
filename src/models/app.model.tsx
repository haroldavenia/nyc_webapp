import { IMapView, IGraphic, ILayerView, IFeatureLayerView } from "./esri.model";

export interface IAppState {
  mapView?: IMapView,
  updateMapView?: (mapView: IMapView) => void,
  parcelLayerView?: IFeatureLayerView,
  selectedParcel?: IGraphic,
  updateSelectedParcel?: (featureSelect: IGraphic) => void,
}

export interface IAccountState {
  signIn?: () => void,
  signOut?: () => void,
  getAccountSessionStatus?: () => Promise<boolean>,
  getOriginRoute?: () => string | undefined,
  userAccessVerified?: boolean | null,
  errorMessage?: string | null,
  account?: any,
  orgUrlKey?: string,
  orgId?: string,
}


export interface IAccountManagerOptions {
  clientId?: string | null,
  redirectUri?: string | null,
  portalUrl: string,
  popup: boolean,
  params: any,
}