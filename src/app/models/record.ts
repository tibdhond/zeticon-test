export interface RecordItem {
    Administrative: {
        "LastModifiedDate": string | null,
        "IsSynchronized": boolean,
        "IsOriginal": boolean,
        "OrganisationName": string | null,
        "IsPreservation": boolean,
        "DepartmentName": string | null,
        "UserLastModifiedDate": string | null,
        "ArchiveDate": string | null,
        "OrganisationLongName": string | null,
        "RecordType": string | null,
        "RecordStatus": string | null,
        "IsAccess": boolean,
        "PublicationDate": string | null,
        "DeleteStatus": string | null,
        "Type": string | null,
        "MainRecordType": string | null,
        "ExternalId": string | null,
        "ExternalUrl": string | null,
        "Workflow": string | null,
        "IngestTape": string | null,
        "OrganisationExternalId": string | null,
        "LogicalDeletionDate": string | null,
        "ChildOrderFields": Record<any, any>,
        "RejectionDate": string | null,
        "ExternalUse": string | null
    },

    Dynamic?: Record<string, string>,

    Technical: {
        "ImageQuality": string | null,
        "PronomId": string | null,
        "OriginalExtension": string | null,
        "FileSize": number,
        "ImageSize": string | null,
        "MimeType": string | null,
        "Height": number,
        "Width": number,
        "Md5": string | null,
        "ImageOrientation": string | null,
        "VideoTechnical": string | null,
        "AudioTechnical": string | null,
        "VideoFormat": string | null,
        "Exif": Record<any, any>,
        "DurationTimeCode": string | null,
        "StartTimeCode": string | null,
        "EndTimeCode": string | null,
        "DurationFrames": number | null,
        "StartFrames": number | null,
        "EndFrames": number | null,
        "VideoCodec": string | null,
        "VideoFps": string | null,
        "VideoBitRate": number | null,
        "AudioCodec": string | null,
        "AudioChannels": number | null,
        "AudioSampleRate": number | null,
        "AudioBitRate": number | null,
        "AudioTracks": Record<any, any>,
        "BitRate": number | null,
        "Origin": string | null,
        "EssenceOffset": string | null,
        "EditUnitByteSize": string | null,
        "RunIn": string | null,
        "FramesPerEditUnit": string | null,
        "EditRate": string | null,
        "IndexEditRate": string | null
    },

    RightsManagement: {
        "Permissions": {
          "Export": Array<string | null>,
          "Write": Array<string | null>,
          "Read": Array<string | null>
        },

        "Zone": {
          "Id": string | null,
          "Name": string | null
        } | {},

        "ExpiryDate": string | null,
        "ExpiryStatus": string | null
    },

    
    Internal: {
        "OriginalStatus": string | null,
        "PathToKeyframe": string | null,
        "IsFragment": boolean,
        "PathToPreview": string | null,
        "UploadedById": string | null,
        "HasKeyframes": boolean,
        "Browses": {
          "Browse": {
              "BaseUrl": string | null,
              "PathToKeyframe"?: string | null,
              "PathToKeyframeThumb"?: string | null,
              "PathToVideo"?: string,
              "HasKeyframes": boolean,
              "Container": string | null,
              "Label": string | null,
              "FileSize": number,
              "Height"?: number,
              "VideoCodec"?: string,
              "BitRate"?: number,
              "Width"?: number,
              "AudioSampleRate"?: number,
              "VideoBitRate"?: number,
              "AudioBitRate"?: number,
              "AudioChannels"?: number,
              "AudioCodec"?: string,
              "VideoFps"?: string
            }[]
        },
        "MediaObjectId": string | null,
        "ArchiveStatus": string | null,
        "BrowseStatus": string | null,
        "RecordId": string | null,
        "IsInIngestSpace": boolean,
        "OrganisationId": string | null,
        "FragmentId": string | null,
        "PathToKeyframeThumb": string | null,
        "ContainsGeoData": boolean,
        "DepartmentId": string | null,
        "IngestSpaceId": string | null,
        "PathToVideo": string | null,
        "Distributions": {
          "Distribution": Array<any>
        },
        "Profiles": Record<any, any>
    },

    Descriptive: {
        "CreationDate": string | null,
        "UploadedBy": string | null,
        "KeyframeStart": number,
        "Keywords": {
          "Keyword": string[]
        },

        "OriginalFilename": string | null,
        "Title": string | null,
        "RightsOwner": string | null,
        "Description": string | null,
        "CreationDateLegacy": string | null,
        "Rights": string | null,
        "Categories": {
          "Category": Array<string>
        },
        "LimitedCategories": Record<any, any>,
        "Publisher": string | null,
        "Authors": Record<any, any>,
        "Location": string | null,
        "Address": Record<any, any>,
        "NonPreferredTerm": string | null,
        "Publications": {
          "Comment": Array<any>
        },
        "OriginalPath": string | null,
        "Position": Record<any, any>
    },

    Structural: {
        "HasChildren": boolean,
        "FragmentStartFrames": number,
        "FragmentEndFrames": number,
        "Versioning": {
          "Status": string | null,
          "Version": number
        },
        "Collections": {
          "Collection": Array<any>
        },
        "Sets": {
          "Set": Array<any>
        },
        "Newspapers": {
          "Newspaper": Array<any>
        },
        "Relations": Record<any, any>,
        "Fragments": {
          "Fragment": Array<any>
        },
        "MainFragment": string | null,
        "FragmentDurationTimeCode": string | null,
        "FragmentStartTimeCode": string | null,
        "FragmentEndTimeCode": string | null,
        "FragmentDurationFrames": number | null,
        "ReferenceCodes": Record<any, any>,
        "ParentRecordId": string | null,
        "ReferenceTitles": Record<any, any>,
        "FieldDefinition": Record<any, any>,
        "PreviewRecordId": string | null
    },

    Context: {
        "IsEditable": boolean,
        "IsDeletable": boolean,
        "IsPublic": boolean,
        "IsExportable": boolean,
        "Profiles": Array<any>
    }
}