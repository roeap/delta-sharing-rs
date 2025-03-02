// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file delta_sharing/catalogs/v1/svc.proto (package delta_sharing.catalogs.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../../buf/validate/validate_pb";
import type { CatalogInfo, CatalogInfoJson, CatalogInfoSchema } from "./models_pb";
import { file_delta_sharing_catalogs_v1_models } from "./models_pb";
import { file_gnostic_openapi_v3_openapiv3 } from "../../../gnostic/openapi/v3/openapiv3_pb";
import { file_gnostic_openapi_v3_annotations } from "../../../gnostic/openapi/v3/annotations_pb";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import { file_google_api_client } from "../../../google/api/client_pb";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import { file_google_api_resource } from "../../../google/api/resource_pb";
import type { EmptySchema, StructJson } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file delta_sharing/catalogs/v1/svc.proto.
 */
export const file_delta_sharing_catalogs_v1_svc: GenFile = /*@__PURE__*/
  fileDesc("CiNkZWx0YV9zaGFyaW5nL2NhdGFsb2dzL3YxL3N2Yy5wcm90bxIZZGVsdGFfc2hhcmluZy5jYXRhbG9ncy52MSJ7ChNMaXN0Q2F0YWxvZ3NSZXF1ZXN0EicKC21heF9yZXN1bHRzGAIgASgFQg3gQQG6SAcaBRDoByAASACIAQESHAoKcGFnZV90b2tlbhgDIAEoCUID4EEBSAGIAQFCDgoMX21heF9yZXN1bHRzQg0KC19wYWdlX3Rva2VuIoIBChRMaXN0Q2F0YWxvZ3NSZXNwb25zZRI4CghjYXRhbG9ncxgBIAMoCzImLmRlbHRhX3NoYXJpbmcuY2F0YWxvZ3MudjEuQ2F0YWxvZ0luZm8SHAoPbmV4dF9wYWdlX3Rva2VuGAIgASgJSACIAQFCEgoQX25leHRfcGFnZV90b2tlbiKQAwoUQ3JlYXRlQ2F0YWxvZ1JlcXVlc3QSMQoEbmFtZRgBIAEoCUIj4EECukgdchsyGV5bYS16XVswLTlhLXpfXSpbMC05YS16XSQSGQoHY29tbWVudBgCIAEoCUID4EEBSACIAQESNQoKcHJvcGVydGllcxgDIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RCA+BBAUgBiAEBEiYKDHN0b3JhZ2Vfcm9vdBgEIAEoCUIL4EEBukgFcgOIAQFIAogBARJACg1wcm92aWRlcl9uYW1lGAUgASgJQiTgQQG6SB5yHDIaXlthLXpdWzAtOWEtei1fXSpbMC05YS16XSRIA4gBARI8CgpzaGFyZV9uYW1lGAYgASgJQiPgQQG6SB1yGzIZXlthLXpdWzAtOWEtel9dKlswLTlhLXpdJEgEiAEBQgoKCF9jb21tZW50Qg0KC19wcm9wZXJ0aWVzQg8KDV9zdG9yYWdlX3Jvb3RCEAoOX3Byb3ZpZGVyX25hbWVCDQoLX3NoYXJlX25hbWUiewoRR2V0Q2F0YWxvZ1JlcXVlc3QSMQoEbmFtZRgBIAEoCUIj4EECukgdchsyGV5bYS16XVswLTlhLXpfXSpbMC05YS16XSQSIAoOaW5jbHVkZV9icm93c2UYAiABKAhCA+BBAUgAiAEBQhEKD19pbmNsdWRlX2Jyb3dzZSKQAgoUVXBkYXRlQ2F0YWxvZ1JlcXVlc3QSMQoEbmFtZRgBIAEoCUIj4EECukgdchsyGV5bYS16XVswLTlhLXpfXSpbMC05YS16XSQSFwoFb3duZXIYAiABKAlCA+BBAUgAiAEBEhkKB2NvbW1lbnQYAyABKAlCA+BBAUgBiAEBEjUKCnByb3BlcnRpZXMYBCABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0QgPgQQFIAogBARI1CghuZXdfbmFtZRgFIAEoCUIj4EEBukgdchsyGV5bYS16XVswLTlhLXpfXSpbMC05YS16XSRCCAoGX293bmVyQgoKCF9jb21tZW50Qg0KC19wcm9wZXJ0aWVzImwKFERlbGV0ZUNhdGFsb2dSZXF1ZXN0EjEKBG5hbWUYASABKAlCI+BBArpIHXIbMhleW2Etel1bMC05YS16X10qWzAtOWEtel0kEhcKBWZvcmNlGAIgASgIQgPgQQFIAIgBAUIICgZfZm9yY2Uy6QUKD0NhdGFsb2dzU2VydmljZRKTAQoMTGlzdENhdGFsb2dzEi4uZGVsdGFfc2hhcmluZy5jYXRhbG9ncy52MS5MaXN0Q2F0YWxvZ3NSZXF1ZXN0Gi8uZGVsdGFfc2hhcmluZy5jYXRhbG9ncy52MS5MaXN0Q2F0YWxvZ3NSZXNwb25zZSIiukcOKgxMaXN0Q2F0YWxvZ3OC0+STAgsSCS9jYXRhbG9ncxKQAQoNQ3JlYXRlQ2F0YWxvZxIvLmRlbHRhX3NoYXJpbmcuY2F0YWxvZ3MudjEuQ3JlYXRlQ2F0YWxvZ1JlcXVlc3QaJi5kZWx0YV9zaGFyaW5nLmNhdGFsb2dzLnYxLkNhdGFsb2dJbmZvIia6Rw8qDUNyZWF0ZUNhdGFsb2eC0+STAg46ASoiCS9jYXRhbG9ncxKLAQoKR2V0Q2F0YWxvZxIsLmRlbHRhX3NoYXJpbmcuY2F0YWxvZ3MudjEuR2V0Q2F0YWxvZ1JlcXVlc3QaJi5kZWx0YV9zaGFyaW5nLmNhdGFsb2dzLnYxLkNhdGFsb2dJbmZvIie6RwwqCkdldENhdGFsb2eC0+STAhISEC9jYXRhbG9ncy97bmFtZX0SlwEKDVVwZGF0ZUNhdGFsb2cSLy5kZWx0YV9zaGFyaW5nLmNhdGFsb2dzLnYxLlVwZGF0ZUNhdGFsb2dSZXF1ZXN0GiYuZGVsdGFfc2hhcmluZy5jYXRhbG9ncy52MS5DYXRhbG9nSW5mbyItukcPKg1VcGRhdGVDYXRhbG9ngtPkkwIVOgEqMhAvY2F0YWxvZ3Mve25hbWV9EoQBCg1EZWxldGVDYXRhbG9nEi8uZGVsdGFfc2hhcmluZy5jYXRhbG9ncy52MS5EZWxldGVDYXRhbG9nUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSIqukcPKg1EZWxldGVDYXRhbG9ngtPkkwISKhAvY2F0YWxvZ3Mve25hbWV9QoACCh1jb20uZGVsdGFfc2hhcmluZy5jYXRhbG9ncy52MUIIU3ZjUHJvdG9QAVpTZ2l0aHViLmNvbS9kZWx0YS1pbmN1YmF0b3IvZGVsdGEtc2hhcmluZy1ycy9nby9kZWx0YV9zaGFyaW5nL2NhdGFsb2dzL3YxO2NhdGFsb2dzdjGiAgNEQ1iqAhhEZWx0YVNoYXJpbmcuQ2F0YWxvZ3MuVjHKAhhEZWx0YVNoYXJpbmdcQ2F0YWxvZ3NcVjHiAiREZWx0YVNoYXJpbmdcQ2F0YWxvZ3NcVjFcR1BCTWV0YWRhdGHqAhpEZWx0YVNoYXJpbmc6OkNhdGFsb2dzOjpWMWIGcHJvdG8z", [file_buf_validate_validate, file_delta_sharing_catalogs_v1_models, file_gnostic_openapi_v3_openapiv3, file_gnostic_openapi_v3_annotations, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_empty, file_google_protobuf_struct]);

/**
 * List catalogs
 *
 * @generated from message delta_sharing.catalogs.v1.ListCatalogsRequest
 */
export type ListCatalogsRequest = Message<"delta_sharing.catalogs.v1.ListCatalogsRequest"> & {
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
};

/**
 * List catalogs
 *
 * @generated from message delta_sharing.catalogs.v1.ListCatalogsRequest
 */
export type ListCatalogsRequestJson = {
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
};

/**
 * Describes the message delta_sharing.catalogs.v1.ListCatalogsRequest.
 * Use `create(ListCatalogsRequestSchema)` to create a new message.
 */
export const ListCatalogsRequestSchema: GenMessage<ListCatalogsRequest, ListCatalogsRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_catalogs_v1_svc, 0);

/**
 * List catalogs response.
 *
 * @generated from message delta_sharing.catalogs.v1.ListCatalogsResponse
 */
export type ListCatalogsResponse = Message<"delta_sharing.catalogs.v1.ListCatalogsResponse"> & {
  /**
   * The catalogs returned.
   *
   * @generated from field: repeated delta_sharing.catalogs.v1.CatalogInfo catalogs = 1;
   */
  catalogs: CatalogInfo[];

  /**
   * The next_page_token value to include in the next List request.
   *
   * @generated from field: optional string next_page_token = 2;
   */
  nextPageToken?: string;
};

/**
 * List catalogs response.
 *
 * @generated from message delta_sharing.catalogs.v1.ListCatalogsResponse
 */
export type ListCatalogsResponseJson = {
  /**
   * The catalogs returned.
   *
   * @generated from field: repeated delta_sharing.catalogs.v1.CatalogInfo catalogs = 1;
   */
  catalogs?: CatalogInfoJson[];

  /**
   * The next_page_token value to include in the next List request.
   *
   * @generated from field: optional string next_page_token = 2;
   */
  nextPageToken?: string;
};

/**
 * Describes the message delta_sharing.catalogs.v1.ListCatalogsResponse.
 * Use `create(ListCatalogsResponseSchema)` to create a new message.
 */
export const ListCatalogsResponseSchema: GenMessage<ListCatalogsResponse, ListCatalogsResponseJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_catalogs_v1_svc, 1);

/**
 * Create a new catalog
 *
 * @generated from message delta_sharing.catalogs.v1.CreateCatalogRequest
 */
export type CreateCatalogRequest = Message<"delta_sharing.catalogs.v1.CreateCatalogRequest"> & {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 2;
   */
  comment?: string;

  /**
   * A map of key-value properties attached to the securable.
   *
   * @generated from field: optional google.protobuf.Struct properties = 3;
   */
  properties?: JsonObject;

  /**
   * Storage root URL for managed tables within catalog.
   *
   * @generated from field: optional string storage_root = 4;
   */
  storageRoot?: string;

  /**
   * The name of delta sharing provider.
   *
   * A Delta Sharing catalog is a catalog that is based on a Delta share on a remote sharing server.
   *
   * @generated from field: optional string provider_name = 5;
   */
  providerName?: string;

  /**
   * The name of the share under the share provider.
   *
   * @generated from field: optional string share_name = 6;
   */
  shareName?: string;
};

/**
 * Create a new catalog
 *
 * @generated from message delta_sharing.catalogs.v1.CreateCatalogRequest
 */
export type CreateCatalogRequestJson = {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 2;
   */
  comment?: string;

  /**
   * A map of key-value properties attached to the securable.
   *
   * @generated from field: optional google.protobuf.Struct properties = 3;
   */
  properties?: StructJson;

  /**
   * Storage root URL for managed tables within catalog.
   *
   * @generated from field: optional string storage_root = 4;
   */
  storageRoot?: string;

  /**
   * The name of delta sharing provider.
   *
   * A Delta Sharing catalog is a catalog that is based on a Delta share on a remote sharing server.
   *
   * @generated from field: optional string provider_name = 5;
   */
  providerName?: string;

  /**
   * The name of the share under the share provider.
   *
   * @generated from field: optional string share_name = 6;
   */
  shareName?: string;
};

/**
 * Describes the message delta_sharing.catalogs.v1.CreateCatalogRequest.
 * Use `create(CreateCatalogRequestSchema)` to create a new message.
 */
export const CreateCatalogRequestSchema: GenMessage<CreateCatalogRequest, CreateCatalogRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_catalogs_v1_svc, 2);

/**
 * Get a catalog
 *
 * @generated from message delta_sharing.catalogs.v1.GetCatalogRequest
 */
export type GetCatalogRequest = Message<"delta_sharing.catalogs.v1.GetCatalogRequest"> & {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Whether to include catalogs in the response for which the principal can only access selective metadata for
   *
   * @generated from field: optional bool include_browse = 2;
   */
  includeBrowse?: boolean;
};

/**
 * Get a catalog
 *
 * @generated from message delta_sharing.catalogs.v1.GetCatalogRequest
 */
export type GetCatalogRequestJson = {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Whether to include catalogs in the response for which the principal can only access selective metadata for
   *
   * @generated from field: optional bool include_browse = 2;
   */
  includeBrowse?: boolean;
};

/**
 * Describes the message delta_sharing.catalogs.v1.GetCatalogRequest.
 * Use `create(GetCatalogRequestSchema)` to create a new message.
 */
export const GetCatalogRequestSchema: GenMessage<GetCatalogRequest, GetCatalogRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_catalogs_v1_svc, 3);

/**
 * Update a catalog
 *
 * @generated from message delta_sharing.catalogs.v1.UpdateCatalogRequest
 */
export type UpdateCatalogRequest = Message<"delta_sharing.catalogs.v1.UpdateCatalogRequest"> & {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Username of new owner of catalog.
   *
   * @generated from field: optional string owner = 2;
   */
  owner?: string;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 3;
   */
  comment?: string;

  /**
   * A map of key-value properties attached to the securable.
   *
   * When provided in update request, the specified properties will override the existing properties.
   * To add and remove properties, one would need to perform a read-modify-write.
   *
   * @generated from field: optional google.protobuf.Struct properties = 4;
   */
  properties?: JsonObject;

  /**
   * Name of catalog.
   *
   * @generated from field: string new_name = 5;
   */
  newName: string;
};

/**
 * Update a catalog
 *
 * @generated from message delta_sharing.catalogs.v1.UpdateCatalogRequest
 */
export type UpdateCatalogRequestJson = {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Username of new owner of catalog.
   *
   * @generated from field: optional string owner = 2;
   */
  owner?: string;

  /**
   * User-provided free-form text description.
   *
   * @generated from field: optional string comment = 3;
   */
  comment?: string;

  /**
   * A map of key-value properties attached to the securable.
   *
   * When provided in update request, the specified properties will override the existing properties.
   * To add and remove properties, one would need to perform a read-modify-write.
   *
   * @generated from field: optional google.protobuf.Struct properties = 4;
   */
  properties?: StructJson;

  /**
   * Name of catalog.
   *
   * @generated from field: string new_name = 5;
   */
  newName?: string;
};

/**
 * Describes the message delta_sharing.catalogs.v1.UpdateCatalogRequest.
 * Use `create(UpdateCatalogRequestSchema)` to create a new message.
 */
export const UpdateCatalogRequestSchema: GenMessage<UpdateCatalogRequest, UpdateCatalogRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_catalogs_v1_svc, 4);

/**
 * Delete a catalog
 *
 * @generated from message delta_sharing.catalogs.v1.DeleteCatalogRequest
 */
export type DeleteCatalogRequest = Message<"delta_sharing.catalogs.v1.DeleteCatalogRequest"> & {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Force deletion even if the catalog is not empty.
   *
   * @generated from field: optional bool force = 2;
   */
  force?: boolean;
};

/**
 * Delete a catalog
 *
 * @generated from message delta_sharing.catalogs.v1.DeleteCatalogRequest
 */
export type DeleteCatalogRequestJson = {
  /**
   * Name of catalog.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Force deletion even if the catalog is not empty.
   *
   * @generated from field: optional bool force = 2;
   */
  force?: boolean;
};

/**
 * Describes the message delta_sharing.catalogs.v1.DeleteCatalogRequest.
 * Use `create(DeleteCatalogRequestSchema)` to create a new message.
 */
export const DeleteCatalogRequestSchema: GenMessage<DeleteCatalogRequest, DeleteCatalogRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_catalogs_v1_svc, 5);

/**
 * Manage catalogs and schemas in the service.
 *
 * @generated from service delta_sharing.catalogs.v1.CatalogsService
 */
export const CatalogsService: GenService<{
  /**
   * List catalogs
   *
   * Gets an array of catalogs in the metastore. If the caller is the metastore admin,
   * all catalogs will be retrieved. Otherwise, only catalogs owned by the caller
   * (or for which the caller has the USE_CATALOG privilege) will be retrieved.
   * There is no guarantee of a specific ordering of the elements in the array.
   *
   * @generated from rpc delta_sharing.catalogs.v1.CatalogsService.ListCatalogs
   */
  listCatalogs: {
    methodKind: "unary";
    input: typeof ListCatalogsRequestSchema;
    output: typeof ListCatalogsResponseSchema;
  },
  /**
   * Create a new catalog
   *
   * Creates a new catalog instance in the parent metastore if the caller
   * is a metastore admin or has the CREATE_CATALOG privilege.
   *
   * @generated from rpc delta_sharing.catalogs.v1.CatalogsService.CreateCatalog
   */
  createCatalog: {
    methodKind: "unary";
    input: typeof CreateCatalogRequestSchema;
    output: typeof CatalogInfoSchema;
  },
  /**
   * Get a catalog
   *
   * Gets the specified catalog in a metastore. The caller must be a metastore admin,
   * the owner of the catalog, or a user that has the USE_CATALOG privilege set for their account.
   *
   * @generated from rpc delta_sharing.catalogs.v1.CatalogsService.GetCatalog
   */
  getCatalog: {
    methodKind: "unary";
    input: typeof GetCatalogRequestSchema;
    output: typeof CatalogInfoSchema;
  },
  /**
   * Update a catalog
   *
   * Updates the catalog that matches the supplied name. The caller must be either
   * the owner of the catalog, or a metastore admin (when changing the owner field of the catalog).
   *
   * @generated from rpc delta_sharing.catalogs.v1.CatalogsService.UpdateCatalog
   */
  updateCatalog: {
    methodKind: "unary";
    input: typeof UpdateCatalogRequestSchema;
    output: typeof CatalogInfoSchema;
  },
  /**
   * Delete a catalog
   *
   * Deletes the catalog that matches the supplied name. The caller must
   * be a metastore admin or the owner of the catalog.
   *
   * @generated from rpc delta_sharing.catalogs.v1.CatalogsService.DeleteCatalog
   */
  deleteCatalog: {
    methodKind: "unary";
    input: typeof DeleteCatalogRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_delta_sharing_catalogs_v1_svc, 0);

