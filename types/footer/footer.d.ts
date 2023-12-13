namespace IFooter {
  interface ApiResponse {
    data: Data;
  }
  
  interface Data {
    id: number;
    attributes: Attributes;
  }
  
  interface Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    data: NestedData;
  }
  
  interface NestedData {
    id: number;
    Locations: Location[];
    quickLinks: QuickLink[];
    image: ImageData;
  }
  
  interface Location {
    id: number;
    location: string;
    address: string;
    telephone: string;
  }
  
  interface QuickLink {
    id: number;
    text: string;
    address: string;
  }
  
  interface ImageData {
    data: ImageDataDetails;
  }
  
  interface ImageDataDetails {
    id: number;
    attributes: ImageAttributes;
  }
  
  interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: string;
    updatedAt: string;
  }
  
  interface ImageFormats {
    large?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  }
  
  interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    provider_metadata: ProviderMetadata;
  }
  
  interface ProviderMetadata {
    public_id: string;
    resource_type: string;
  }
  
}