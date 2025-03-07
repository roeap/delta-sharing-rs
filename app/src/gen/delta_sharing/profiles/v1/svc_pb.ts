// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file delta_sharing/profiles/v1/svc.proto (package delta_sharing.profiles.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file delta_sharing/profiles/v1/svc.proto.
 */
export const file_delta_sharing_profiles_v1_svc: GenFile = /*@__PURE__*/
  fileDesc("CiNkZWx0YV9zaGFyaW5nL3Byb2ZpbGVzL3YxL3N2Yy5wcm90bxIZZGVsdGFfc2hhcmluZy5wcm9maWxlcy52MSKGAQoHUHJvZmlsZRIhChlzaGFyZV9jcmVkZW50aWFsc192ZXJzaW9uGAEgASgFEhAKCGVuZHBvaW50GAIgASgJEhQKDGJlYXJlcl90b2tlbhgDIAEoCRIcCg9leHBpcmF0aW9uX3RpbWUYBCABKAlIAIgBAUISChBfZXhwaXJhdGlvbl90aW1lIiYKFENyZWF0ZVByb2ZpbGVSZXF1ZXN0Eg4KBmNsYWltcxgBIAEoDCJMChVDcmVhdGVQcm9maWxlUmVzcG9uc2USMwoHcHJvZmlsZRgBIAEoCzIiLmRlbHRhX3NoYXJpbmcucHJvZmlsZXMudjEuUHJvZmlsZUKAAgodY29tLmRlbHRhX3NoYXJpbmcucHJvZmlsZXMudjFCCFN2Y1Byb3RvUAFaU2dpdGh1Yi5jb20vZGVsdGEtaW5jdWJhdG9yL2RlbHRhLXNoYXJpbmctcnMvZ28vZGVsdGFfc2hhcmluZy9wcm9maWxlcy92MTtwcm9maWxlc3YxogIDRFBYqgIYRGVsdGFTaGFyaW5nLlByb2ZpbGVzLlYxygIYRGVsdGFTaGFyaW5nXFByb2ZpbGVzXFYx4gIkRGVsdGFTaGFyaW5nXFByb2ZpbGVzXFYxXEdQQk1ldGFkYXRh6gIaRGVsdGFTaGFyaW5nOjpQcm9maWxlczo6VjFiBnByb3RvMw");

/**
 * @generated from message delta_sharing.profiles.v1.Profile
 */
export type Profile = Message<"delta_sharing.profiles.v1.Profile"> & {
  /**
   * The file format version of the profile file. This version will be increased whenever
   * non-forward-compatible changes are made to the profile format. When a client is running
   * an unsupported profile file format version, it should show an error message instructing
   * the user to upgrade to a newer version of their client.
   *
   * @generated from field: int32 share_credentials_version = 1;
   */
  shareCredentialsVersion: number;

  /**
   * The url of the sharing server.
   *
   * @generated from field: string endpoint = 2;
   */
  endpoint: string;

  /**
   * The bearer token to access the server.
   *
   * @generated from field: string bearer_token = 3;
   */
  bearerToken: string;

  /**
   * The expiration time of the bearer token in ISO 8601 format. This field is optional
   * and if it is not provided, the bearer token can be seen as never expire.
   *
   * @generated from field: optional string expiration_time = 4;
   */
  expirationTime?: string;
};

/**
 * @generated from message delta_sharing.profiles.v1.Profile
 */
export type ProfileJson = {
  /**
   * The file format version of the profile file. This version will be increased whenever
   * non-forward-compatible changes are made to the profile format. When a client is running
   * an unsupported profile file format version, it should show an error message instructing
   * the user to upgrade to a newer version of their client.
   *
   * @generated from field: int32 share_credentials_version = 1;
   */
  shareCredentialsVersion?: number;

  /**
   * The url of the sharing server.
   *
   * @generated from field: string endpoint = 2;
   */
  endpoint?: string;

  /**
   * The bearer token to access the server.
   *
   * @generated from field: string bearer_token = 3;
   */
  bearerToken?: string;

  /**
   * The expiration time of the bearer token in ISO 8601 format. This field is optional
   * and if it is not provided, the bearer token can be seen as never expire.
   *
   * @generated from field: optional string expiration_time = 4;
   */
  expirationTime?: string;
};

/**
 * Describes the message delta_sharing.profiles.v1.Profile.
 * Use `create(ProfileSchema)` to create a new message.
 */
export const ProfileSchema: GenMessage<Profile, ProfileJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_profiles_v1_svc, 0);

/**
 * Create a new profile
 *
 * @generated from message delta_sharing.profiles.v1.CreateProfileRequest
 */
export type CreateProfileRequest = Message<"delta_sharing.profiles.v1.CreateProfileRequest"> & {
  /**
   * serialized profile claims
   *
   * @generated from field: bytes claims = 1;
   */
  claims: Uint8Array;
};

/**
 * Create a new profile
 *
 * @generated from message delta_sharing.profiles.v1.CreateProfileRequest
 */
export type CreateProfileRequestJson = {
  /**
   * serialized profile claims
   *
   * @generated from field: bytes claims = 1;
   */
  claims?: string;
};

/**
 * Describes the message delta_sharing.profiles.v1.CreateProfileRequest.
 * Use `create(CreateProfileRequestSchema)` to create a new message.
 */
export const CreateProfileRequestSchema: GenMessage<CreateProfileRequest, CreateProfileRequestJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_profiles_v1_svc, 1);

/**
 * Create a new profile response
 *
 * @generated from message delta_sharing.profiles.v1.CreateProfileResponse
 */
export type CreateProfileResponse = Message<"delta_sharing.profiles.v1.CreateProfileResponse"> & {
  /**
   * the profile file
   *
   * @generated from field: delta_sharing.profiles.v1.Profile profile = 1;
   */
  profile?: Profile;
};

/**
 * Create a new profile response
 *
 * @generated from message delta_sharing.profiles.v1.CreateProfileResponse
 */
export type CreateProfileResponseJson = {
  /**
   * the profile file
   *
   * @generated from field: delta_sharing.profiles.v1.Profile profile = 1;
   */
  profile?: ProfileJson;
};

/**
 * Describes the message delta_sharing.profiles.v1.CreateProfileResponse.
 * Use `create(CreateProfileResponseSchema)` to create a new message.
 */
export const CreateProfileResponseSchema: GenMessage<CreateProfileResponse, CreateProfileResponseJson> = /*@__PURE__*/
  messageDesc(file_delta_sharing_profiles_v1_svc, 2);

