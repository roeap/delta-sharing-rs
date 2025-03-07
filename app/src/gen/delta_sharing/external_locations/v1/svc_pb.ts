// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file delta_sharing/external_locations/v1/svc.proto (package delta_sharing.external_locations.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb";
import type { ExternalLocationInfo, ExternalLocationInfoJson, ExternalLocationInfoSchema } from "./models_pb";
import { file_delta_sharing_external_locations_v1_models } from "./models_pb";
import { file_gnostic_openapi_v3_annotations } from "../../../gnostic/openapi/v3/annotations_pb";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import { file_google_api_client } from "../../../google/api/client_pb";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import { file_google_api_resource } from "../../../google/api/resource_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file delta_sharing/external_locations/v1/svc.proto.
 */
export const file_delta_sharing_external_locations_v1_svc: GenFile = /*@__PURE__*/
  fileDesc("Ci1kZWx0YV9zaGFyaW5nL2V4dGVybmFsX2xvY2F0aW9ucy92MS9zdmMucHJvdG8SI2RlbHRhX3NoYXJpbmcuZXh0ZXJuYWxfbG9jYXRpb25zLnYxIrkBChxMaXN0RXh0ZXJuYWxMb2NhdGlvbnNSZXF1ZXN0EicKC21heF9yZXN1bHRzGAIgASgFQg3gQQG6SAcaBRDoByAASACIAQESHAoKcGFnZV90b2tlbhgDIAEoCUID4EEBSAGIAQESIAoOaW5jbHVkZV9icm93c2UYBCABKAhCA+BBAUgCiAEBQg4KDF9tYXhfcmVzdWx0c0INCgtfcGFnZV90b2tlbkIRCg9faW5jbHVkZV9icm93c2UiqAEKHUxpc3RFeHRlcm5hbExvY2F0aW9uc1Jlc3BvbnNlElUKEmV4dGVybmFsX2xvY2F0aW9ucxgBIAMoCzI5LmRlbHRhX3NoYXJpbmcuZXh0ZXJuYWxfbG9jYXRpb25zLnYxLkV4dGVybmFsTG9jYXRpb25JbmZvEhwKD25leHRfcGFnZV90b2tlbhgCIAEoCUgAiAEBQhIKEF9uZXh0X3BhZ2VfdG9rZW4itQIKHUNyZWF0ZUV4dGVybmFsTG9jYXRpb25SZXF1ZXN0EjIKBG5hbWUYASABKAlCJOBBArpIHnIcMhpeW2Etel1bMC05YS16Ll9dKlswLTlhLXpdJBIYCgN1cmwYAiABKAlCC+BBArpIBXIDiAEBEj0KD2NyZWRlbnRpYWxfbmFtZRgDIAEoCUIk4EECukgechwyGl5bYS16XVswLTlhLXouX10qWzAtOWEtel0kEhsKCXJlYWRfb25seRgEIAEoCEID4EECSACIAQESGQoHY29tbWVudBgFIAEoCUID4EEBSAGIAQESIQoPc2tpcF92YWxpZGF0aW9uGAYgASgIQgPgQQFIAogBAUIMCgpfcmVhZF9vbmx5QgoKCF9jb21tZW50QhIKEF9za2lwX3ZhbGlkYXRpb24iUAoaR2V0RXh0ZXJuYWxMb2NhdGlvblJlcXVlc3QSMgoEbmFtZRgBIAEoCUIk4EECukgechwyGl5bYS16XVswLTlhLXouX10qWzAtOWEtel0kIqEDCh1VcGRhdGVFeHRlcm5hbExvY2F0aW9uUmVxdWVzdBIyCgRuYW1lGAEgASgJQiTgQQK6SB5yHDIaXlthLXpdWzAtOWEtei5fXSpbMC05YS16XSQSFQoDdXJsGAIgASgJQgPgQQFIAIgBARIhCg9jcmVkZW50aWFsX25hbWUYAyABKAlCA+BBAUgBiAEBEhsKCXJlYWRfb25seRgEIAEoCEID4EEBSAKIAQESFwoFb3duZXIYBSABKAlCA+BBAUgDiAEBEhkKB2NvbW1lbnQYBiABKAlCA+BBAUgEiAEBEhoKCG5ld19uYW1lGAcgASgJQgPgQQFIBYgBARIXCgVmb3JjZRgIIAEoCEID4EEBSAaIAQESIQoPc2tpcF92YWxpZGF0aW9uGAkgASgIQgPgQQFIB4gBAUIGCgRfdXJsQhIKEF9jcmVkZW50aWFsX25hbWVCDAoKX3JlYWRfb25seUIICgZfb3duZXJCCgoIX2NvbW1lbnRCCwoJX25ld19uYW1lQggKBl9mb3JjZUISChBfc2tpcF92YWxpZGF0aW9uInYKHURlbGV0ZUV4dGVybmFsTG9jYXRpb25SZXF1ZXN0EjIKBG5hbWUYASABKAlCJOBBArpIHnIcMhpeW2Etel1bMC05YS16Ll9dKlswLTlhLXpdJBIXCgVmb3JjZRgCIAEoCEID4EEBSACIAQFCCAoGX2ZvcmNlMqkIChhFeHRlcm5hbExvY2F0aW9uc1NlcnZpY2US1QEKFUxpc3RFeHRlcm5hbExvY2F0aW9ucxJBLmRlbHRhX3NoYXJpbmcuZXh0ZXJuYWxfbG9jYXRpb25zLnYxLkxpc3RFeHRlcm5hbExvY2F0aW9uc1JlcXVlc3QaQi5kZWx0YV9zaGFyaW5nLmV4dGVybmFsX2xvY2F0aW9ucy52MS5MaXN0RXh0ZXJuYWxMb2NhdGlvbnNSZXNwb25zZSI1ukcXKhVMaXN0RXh0ZXJuYWxMb2NhdGlvbnOC0+STAhUSEy9leHRlcm5hbF9sb2NhdGlvbnMS0gEKFkNyZWF0ZUV4dGVybmFsTG9jYXRpb24SQi5kZWx0YV9zaGFyaW5nLmV4dGVybmFsX2xvY2F0aW9ucy52MS5DcmVhdGVFeHRlcm5hbExvY2F0aW9uUmVxdWVzdBo5LmRlbHRhX3NoYXJpbmcuZXh0ZXJuYWxfbG9jYXRpb25zLnYxLkV4dGVybmFsTG9jYXRpb25JbmZvIjm6RxgqFkNyZWF0ZUV4dGVybmFsTG9jYXRpb26C0+STAhg6ASoiEy9leHRlcm5hbF9sb2NhdGlvbnMSzQEKE0dldEV4dGVybmFsTG9jYXRpb24SPy5kZWx0YV9zaGFyaW5nLmV4dGVybmFsX2xvY2F0aW9ucy52MS5HZXRFeHRlcm5hbExvY2F0aW9uUmVxdWVzdBo5LmRlbHRhX3NoYXJpbmcuZXh0ZXJuYWxfbG9jYXRpb25zLnYxLkV4dGVybmFsTG9jYXRpb25JbmZvIjq6RxUqE0dldEV4dGVybmFsTG9jYXRpb26C0+STAhwSGi9leHRlcm5hbF9sb2NhdGlvbnMve25hbWV9EtkBChZVcGRhdGVFeHRlcm5hbExvY2F0aW9uEkIuZGVsdGFfc2hhcmluZy5leHRlcm5hbF9sb2NhdGlvbnMudjEuVXBkYXRlRXh0ZXJuYWxMb2NhdGlvblJlcXVlc3QaOS5kZWx0YV9zaGFyaW5nLmV4dGVybmFsX2xvY2F0aW9ucy52MS5FeHRlcm5hbExvY2F0aW9uSW5mbyJAukcYKhZVcGRhdGVFeHRlcm5hbExvY2F0aW9ugtPkkwIfOgEqMhovZXh0ZXJuYWxfbG9jYXRpb25zL3tuYW1lfRKzAQoWRGVsZXRlRXh0ZXJuYWxMb2NhdGlvbhJCLmRlbHRhX3NoYXJpbmcuZXh0ZXJuYWxfbG9jYXRpb25zLnYxLkRlbGV0ZUV4dGVybmFsTG9jYXRpb25SZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ij26RxgqFkRlbGV0ZUV4dGVybmFsTG9jYXRpb26C0+STAhwqGi9leHRlcm5hbF9sb2NhdGlvbnMve25hbWV9QsICCidjb20uZGVsdGFfc2hhcmluZy5leHRlcm5hbF9sb2NhdGlvbnMudjFCCFN2Y1Byb3RvUAFaZ2dpdGh1Yi5jb20vZGVsdGEtaW5jdWJhdG9yL2RlbHRhLXNoYXJpbmctcnMvZ28vZGVsdGFfc2hhcmluZy9leHRlcm5hbF9sb2NhdGlvbnMvdjE7ZXh0ZXJuYWxfbG9jYXRpb25zdjGiAgNERViqAiFEZWx0YVNoYXJpbmcuRXh0ZXJuYWxMb2NhdGlvbnMuVjHKAiFEZWx0YVNoYXJpbmdcRXh0ZXJuYWxMb2NhdGlvbnNcVjHiAi1EZWx0YVNoYXJpbmdcRXh0ZXJuYWxMb2NhdGlvbnNcVjFcR1BCTWV0YWRhdGHqAiNEZWx0YVNoYXJpbmc6OkV4dGVybmFsTG9jYXRpb25zOjpWMWIGcHJvdG8z", [file_buf_validate_validate, file_delta_sharing_external_locations_v1_models, file_gnostic_openapi_v3_annotations, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_empty, file_google_protobuf_struct]);

/**
 * List external locations
 *
 * @generated from message delta_sharing.external_locations.v1.ListExternalLocationsRequest
 */
export type ListExternalLocationsRequest = Message<"delta_sharing.external_locations.v1.ListExternalLocationsRequest"> & {
  /**
   * The maximum number of results per page that should be returned.
   *
   * @generated from field: optional int32 max_results = 2;
   */
  maxResults?: number;

  /**
   * Opaque pagination token to go to next page based on previous query.
   *
   * @generated from field: optional string page_token = 3;
   */
  pageToken?: string;

  /**
   * Whether to include schemas in the response for which the principal can only access selective metadata for
   *
   * @generated from field: optional bool include_browse = 4;
   */
  includeBrowse?: boolean;
};

/**
 * List external locations
 *
 * @generated from message delta_sharing.external_locations.v1.ListExternalLocationsRequest
 */
export type ListExternalLocationsRequestJson = {
  /**
   * The maximum number of results per page that should be returned.
   *
   * @generated from field: optional int32 max_results = 2;
   */
  maxResults?: number;

  /**
   * Opaque pagination token to go to next page based on previous query.
   *
   * @generated from field: optional string page_token = 3;
   */
  pageToken?: string;

  /**
   * Whether to include schemas in the response for which the principal can only access selective metadata for
   *
   * @generated from field: optional bool include_browse = 4;
   */
  includeBrowse?: boolean;
};

/**
 * Describes the message delta_sharing.external_locations.v1.ListExternalLocationsRequest.
 * Use `create(ListExternalLocationsRequestSchema)` to create a new message.
 */
export const ListExternalLocationsRequestSchema: GenMessage<ListExternalLocationsRequest, ListExternalLocationsRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_external_locations_v1_svc, 0);

/**
 * List external locations response.
 *
 * @generated from message delta_sharing.external_locations.v1.ListExternalLocationsResponse
 */
export type ListExternalLocationsResponse = Message<"delta_sharing.external_locations.v1.ListExternalLocationsResponse"> & {
  /**
   * The external locations returned.
   *
   * @generated from field: repeated delta_sharing.external_locations.v1.ExternalLocationInfo external_locations = 1;
   */
  externalLocations: ExternalLocationInfo[];

  /**
   * The next_page_token value to include in the next List request.
   *
   * @generated from field: optional string next_page_token = 2;
   */
  nextPageToken?: string;
};

/**
 * List external locations response.
 *
 * @generated from message delta_sharing.external_locations.v1.ListExternalLocationsResponse
 */
export type ListExternalLocationsResponseJson = {
  /**
   * The external locations returned.
   *
   * @generated from field: repeated delta_sharing.external_locations.v1.ExternalLocationInfo external_locations = 1;
   */
  externalLocations?: ExternalLocationInfoJson[];

  /**
   * The next_page_token value to include in the next List request.
   *
   * @generated from field: optional string next_page_token = 2;
   */
  nextPageToken?: string;
};

/**
 * Describes the message delta_sharing.external_locations.v1.ListExternalLocationsResponse.
 * Use `create(ListExternalLocationsResponseSchema)` to create a new message.
 */
export const ListExternalLocationsResponseSchema: GenMessage<ListExternalLocationsResponse, ListExternalLocationsResponseJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_external_locations_v1_svc, 1);

/**
 * Create a new external location
 *
 * @generated from message delta_sharing.external_locations.v1.CreateExternalLocationRequest
 */
export type CreateExternalLocationRequest = Message<"delta_sharing.external_locations.v1.CreateExternalLocationRequest"> & {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Path URL of the external location.
   *
   * @generated from field: string url = 2;
   */
  url: string;

  /**
   * Name of the storage credential used with this location.
   *
   * @generated from field: string credential_name = 3;
   */
  credentialName: string;

  /**
   * Indicates whether the external location is read-only.
   *
   * @generated from field: optional bool read_only = 4;
   */
  readOnly?: boolean;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 5;
   */
  comment?: string;

  /**
   * Skips validation of the storage credential associated with the external location.
   *
   * @generated from field: optional bool skip_validation = 6;
   */
  skipValidation?: boolean;
};

/**
 * Create a new external location
 *
 * @generated from message delta_sharing.external_locations.v1.CreateExternalLocationRequest
 */
export type CreateExternalLocationRequestJson = {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Path URL of the external location.
   *
   * @generated from field: string url = 2;
   */
  url?: string;

  /**
   * Name of the storage credential used with this location.
   *
   * @generated from field: string credential_name = 3;
   */
  credentialName?: string;

  /**
   * Indicates whether the external location is read-only.
   *
   * @generated from field: optional bool read_only = 4;
   */
  readOnly?: boolean;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 5;
   */
  comment?: string;

  /**
   * Skips validation of the storage credential associated with the external location.
   *
   * @generated from field: optional bool skip_validation = 6;
   */
  skipValidation?: boolean;
};

/**
 * Describes the message delta_sharing.external_locations.v1.CreateExternalLocationRequest.
 * Use `create(CreateExternalLocationRequestSchema)` to create a new message.
 */
export const CreateExternalLocationRequestSchema: GenMessage<CreateExternalLocationRequest, CreateExternalLocationRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_external_locations_v1_svc, 2);

/**
 * Get an external location
 *
 * @generated from message delta_sharing.external_locations.v1.GetExternalLocationRequest
 */
export type GetExternalLocationRequest = Message<"delta_sharing.external_locations.v1.GetExternalLocationRequest"> & {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Get an external location
 *
 * @generated from message delta_sharing.external_locations.v1.GetExternalLocationRequest
 */
export type GetExternalLocationRequestJson = {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name?: string;
};

/**
 * Describes the message delta_sharing.external_locations.v1.GetExternalLocationRequest.
 * Use `create(GetExternalLocationRequestSchema)` to create a new message.
 */
export const GetExternalLocationRequestSchema: GenMessage<GetExternalLocationRequest, GetExternalLocationRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_external_locations_v1_svc, 3);

/**
 * Update an external location
 *
 * @generated from message delta_sharing.external_locations.v1.UpdateExternalLocationRequest
 */
export type UpdateExternalLocationRequest = Message<"delta_sharing.external_locations.v1.UpdateExternalLocationRequest"> & {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Path URL of the external location.
   *
   * @generated from field: optional string url = 2;
   */
  url?: string;

  /**
   * Name of the storage credential used with this location.
   *
   * @generated from field: optional string credential_name = 3;
   */
  credentialName?: string;

  /**
   * Indicates whether the external location is read-only.
   *
   * @generated from field: optional bool read_only = 4;
   */
  readOnly?: boolean;

  /**
   * owner of the external location.
   *
   * @generated from field: optional string owner = 5;
   */
  owner?: string;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 6;
   */
  comment?: string;

  /**
   * new name of the external location.
   *
   * @generated from field: optional string new_name = 7;
   */
  newName?: string;

  /**
   * force update of the external location.
   *
   * @generated from field: optional bool force = 8;
   */
  force?: boolean;

  /**
   * Skips validation of the storage credential associated with the external location.
   *
   * @generated from field: optional bool skip_validation = 9;
   */
  skipValidation?: boolean;
};

/**
 * Update an external location
 *
 * @generated from message delta_sharing.external_locations.v1.UpdateExternalLocationRequest
 */
export type UpdateExternalLocationRequestJson = {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Path URL of the external location.
   *
   * @generated from field: optional string url = 2;
   */
  url?: string;

  /**
   * Name of the storage credential used with this location.
   *
   * @generated from field: optional string credential_name = 3;
   */
  credentialName?: string;

  /**
   * Indicates whether the external location is read-only.
   *
   * @generated from field: optional bool read_only = 4;
   */
  readOnly?: boolean;

  /**
   * owner of the external location.
   *
   * @generated from field: optional string owner = 5;
   */
  owner?: string;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 6;
   */
  comment?: string;

  /**
   * new name of the external location.
   *
   * @generated from field: optional string new_name = 7;
   */
  newName?: string;

  /**
   * force update of the external location.
   *
   * @generated from field: optional bool force = 8;
   */
  force?: boolean;

  /**
   * Skips validation of the storage credential associated with the external location.
   *
   * @generated from field: optional bool skip_validation = 9;
   */
  skipValidation?: boolean;
};

/**
 * Describes the message delta_sharing.external_locations.v1.UpdateExternalLocationRequest.
 * Use `create(UpdateExternalLocationRequestSchema)` to create a new message.
 */
export const UpdateExternalLocationRequestSchema: GenMessage<UpdateExternalLocationRequest, UpdateExternalLocationRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_external_locations_v1_svc, 4);

/**
 * Delete an external location
 *
 * @generated from message delta_sharing.external_locations.v1.DeleteExternalLocationRequest
 */
export type DeleteExternalLocationRequest = Message<"delta_sharing.external_locations.v1.DeleteExternalLocationRequest"> & {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Force deletion even if the external location is not empty.
   *
   * @generated from field: optional bool force = 2;
   */
  force?: boolean;
};

/**
 * Delete an external location
 *
 * @generated from message delta_sharing.external_locations.v1.DeleteExternalLocationRequest
 */
export type DeleteExternalLocationRequestJson = {
  /**
   * Name of external location.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Force deletion even if the external location is not empty.
   *
   * @generated from field: optional bool force = 2;
   */
  force?: boolean;
};

/**
 * Describes the message delta_sharing.external_locations.v1.DeleteExternalLocationRequest.
 * Use `create(DeleteExternalLocationRequestSchema)` to create a new message.
 */
export const DeleteExternalLocationRequestSchema: GenMessage<DeleteExternalLocationRequest, DeleteExternalLocationRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_external_locations_v1_svc, 5);

/**
 * @generated from service delta_sharing.external_locations.v1.ExternalLocationsService
 */
export const ExternalLocationsService: GenService<{
  /**
   * List external locations
   *
   * @generated from rpc delta_sharing.external_locations.v1.ExternalLocationsService.ListExternalLocations
   */
  listExternalLocations: {
    methodKind: "unary";
    input: typeof ListExternalLocationsRequestSchema;
    output: typeof ListExternalLocationsResponseSchema;
  },
  /**
   * Create a new external location
   *
   * @generated from rpc delta_sharing.external_locations.v1.ExternalLocationsService.CreateExternalLocation
   */
  createExternalLocation: {
    methodKind: "unary";
    input: typeof CreateExternalLocationRequestSchema;
    output: typeof ExternalLocationInfoSchema;
  },
  /**
   * Get an external location
   *
   * @generated from rpc delta_sharing.external_locations.v1.ExternalLocationsService.GetExternalLocation
   */
  getExternalLocation: {
    methodKind: "unary";
    input: typeof GetExternalLocationRequestSchema;
    output: typeof ExternalLocationInfoSchema;
  },
  /**
   * Update an external location
   *
   * @generated from rpc delta_sharing.external_locations.v1.ExternalLocationsService.UpdateExternalLocation
   */
  updateExternalLocation: {
    methodKind: "unary";
    input: typeof UpdateExternalLocationRequestSchema;
    output: typeof ExternalLocationInfoSchema;
  },
  /**
   * Delete an external location
   *
   * @generated from rpc delta_sharing.external_locations.v1.ExternalLocationsService.DeleteExternalLocation
   */
  deleteExternalLocation: {
    methodKind: "unary";
    input: typeof DeleteExternalLocationRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_delta_sharing_external_locations_v1_svc, 0);

